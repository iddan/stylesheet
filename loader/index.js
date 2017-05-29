const cssLoader = require('css-loader');
const assert = require('assert');
const { stringifyRequest, getOptions } = require('loader-utils');
const _ = require('lodash/fp');
const parse = require('../core/parse');
const { ID } = require('../core/utils');
const bindings = require('./bindings');

const id = ID();

module.exports = function(content) {
  const callback = this.async();
  const options = getOptions(this);
  assert(
    bindings[options.bindings],
    `Bindings must be provided and be one of the following: ${ Object.keys(bindings).join() }`
  );
  const { preprocess, createComponentPath } = bindings[options.bindings];
  this.async = () => this.callback;
  parse(content, { id: options.id || id })
    .then(({ result, components }) => {
      this.callback = (err, parsedContent, sourceMap, abstractSyntaxTree) => {
        callback(
          err,
          `
                ${ parsedContent }
        var deepMerge = require(${ stringifyRequest(this, require.resolve('./deep-merge')) });
        var importedComponentsData = exports.slice(0, exports.length - 1).map(([id]) => __webpack_require__(id).components);
        var createComponent = require(${ stringifyRequest(this, createComponentPath) });
        var moduleData = ${ JSON.stringify(_.mapValues(preprocess, components)) };
        var data = deepMerge.apply(null, importedComponentsData.concat(moduleData));
        exports.components = data;
        exports.locals = {
          ${ Object.entries(components)
            .map(([name, component]) => `${ name }: createComponent(data.${ name })`)
            .join(',\n') }
        };
        `,
          sourceMap,
          abstractSyntaxTree
        );
      };
      cssLoader.call(this, result);
    })
    .catch(callback);
};
