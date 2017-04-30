const _ = require('lodash/fp');
const postcss = require('postcss');
const Tokenizer = require('css-selector-tokenizer');
const parseAttribute = require('./parse-attribute');

/**
 * @param {Object} options
 * @param {function} options.onComponent
 * @param {function} options.onProp
 * @param {function} options.onAttr
 */
module.exports = postcss.plugin('extract-components', options => {
  options.id = ID();
  return (root, result) => result.root.walkRules(/\b[A-Z]/, rule => {
    let component;
    rule.selector = _.flow([
      Tokenizer.parse,
      parseSelectorNode(_.assign(options, {
        onComponent(name, className) {
          component = name;
          options.onComponent(component, className);
        }
      })),
      Tokenizer.stringify,
    ])(rule.selector);
    if (component) {
      rule.walkDecls(decl => {
        const { prop, value } = decl;
        if (isAttr(value)) {
          options.onAttr(rule.selector, component, prop, value);
          decl.remove();
        }
      });
    }
  });
});

const parseSelectorNode = (options, parent) => node => {
  const { onComponent, onAttribute, id } = options;
  switch (node.type) {
    case 'element': {
      if (isComponentElement(node)) {
        const className = `${node.name}_${id}`;
        onComponent(node.name, className);
        return { type: 'class', name: className };
      }
      return node;
    }
    case 'attribute': {
      const component = parent.nodes.find(isComponentElement);
      const attribute = parseAttribute(node.content);
      if (component) {
        const className = `${component.name}-${attribute.name}_${id}`;
        onAttribute(component.name, attribute, className);
        return { type: 'class', name: className };
      }
      return node;
    }
  }
  if (node.nodes) {
    return _.update('nodes', _.map(parseSelectorNode(options, node)), node);
  }
  return node;
};

const ID = () => Math.random().toString(36).slice(3);
const isComponentElement = ({ name }) => name.search(/\b[A-Z]/) > -1;
const isAttr = value => value.search(/^attr\(.+?\)$/) !== -1;
