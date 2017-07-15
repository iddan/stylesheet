const assert = require('assert');
const { stringifyRequest, getOptions } = require('loader-utils');
const postcss = require('postcss');
const atImport = require('postcss-import');
const shortid = require('shortid');
const _ = require('lodash/fp');
const stylesheetPostcssPlugin = require('../postcss');
const bindings = require('./bindings');

const id = shortid.generate();

const resolvePromise = (loader, request) =>
  new Promise((resolve, reject) => {
    loader.resolve(loader.context, request, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });

module.exports = function(content) {
  let components;
  const callback = this.async();
  const options = getOptions(this);

  assert(
    bindings[options.bindings],
    `Bindings must be provided and be one of the following: ${ Object.keys(bindings).join() }`,
  );
  const { preprocess, createComponentPath } = bindings[options.bindings];

  postcss([
    atImport({
      resolve: request => resolvePromise(this, request),
    }),
    stylesheetPostcssPlugin({
      id: options.id || id,
      onComponents(receivedComponents) {
        components = receivedComponents;
      },
    }),
  ])
    .process(content)
    .then(result => {
      console.log(result.css);
      callback(
        null,
        `
    var data = ${ JSON.stringify(_.mapValues(preprocess, components)) };
    var createComponent = require(${ stringifyRequest(this, createComponentPath) });
    ${ Object.keys(components)
      .map(
        component => `
  export var ${ component } = createComponent(Object.assign({}, data.${ component }, {
        displayName: ${ JSON.stringify(component) }
      }));`,
      )
      .join('\n') }
  `,
      );
    })
    .catch(callback);
};
