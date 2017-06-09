const _ = require('lodash/fp');
const validAttributes = require('./validAttributes');
const mapToObject = require('./map-to-object');

exports.createComponentPath = require.resolve('./dist/create-css-component');

exports.preprocess = ({ selector, className, attributes = [], attrs = [], base }) => ({
  selector,
  className,
  attributes,
  attrs,
  base,
  invalidProps: flagInvalidProps(attributes, attrs),
});

const flagInvalidProps = _.flow([
  (attributes, attrs) => _.flattenDeep(_.map('name', attributes), _.map('attributes', attrs)),
  mapToObject(prop => !validAttributes(prop)),
]);
