const { stringifyRequest } = require('loader-utils');
const { map } = require('lodash');
const validAttributes = require('./validAttributes');
const createCSSComponentPath = stringifyRequest(this, require.resolve('./create-css-component'));

module.exports = function reactWrap(string, { components }) {
  return `
    import insertCSS from 'insert-css';
    import createCSSComponent from ${createCSSComponentPath};

    const styleElement = insertCSS(\`${string}\`);

    ${map(components, ({ className, props = {}, attrs = {} }, displayName) => `
    export const ${displayName} = createCSSComponent(${JSON.stringify({
      displayName,
      className,
      props,
      attrs,
      invalidProps: flagInvalidProps(props, attrs),
    })}, styleElement.sheet.cssRules);
    `).join('\n')}
  `;
};

function flagInvalidProps(props, attrs) {
  const invalidProps = {};
  for (const prop of Object.keys(props)) {
    invalidProps[prop] = !validAttributes(prop);
  }
  for (const { name } of Object.values(attrs)) {
    invalidProps[name] = !validAttributes(name);
  }
  return invalidProps;
}