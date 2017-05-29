const _ = require('lodash/fp');
const postcss = require('postcss');
const { ID } = require('./utils');
const extractComponents = require('./postcss-extract-components');

module.exports = async function parse(string, options) {
  let components = {};
  const { id = ID() } = options;
  const result = await postcss([
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
      onApply(component, base) {
        components = _.set([component, 'base'], base, components);
      },
    }),
  ]).process(string);
  return { result, components };
};
