const postcss = require('postcss');
const cssLoader = require('css-loader');
const assert = require('assert');
const { stringifyRequest, getOptions } = require('loader-utils');
const _ = require('lodash/fp');
const stylesheetPostcssPlugin = require('../postcss');
const shortid = require('shortid');
const bindings = require('./bindings');

const id = shortid.generate();

module.exports = function(content) {
  const callback = this.async();
  const options = getOptions(this);
  assert(
    bindings[options.bindings],
    `Bindings must be provided and be one of the following: ${ Object.keys(bindings).join() }`
  );
  const { preprocess, createComponentPath } = bindings[options.bindings];
  this.async = () => this.callback;
  let components;
  postcss([
    stylesheetPostcssPlugin({
      id: options.id || id,
      onComponents(receivedComponents) {
        components = receivedComponents;
      },
    }),
  ])
    .process(content)
    .then(result => {
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
          ${ Object.keys(components)
            .map(component => `${ component }: createComponent(Object.assign({}, data.${ component }, {
              displayName: ${ JSON.stringify(component) }
            }))`)
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
