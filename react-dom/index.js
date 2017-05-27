const _ = require('lodash/fp');
const validAttributes = require('./validAttributes');

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
  (attributes, attrs) => _.concat(_.map(_.get('name'), attributes), _.map(_.get('name'), attrs)),
  _.reduce((invalidProps, prop) => _.set(prop, !validAttributes(prop), invalidProps), {}),
]);
