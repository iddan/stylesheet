const valueParser = require('postcss-value-parser');
const _ = require('lodash/fp');
const postfixAttrValue = require('./postfix-attr-value');

const isAttrFunction = _.matches({ type: 'function', value: 'attr' });

const extractWordValues = _.flow([_.filter({ type: 'word' }), _.map('value')]);

const attrToTemplate = value => {
  const attributes = [];
  const template = valueParser(value)
    .walk(node => {
      if (isAttrFunction(node)) {
        const [name, type, defaultValue] = extractWordValues(node.nodes);
        const attrValue = `{ ${ name } ${ defaultValue ? `= "${ defaultValue }"` : '' }}`;
        node.type = 'word';
        node.value = postfixAttrValue(attrValue, type);
        attributes.push(name);
      }
    })
    .toString();
  return { template, attributes };
};

module.exports = attrToTemplate;
