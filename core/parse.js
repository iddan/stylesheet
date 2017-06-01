const postcss = require('postcss');
const shortid = require('shortid');
const extractComponents = require('../postcss-extract-components/postcss-extract-components');

module.exports = async function parse(string, options) {
  let components;
  const { id = shortid.generate() } = options;
  const result = await postcss([
    extractComponents({
      id,
      onComponents(receivedComponents) {
        components = receivedComponents;
      },
    }),
  ]).process(string);
  return { result, components };
};
