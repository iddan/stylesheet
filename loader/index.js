// const path = require('path');
const assert = require('assert');
const { getOptions } = require('loader-utils');
const parse = require('../core/parse');
const Bindings = require('./bindings');

// todo source maps for module

module.exports = function(content) {
  const callback = this.async();
  const options = getOptions(this);
  const { result, importStatements, components } = parse(content);
  const bindings = Bindings[options.bindings];
  assert(bindings, `Bindings must be provided and be one of the following: ${Object.keys(Bindings).join()}`);
  callback(`
// imports
${ importStatements.map(stringifyImport).join('\n') }
// module
exports.push([module.id, ${ result }, ""])
// exports
exports.locals = {};
${ bindings(components).map(stringifyExport).join('\n') }`);
};

const stringifyImport = ({ url, mediaQuery }) => `
exports.push([
  module.id,
  ${ JSON.stringify(`@import url(${ url });`) },
  ${ JSON.stringify(mediaQuery) }
]);
`;

const stringifyExport = ({ variable, value }) => `exports.locals.${variable} = ${value};`;
