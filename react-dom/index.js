const _ = require('lodash/fp');
const validAttributes = require('./validAttributes');

exports.createComponentPath = require.resolve('./dist/create-css-component');

exports.preprocess = ({ selector, className, props = [], attrs = [] }) => ({
  selector,
  className,
  props,
  attrs,
  invalidProps: flagInvalidProps(props, attrs),
});

const flagInvalidProps = (props, attrs) => _.reduce(
  (invalidProps, prop) => _.set(prop, !validAttributes(prop), invalidProps),
  {},
  _.concat(
    _.map(_.get('name'), props),
    _.map(_.get('name'), attrs)
  )
);
