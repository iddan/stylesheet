const _ = require('lodash/fp');
const attrToTemplate = require('./attr-to-template');

/**
 * @typedef {Object} Attr Components' CSS declarations which contain the attr() function representation
 * @property {string} prop The declaration's CSS property
 * @property {string} selector The CSS selector of the declaration's rule
 * @property {Template} template The declaration with attr() replaced to template placeholders
 * @property {string} attributes Attributes referenced in the declaration with the attr() function
 */

/**
 * @param {Object<Object>} components
 * @param {string} component
 * @param {string} rule
 * @param {Declaration} decl
 * @returns {Attr[]}
 */
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
