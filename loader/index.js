const assert = require('assert');
const { stringifyRequest, getOptions } = require('loader-utils');
const _ = require('lodash/fp');
const parse = require('../core/parse');
const bindings = require('./bindings');

module.exports = function(content) {
  const callback = this.async();
  const options = getOptions(this);
  assert(
    bindings[options.bindings],
    `Bindings must be provided and be one of the following: ${ Object.keys(bindings).join() }`
  );
  const { preprocess, createComponentPath } = bindings[options.bindings];
  parse(content)
    .then(({ result, importStatements, components }) =>
      callback(
        null,
        `
var cssBase = require(${ stringifyRequest(this, require.resolve('./css-base')) });
var deepMerge = require(${ stringifyRequest(this, require.resolve('./deep-merge')) });
var importedComponentsData = Object.assign({}, ${ importStatements.map(requireData) });
var createComponent = require(${ stringifyRequest(this, createComponentPath) });
exports = module.exports = cssBase(${ options.sourceMap });
// module
exports.push([module.id, ${ JSON.stringify(result.css) }, ""])
// exports
var moduleData = ${ JSON.stringify(_.mapValues(preprocess, components)) };
var data = deepMerge(importedComponentsData, moduleData);
exports.locals = {
  ${ Object.entries(components)
          .map(([name, component]) => `${ name }: createComponent(data.${ name })`)
          .join('\n') },
  __data__: data
};`
      )
    )
    .catch(callback);
};

const requireData = ({ url }) => `require(${ stringifyRequest(this, url) }).__data__`;
