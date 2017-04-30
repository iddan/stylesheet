'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _postfixAttrValue = require('../../core/postfix-attr-value');

var _postfixAttrValue2 = _interopRequireDefault(_postfixAttrValue);

var _matchAttribute = require('../../core/match-attribute');

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @param {string} displayName
 * @param {string} selector
 * @param {string} className
 * @param {Object} props
 * @param {Object} attrs
 * @param {Object} invalidProps
 */
module.exports = function createCSSComponent(_ref) {
  var _class, _temp;

  var displayName = _ref.displayName,
      selector = _ref.selector,
      className = _ref.className,
      propsMap = _ref.props,
      attrs = _ref.attrs,
      invalidProps = _ref.invalidProps;

  for (var property in attrs) {
    var attr = attrs[property];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = document.styleSheets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var sheet = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = sheet.cssRules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var cssRule = _step2.value;

            if (cssRule.selectorText === attr.selector) {
              attr.cssStyleDeclaration = cssRule.style;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
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
  }
  return _temp = _class = function (_PureComponent) {
    _inherits(CSSComponent, _PureComponent);

    function CSSComponent() {
      _classCallCheck(this, CSSComponent);

      return _possibleConstructorReturn(this, (CSSComponent.__proto__ || Object.getPrototypeOf(CSSComponent)).apply(this, arguments));
    }

    _createClass(CSSComponent, [{
      key: 'render',
      value: function render() {
        var props = this.props;

        for (var attribute in attrs) {
          var _attrs$attribute = attrs[attribute],
              type = _attrs$attribute.type,
              cssStyleDeclaration = _attrs$attribute.cssStyleDeclaration;

          if (props[attribute]) {
            cssStyleDeclaration[attribute] = (0, _postfixAttrValue2.default)(props[attribute], type);
          }
        }
        return (0, _react.createElement)('div', _extends({}, (0, _utils.omitBy)(props, function (value, key) {
          return invalidProps[key];
        }), {
          className: [className].concat(_toConsumableArray(Object.keys(props).filter(function (prop) {
            return propsMap[prop] && (0, _matchAttribute2.default)(propsMap[prop], prop, props[prop]);
          }).map(function (prop) {
            return propsMap[prop].className;
          }))).join(' ')
        }));
      }
    }]);

    return CSSComponent;
  }(_react.PureComponent), _class.displayName = displayName, _temp;
};