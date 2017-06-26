const parser = require('postcss-selector-parser');
const { unique } = require('shorthash');

const parseAttributeNodes = (id, componentName, nodes) =>
  nodes.map(node => {
    const { operator, attribute, raws: { unquoted, insensitive }} = node;
    const attributeId = operator ? unique(operator + unquoted) : '';
    const attributeClassName = `${ componentName }-${ attribute }_${ attributeId }_${ id }`;
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
