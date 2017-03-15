const path = require('path');
const { set, map } = require('lodash');
const { stringifyRequest } = require('loader-utils');
const postcss = require('postcss');
const camelCase = require('camelcase');
const postcssPlugin = require('./post-css-plugin');
const validAttributes = require('./utils/validAttributes');

module.exports = function(content) {
  const { locals } = this.exec(content, this.resource);
  const [[, string]] = this.exec(content, this.resource);
  const scope = { components: {} };
  const callback = this.async();
  postcss([postcssPlugin({
    locals,
    onProp(component, prop, className) {
      set(scope, ['components', component, 'props', prop], className);
    },
    onComponent(component, className) {
      set(scope, ['components', component, 'className'], className);
    },
    onAttr(component, property, attr) {
      set(scope, ['components', component, 'attrs', camelCase(property)], attr);
    },
  })])
  .process(string)
  .then(() => {
    const createStyledComponentPath = stringifyRequest(this, path.join(__dirname, 'create-styled-component'));
    callback(null, `
      import createStyledComponent from ${createStyledComponentPath};

      const style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(\`${string}\`));
      document.head.appendChild(style);

      ${map(scope.components, ({ className, props, attrs }, displayName) => `
      export const ${displayName} = createStyledComponent(
        ${JSON.stringify(displayName)},
        ${JSON.stringify(className)},
        ${JSON.stringify(props)},
        ${JSON.stringify(attrs)}
      );
      `).join('\n')}
    `);
  });
};