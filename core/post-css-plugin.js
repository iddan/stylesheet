const postcss = require('postcss');
const partial = require('lodash/partial');
const { reverseMap } = require('./utils');

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
    root.walkRules(/^\./, rule => {
      const localClassName = rule.selector.replace(/^\./, '');
      const className = externals[localClassName];
      if (isProp(className)) {
        const [, component, prop] = className.split(/(^.+?)-/);
        onProp(component, prop, localClassName);
        parseAttrs(partial(onAttr, component, localClassName), rule);
        return rule;
      }
      if (isComponent(className)) {
        onComponent(className, localClassName);
        parseAttrs(partial(onAttr, className, localClassName), rule);
        return rule;
      }
      return rule;
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