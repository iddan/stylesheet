const { stringifyRequest } = require('loader-utils');
const _ = require('lodash/fp');
const validAttributes = require('./validAttributes');
const createCSSComponentPath = stringifyRequest(this, require.resolve('./dist/create-css-component'));

const cappedMap = _.map.convert({ cap: false });

const reactDOMWrap = (components) => `
var createCSSComponent = require(${createCSSComponentPath});

${generateCSSComponentsCode(components)}`;

module.exports = reactDOMWrap;

const generateCSSComponentsCode = _.flow([
  cappedMap(({ selector, className, props = {}, attrs = {}}, displayName) => `
    exports.locals.${displayName} = createCSSComponent(${JSON.stringify({
      displayName,
      selector,
      className,
      props,
      attrs,
      invalidProps: flagInvalidProps(props, attrs),
    })});
  `),
  _.join('\n'),
]);

const flagInvalidProps = (props, attrs) => _.reduce(
  (invalidProps, prop) => _.set(prop, !validAttributes(prop), invalidProps),
  {},
  _.concat(
    _.keys(props),
    _.keys(attrs)
  )
);
