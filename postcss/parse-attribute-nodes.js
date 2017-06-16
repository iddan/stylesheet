const parser = require('postcss-selector-parser');
const shortid = require('shortid');

const parseAttributeNodes = (id, componentName, nodes) =>
  nodes.map(node => {
    const { operator, attribute, raws: { unquoted, insensitive }} = node;
    const attributeClassName = `${ componentName }-${ attribute }_${ shortid.generate() }_${ id }`;
    node.replaceWith(parser.className({ value: attributeClassName }));
    return {
      operator,
      name: attribute,
      value: unquoted,
      insensitive,
      className: attributeClassName,
    };
  });

module.exports = parseAttributeNodes;
