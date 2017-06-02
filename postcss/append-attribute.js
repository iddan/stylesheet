const parser = require('postcss-selector-parser');
const shortid = require('shortid');
const _ = require('lodash/fp');

module.exports = function appendAttribute(id, components, componentName, node) {
  const { operator, attribute, raws: { unquoted, insensitive }} = node;
  const attributeClassName = `${ componentName }-${ attribute }_${ shortid.generate() }_${ id }`;
  node.replaceWith(parser.className({ value: attributeClassName }));
  return _.update(
    [componentName, 'attributes'],
    (attributes = []) => [
      ...attributes,
      {
        operator,
        name: attribute,
        value: unquoted,
        insensitive,
        className: attributeClassName,
      },
    ],
    components
  );
};
