const postcss = require('postcss');
const { get, set } = require('lodash');
const postcssPlugin = require('./post-css-plugin');

module.exports = function parse(string, locals) {
  let scope = { components: {} };
  const { css } = postcss([postcssPlugin({
    locals,
    onProp(component, prop, selector, localClassName) {
      set(scope, ['components', component, 'props', prop], { selector, localClassName });
    },
    onComponent(component, selector, localClassName) {
      set(scope, ['components', component, 'selector'], selector);
      set(scope, ['components', component, 'localClassName'], localClassName);
    },
    onAttr(component, selector, property, attr) {
      const [, name, type, defaultValue] = attr.split(/attr\(\s*(.+?)\s+(.+?)(?:,\s+(.+?))?\s*\)/);
      if (!get(scope, ['components', component, 'attrs'])) {
        set(scope, ['components', component, 'attrs'], []);
      }
      scope.components[component].attrs.push({
        property,
        name,
        selector,
        type,
        defaultValue,
      });
    },
  })])
  .process(string);
  return { css, scope };
};