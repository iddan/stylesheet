'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _postfixAttrValue = require('../../core/postfix-attr-value');

var _postfixAttrValue2 = _interopRequireDefault(_postfixAttrValue);

var _matchAttribute = require('../../core/match-attribute');

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {string} displayName
 * @param {string} selector
 * @param {string} className
 * @param {Object} props
 * @param {Object} attrs
 * @param {Object} invalidProps
 */
module.exports = function createCSSComponent(_ref) {
  var displayName = _ref.displayName,
      selector = _ref.selector,
      className = _ref.className,
      attributes = _ref.attributes,
      attrs = _ref.attrs,
      invalidProps = _ref.invalidProps;

  var CSSComponent = function CSSComponent(props) {
    return (0, _react.createElement)('div', _extends({}, (0, _utils.omitBy)(props, function (value, key) {
      return invalidProps[key];
    }), {
      className: [className].concat(_toConsumableArray(attributes.filter(function (attribute) {
        return props[attribute.name] && (0, _matchAttribute2.default)(attribute, props[attribute.name]);
      }).map(function (attribute) {
        return attribute.className;
      }))).join(' '),
      style: _extends({}, props.style, attrs.reduce(function (acc, attr) {
        return console.log(attr) || _extends({}, acc, _defineProperty({}, attr.prop, props[attr.name] && (0, _postfixAttrValue2.default)(props[attr.name], attr.type)));
      }, {}))
    }));
  };
  CSSComponent.displayName = displayName;
  return CSSComponent;
};