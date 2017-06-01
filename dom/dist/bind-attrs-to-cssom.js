'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _domLoad = require('./dom-load');

var _domLoad2 = _interopRequireDefault(_domLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCSSRule = function getCSSRule(attr, className) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.styleSheets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cssStylesheet = _step.value;

      for (var i = 0; i < cssStylesheet.cssRules.length; i++) {
        var rule = cssStylesheet.cssRules[i];
        if (rule.selectorText && rule.selectorText.includes(attr.selector)) {
          cssStylesheet.insertRule('.' + className + ' {}', i + 1);
          return cssStylesheet.cssRules[i + 1];
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  throw new Error('The CSS rule of ' + attr.template + ' was not found. Make sure you imported the source CSS correctly');
};

var bindAttrsToCSSOM = function bindAttrsToCSSOM(attrs) {
  return _domLoad2.default.then(function () {
    return attrs.map(function (attr) {
      var className = 'a' + Math.random().toString(32).slice(6);
      var cssRule = getCSSRule(attr, className);
      return _extends({}, attr, { className: className, cssRule: cssRule });
    });
  });
};

exports.default = bindAttrsToCSSOM;