const { stringifyRequest, getOptions } = require('loader-utils');
const shortid = require('shortid');
const _ = require('lodash/fp');

const id = shortid.generate();

const NORMAL_LOADER_PATH = require.resolve('./normal-loader.js');

const isCSSLoader = ({ path }) => path.includes('node_modules/css-loader/index.js');

module.exports.pitch = function() {
  const { loaders } = this;
  const loadersAfterCSSLoader = loaders.slice(this.loaderIndex + 1, loaders.findIndex(isCSSLoader));
  const loadersBeforeCSSLoader = loaders.slice(loaders.findIndex(isCSSLoader) + 1, loaders.length);

  const staticCSSPath = [
    '!!',
    ..._.map('request', loadersAfterCSSLoader),
    loaders.find(isCSSLoader).request + '?' + JSON.stringify({ importLoaders: 1 }),
    require.resolve('postcss-loader') +
      '?' +
      JSON.stringify({ config: { path: require.resolve('./postcss.config'), ctx: { id }}}),
    this.resourcePath,
  ].join('!');

  const componentsPath = [
    '!' + NORMAL_LOADER_PATH + '?' + JSON.stringify(Object.assign({ id }, getOptions(this))),
    ..._.map('request', loadersBeforeCSSLoader),
    this.resourcePath,
  ].join('!');

  return `
  export * from ${ stringifyRequest(this, componentsPath) };
  import ${ stringifyRequest(this, staticCSSPath) };
  `;
};
