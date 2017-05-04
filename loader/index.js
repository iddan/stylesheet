const assert = require('assert');
const { stringifyRequest, getOptions } = require('loader-utils');
// const _ = require('lodash/fp');
const parse = require('../core/parse');
const Bindings = require('./bindings');

/**
 * TODO
 * fix final file
 * empty components
 * source maps for module
 * remove imports from original file
 */

module.exports = function(content) {
  const callback = this.async();
  const options = getOptions(this);
  const bindings = Bindings[options.bindings];
  assert(bindings, `Bindings must be provided and be one of the following: ${Object.keys(Bindings).join()}`);
  console.log(stringifyRequest(this, './css-base'));
  parse(content)
    .then(({ result, importStatements, components }) => callback(null, `
const cssBase = require(${ stringifyRequest(this, require.resolve('./css-base')) });
exports = module.exports = cssBase(${ options.sourceMap });
// imports
${ importStatements.map(stringifyImport).join('\n') }
// module
exports.push([module.id, ${ JSON.stringify(result.css) }, ""])
// exports
exports.locals = {};
${ bindings(components) }`));
};

const stringifyImport = ({ url, mediaQuery }) => `
exports.push([
  module.id,
  ${ JSON.stringify(`@import url(${ url });`) },
  ${ JSON.stringify(mediaQuery) }
]);
`;
