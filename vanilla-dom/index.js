exports.createComponentPath = require.resolve('./dist/create-component');

exports.preprocess = ({ selector, className, attributes = [], attrs = [], base }) => ({
  selector,
  className,
  attributes,
  attrs,
  base,
});
