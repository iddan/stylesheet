const valueParser = require('postcss-value-parser');
const _ = require('lodash/fp');
const postfixAttrValue = require('./postfix-attr-value');

const isAttrFunction = _.matches({ type: 'function', value: 'attr' });

const nodesToTemplate = _.flow([
  _.filter({ value: 'word' }),
  _.map('value'),
  ([name, type, defaultValue]) => {
    const value = `{ ${ name } ${ defaultValue ? `= "${ defaultValue }"` : '' }}`;
    return postfixAttrValue(value, type);
  },
]);

const attrToTemplate = value => {
  const attributes = [];
  const template = valueParser(value)
    .walk(node => {
      if (isAttrFunction(node)) {
        node.type = 'word';
        node.value = nodesToTemplate(node.nodes);
      }
    })
    .toString();
  return { template, attributes };
};

module.exports = attrToTemplate;
