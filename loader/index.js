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
  this.callback = (err, parsedContent, sourceMap, abstractSyntaxTree) => {
    parse(content, { id: options.id || id })
      .then(({ result, importStatements, components }) =>
        callback(
          null,
          `
          ${ parsedContent }
  var deepMerge = require(${ stringifyRequest(this, require.resolve('./deep-merge')) });
  var importedComponentsData = Object.assign(${ ['{}', ...importStatements.map(requireData)].join() });
  var createComponent = require(${ stringifyRequest(this, createComponentPath) });
  var moduleData = ${ JSON.stringify(_.mapValues(preprocess, components)) };
  var data = deepMerge(importedComponentsData, moduleData);
  exports.locals = {
    ${ Object.entries(components)
            .map(([name, component]) => `${ name }: createComponent(data.${ name })`)
            .join(',\n') },
    __data__: data
  };`,
          sourceMap,
          abstractSyntaxTree
        )
      )
      .catch(callback);
  };
  this.async = () => this.callback;
  cssLoader.call(this, content);
};

const requireData = ({ url }) => `require(${ stringifyRequest(this, url + `?id=${ id }`) }).__data__`;
