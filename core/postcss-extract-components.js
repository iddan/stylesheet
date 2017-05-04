// const _ = require('lodash/fp');
const postcss = require('postcss');
const parser = require('postcss-selector-parser');
// const Tokenizer = require('css-selector-tokenizer');
// const parseAttribute = require('./parse-attribute');

/**
 * @param {Object} options
 * @param {function} options.onComponent
 * @param {function} options.onProp
 * @param {function} options.onAttr
 */
module.exports = postcss.plugin('extract-components', ({ onComponent, onAttribute, onAttr }) => {
  const id = ID();
  return (root, result) => result.root.walkRules(/\b[A-Z]/, rule => {
    let component;
    rule.selector = parser((selectors) => {
      selectors.walkTags((node) => {
        if (isComponentElement(node)) {
          const { value } = node;
          const className = `${value}_${id}`;
          component = value;
          onComponent(value, className);
          node.replaceWith(parser.className({ value: className }));
        }
      });
      selectors.walkAttributes((node) => {
        if (component) {
          const { operator, attribute, raws: { unquoted, insensitive } } = node;
          const className = `${component}-${node.attribute}_${id}`;
          onAttribute(component, { operator, name: attribute, value: unquoted, insensitive }, className);
          node.replaceWith(parser.className({ value: className }));
        }
      });
    }).process(rule.selector).result;
    if (component) {
      rule.walkDecls(decl => {
        const { prop, value } = decl;
        if (isAttr(value)) {
          onAttr(rule.selector, component, prop, value);
          decl.remove();
        }
      });
    }
  });
});

const ID = () => Math.random().toString(36).slice(3);
const isComponentElement = ({ value }) => value.search(/\b[A-Z]/) > -1;
const isAttr = value => value.search(/^attr\(.+?\)$/) !== -1;
