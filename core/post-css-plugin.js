const postcss = require('postcss');
const partial = require('lodash/partial');
const Tokenizer = require('css-selector-tokenizer');
const { getClassNames, reverseMap } = require('./utils');

/**
 * @param {Object} options
 * @param {Object} options.locals
 * @param {function} options.onComponent
 * @param {function} options.onProp
 * @param {function} options.onAttr
 */
module.exports = postcss.plugin('parse-css', ({ locals, onComponent, onProp, onAttr }) => {
  const externals = reverseMap(locals);
  return (root, result) => {
    root.walkRules(/\./, rule => {
      const { selector } = rule;
      for (let localClassName of getClassNames(Tokenizer.parse(selector))) {
        const externalClassName = externals[localClassName];
        if (isProp(externalClassName)) {
          const [, component, prop] = externalClassName.split(/([A-Z].+?)-/);
          onProp(component, prop, selector, localClassName);
          parseAttrs(partial(onAttr, component, selector), rule);
          return rule;
        }
        if (isComponent(externalClassName)) {
          onComponent(externalClassName, selector, localClassName);
          parseAttrs(partial(onAttr, externalClassName, selector), rule);
          return rule;
        }
        return rule;
      }
    });
  };
});

/**
 * Emit attr declarations and remove them
 * @param {Rule} rule 
 * @param {function} onAttr 
 */
function parseAttrs(onAttr, rule) {
  rule.walkDecls((/^\./, decl => {
    const { prop, value } = decl;
    if (isAttr(value)) {
      onAttr(prop, value);
      decl.remove();
    }
  }));
}

const isProp = className => className.search(/^[A-Z].+-.+/) !== -1;
const isComponent = className => className.search(/^[A-Z]/) !== -1;
const isAttr = value => value.search(/^attr\(.+?\)$/) !== -1;