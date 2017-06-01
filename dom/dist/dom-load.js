'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOMLoad = new Promise(function (resolve) {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    var onDOMLoad = function onDOMLoad() {
      removeEventListener('load', onDOMLoad);
      resolve();
    };
    addEventListener('load', onDOMLoad);
  }
});

exports.default = DOMLoad;