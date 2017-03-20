const { stringifyRequest } = require('loader-utils');
const { map } = require('lodash');
const validAttributes = require('./validAttributes');
const createCSSComponentPath = stringifyRequest(this, require.resolve('./dist/create-css-component'));

module.exports = function reactWrap(string, { components }) {
  return `
    import insertCSS from 'insert-css';
    import createCSSComponent from ${createCSSComponentPath};

    var styleElement = insertCSS(\`${string}\`);

    ${map(components, ({ selector, localClassName, props = {}, attrs = [] }, displayName) => `
    export var ${displayName} = createCSSComponent(${JSON.stringify({
      displayName,
      selector,
      localClassName,
      props,
      attrs,
      invalidProps: flagInvalidProps(props, attrs),
    })}, styleElement.sheet.cssRules);
    `).join('\n')}
  `;
};

function flagInvalidProps(props, attrs) {
  const invalidProps = {};
  for (const prop in props) {
    invalidProps[prop] = !validAttributes(prop);
  }
  for (const { name } of attrs) {
    invalidProps[name] = !validAttributes(name);
  }
  return invalidProps;
}