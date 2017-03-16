const path = require('path');
const { set, map } = require('lodash');
const { stringifyRequest } = require('loader-utils');
const postcss = require('postcss');
const camelCase = require('camelcase');
const postcssPlugin = require('../core/post-css-plugin');
const validAttributes = require('../core/utils/validAttributes');

module.exports = function(content) {
  const { locals } = this.exec(content, this.resource);
  const [[, string]] = this.exec(content, this.resource);
  const scope = { components: {} };
  const callback = this.async();
  postcss([postcssPlugin({
    locals,
    onProp(component, prop, className) {
      set(scope, ['components', component, 'props', prop], className);
      set(scope, ['components', component, 'invalidProps', prop], !validAttributes(prop));
    },
    onComponent(component, className) {
      set(scope, ['components', component, 'className'], className);
    },
    onAttr(component, className, property, attr) {
      const [, name, type, defaultValue] = attr.split(/attr\(\s*(.+?)\s+(.+?)(?:,\s+(.+?))?\s*\)/);
      set(scope, ['components', component, 'attrs', camelCase(property)], { name, className, type, defaultValue });
      set(scope, ['components', component, 'invalidProps', attr], !validAttributes(attr));
    },
  })])
  .process(string)
  .then(() => {
    const createCSSComponent = stringifyRequest(this, path.join(__dirname, '../core/create-css-component'));
    callback(null, `
      import createCSSComponent from ${createCSSComponent};

      const style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(\`${string}\`));
      document.head.appendChild(style);

      ${map(scope.components, ({ className, props = {}, attrs = {}, invalidProps = {} }, displayName) => `
      export const ${displayName} = createCSSComponent(${JSON.stringify({
        displayName,
        className,
        props,
        attrs,
        invalidProps,
      })});
      `).join('\n')}
    `);
  });
};