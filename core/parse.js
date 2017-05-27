const _ = require('lodash/fp');
const postcss = require('postcss');
const { ID } = require('./utils');
const extractComponents = require('./postcss-extract-components');
const extractImports = require('./postcss-extract-imports');

module.exports = async function parse(string, options) {
  let importStatements = [];
  let components = {};
  const { id = ID() } = options;
  const result = await postcss([
    extractImports({
      onImport(url, mediaQuery) {
        importStatements = [...importStatements, { url, mediaQuery }];
      },
    }),
    extractComponents({
      id,
      onComponent(component, className) {
        components = _.set([component, 'className'], className, components);
      },
      onAttribute(component, attribute, className) {
        components = _.update(
          [component, 'attributes'],
          (attributes = []) => [...attributes, _.assign({ className }, attribute)],
          components
        );
      },
      onAttr(selector, component, prop, value) {
        const [, name, type, defaultValue] = value.split(
          /attr\(\s*(.+?)\s+(.+?)(?:,\s+(.+?))?\s*\)/
        );
        components = _.update(
          [component, 'attrs'],
          (attrs = []) => [
            ...attrs,
            { name, prop: _.camelCase(prop), type, defaultValue, selector },
          ],
          components
        );
      },
    }),
  ]).process(string);
  return { result, importStatements, components };
};
