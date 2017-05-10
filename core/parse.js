const _ = require('lodash/fp');
const postcss = require('postcss');
const extractComponents = require('./postcss-extract-components');
const extractImports = require('./postcss-extract-imports');

module.exports = async function parse(string) {
  let importStatements = [];
  let components = {};
  const result = await postcss([
    extractImports({
      onImport(url, mediaQuery) {
        importStatements = [...importStatements, { url, mediaQuery }];
      },
    }),
    extractComponents({
      onComponent(component, className) {
        components = _.set([component, 'className'], className, components);
      },
      onAttribute(component, attribute, className) {
        components = _.update([component, 'props'], (props = []) => [
          ...props,
          _.assign({ className }, attribute),
        ], components);
      },
      onAttr(selector, component, prop, value) {
        const [, name, type, defaultValue] = value.split(/attr\(\s*(.+?)\s+(.+?)(?:,\s+(.+?))?\s*\)/);
        components = _.update([component, 'attrs'], (attrs = []) => [
          ...attrs,
          { name, prop, type, defaultValue, selector }
        ], components);
      },
    }),
  ]).process(string);
  return { result, importStatements, components };
};
