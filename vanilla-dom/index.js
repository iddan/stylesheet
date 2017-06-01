exports.createComponetPath = require.resolve('./src/create-component');

exports.preprocess = ({ selector, className, attributes = [], attrs = [], base }) => ({
  selector,
  className,
  attributes,
  attrs,
  base,
});
