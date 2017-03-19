const { stringifyRequest } = require('loader-utils');
const { map } = require('loadsh');
const validAttributes = require('./validAttributes');
const createCSSComponentPath = stringifyRequest(this, require.resolve('./create-css-component'));

module.exports = function reactWrap(string, { components }) {
  return `
    import createCSSComponent from ${createCSSComponentPath};

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(\`${string}\`));
    document.head.appendChild(style);

    ${map(components, ({ className, props = {}, attrs = {} }, displayName) => `
    export const ${displayName} = createCSSComponent(${JSON.stringify({
      displayName,
      className,
      props,
      attrs,
      invalidProps: flagInvalidProps(props, attrs),
    })});
    `).join('\n')}
  `;
};

function flagInvalidProps(props, attrs) {
  const invalidProps = {};
  for (let prop of Object.keys(prop)) {
    invalidProps[prop] = validAttributes[prop];
  }
  for (let { name } of Object.values(attrs)) {
    invalidProps[name] = validAttributes[name];
  }
  return invalidProps;
}