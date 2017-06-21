const _ = require('lodash/fp');
const validAttributes = require('./validAttributes');
const mapToObject = require('./map-to-object');

exports.createComponentPath = require.resolve('./dist/create-css-component');

/**
 * @typedef {Object} PreprocessOptions
 * @property {Object} options
 * @property {string} options.selector
 * @property {string} options.className
 * @property {Attribute[]} options.attributes
 * @property {Attr[]} options.attrs
 * @property {string} base
 */

/**
 * @typedef {PreprocessOptions} CreateComponentOptions
 * @property {Object<boolean>} invalidProps
 */

/**
 * @param {PreprocessOptions} options
 * @return {CreateComponentOptions}
 */
exports.preprocess = ({ selector, className, attributes = [], attrs = [], base }) => ({
  selector,
  className,
  attributes,
  attrs,
  base,
  invalidProps: flagInvalidProps(attributes, attrs),
});

/**
 * @param {Attributes[]} attributes
 * @param {Attr[]} attrs
 * @returns {Object<boolean>}
 */
const flagInvalidProps = _.flow([
  (attributes, attrs) => _.flattenDeep([_.map('name', attributes), _.map('attributes', attrs)]),
  mapToObject(prop => !validAttributes(prop)),
]);
