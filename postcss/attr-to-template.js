const valueParser = require('postcss-value-parser');
const _ = require('lodash/fp');
const postfixAttrValue = require('./postfix-attr-value');

const isAttrFunction = _.matches({ type: 'function', value: 'attr' });

const attrToTemplate = value => {
  const attributes = [];
  const template = valueParser(value)
    .walk(node => {
      if (isAttrFunction(node)) {
        _.flow([
          _.filter({ type: 'word' }),
          _.map(_.get('value')),
          ([name, type, defaultValue]) => {
            attributes.push(name);
            node.type = 'word';
            node.value = postfixAttrValue(
              `{ ${ name } ${ defaultValue ? `= "${ defaultValue }"` : '' }}`,
              type
            );
          },
        ])(node.nodes);
      }
    })
    .toString();
  return {
    template,
    attributes,
  };
};

module.exports = attrToTemplate;
