const _ = require('lodash/fp');
const postcss = require('postcss');
const shortid = require('shortid');
const extractComponents = require('../postcss-extract-components/postcss-extract-components');
const attrToTemplate = require('./attr-to-template');

module.exports = async function parse(string, options) {
  let components = {};
  const { id = shortid.generate() } = options;
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
        components = _.update(
          [component, 'attrs'],
          (attrs = []) => {
            const { template, attributes } = attrToTemplate(value);
            return [
              ...attrs,
              {
                prop: _.camelCase(prop),
                selector,
                template,
                attributes,
              },
            ];
          },
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
