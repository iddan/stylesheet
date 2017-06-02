const postcss = require('postcss');
const parser = require('postcss-selector-parser');
const _ = require('lodash/fp');
const appendAttribute = require('./append-attribute');
const appendAttr = require('./append-attr');

/**
 * @param {Object} options
 * @param {function} options.onComponent
 * @param {function} options.onProp
 * @param {function} options.onAttr
 */
module.exports = postcss.plugin('stylesheet', ({ onComponents, id }) => {
  return (root, result) => {
    let components = {};
    result.root.walkRules(/\b[A-Z]/, rule => {
      rule.selector = parser(selectorRoot => {
        // TODO check for walkSelectors
        for (const selector of selectorRoot.nodes) {
          const tagIndex = _.findLastIndex({ type: 'tag' }, selector.nodes);
          const tag = selector.nodes[tagIndex];
          if (!tag || !isComponentElement(tag)) {
            continue;
          }
          const { value: componentName } = tag;
          const componentClassName = `${ componentName }_${ id }`;
          components = _.set([componentName, 'className'], componentClassName, components);
          for (let i = tagIndex; i < selector.nodes.length; i++) {
            const node = selector.nodes[i];
            switch (node.type) {
              case 'attribute': {
                components = appendAttribute(id, components, componentName, node);
                break;
              }
            }
          }
          tag.replaceWith(parser.className({ value: componentClassName }));
        }
      }).process(rule.selector).result;
      if (Object.keys(components).length) {
        rule.walkDecls(decl => {
          if (isAttr(decl.value)) {
            for (const component of Object.keys(components)) {
              components = appendAttr(components, component, rule, decl);
            }
          }
        });
        rule.walkAtRules('apply', atRule => {
          for (const component of Object.keys(components)) {
            components = _.set([component, 'base'], atRule.params, components);
            atRule.remove();
          }
        });
      }
    });
    onComponents(components);
  };
});

const isComponentElement = ({ value }) => value.search(/\b[A-Z]/) > -1;
const isAttr = value => value.search(/attr\(.+?\)/) !== -1;
