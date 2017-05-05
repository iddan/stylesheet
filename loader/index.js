const assert = require('assert');
const { stringifyRequest, getOptions } = require('loader-utils');
// const _ = require('lodash/fp');
const parse = require('../core/parse');
const Bindings = require('./bindings');

module.exports = async function(content) {
  const callback = this.async();
  const options = getOptions(this);
  const bindings = Bindings[options.bindings];
  assert(bindings, `Bindings must be provided and be one of the following: ${Object.keys(Bindings).join()}`);
  parse(content)
    .then(({ result, importStatements, components }) => console.log(components) || callback(null, `
const cssBase = require(${ stringifyRequest(this, require.resolve('./css-base')) });
exports = module.exports = cssBase(${ options.sourceMap });
// module
exports.push([module.id, ${ JSON.stringify(result.css) }, ""])
// exports
exports.components = ${ JSON.stringify(components) };
const importedComponents = Object.assign({}, ${ importStatements.map(stringifyImport) });
console.log({ importedComponents });
exports.locals = {};
${ bindings(components) }`))
    .catch(callback);
};

const stringifyImport = ({ url }) => `require(${ stringifyRequest(this, url) })`;
