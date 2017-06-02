const _ = require('lodash/fp');
const attrToTemplate = require('./attr-to-template');

module.exports = function appendAttr(components, component, rule, decl) {
  const { prop, value } = decl;
  decl.remove();
  return _.update(
    [component, 'attrs'],
    (attrs = []) => {
      const { template, attributes } = attrToTemplate(value);
      return [
        ...attrs,
        {
          prop: _.camelCase(prop),
          selector: rule.selector,
          template,
          attributes,
        },
      ];
    },
    components
  );
};
