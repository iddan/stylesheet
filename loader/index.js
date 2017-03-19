const { set } = require('lodash');
const { getOptions } = require('loader-utils');
const postcss = require('postcss');
const reactWrap = require('../react/wrap');
const postcssPlugin = require('../core/post-css-plugin');

module.exports = function(content) {
  const { bindings } = getOptions(this);
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
    onAttr(component, className, property, attr) {
      const [, name, type, defaultValue] = attr.split(/attr\(\s*(.+?)\s+(.+?)(?:,\s+(.+?))?\s*\)/);
      set(scope, ['components', component, 'attrs', property], { name, className, type, defaultValue });
    },
  })])
  .process(string)
  .then(() => {
    switch (bindings) {
      case 'react': {
        callback(null, reactWrap(string, scope));
      }
    }
  });
};