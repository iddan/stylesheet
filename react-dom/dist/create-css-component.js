var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { createElement, PureComponent } from 'react';
import postfixAttrValue from '../../core/postfix-attr-value';
import { omitBy } from './utils.js';

/**
 * @param {string} displayName 
 * @param {string} selector 
 * @param {string} localClassName 
 * @param {Object} props
 * @param {string[]} attrs 
 * @param {Object} invalidProps
 */
export default function createCSSComponent(_ref, cssRules) {
  var displayName = _ref.displayName,
      selector = _ref.selector,
      localClassName = _ref.localClassName,
      propsMap = _ref.props,
      attrs = _ref.attrs,
      invalidProps = _ref.invalidProps;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var attr = _step.value;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = cssRules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var cssRule = _step3.value;

          if (cssRule.selectorText === attr.selector) {
            attr.cssStyleDeclaration = cssRule.style;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
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

  return function (_PureComponent) {
    _inherits(CSSComponent, _PureComponent);

    function CSSComponent() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, CSSComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = CSSComponent.__proto__ || Object.getPrototypeOf(CSSComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.displayName = displayName, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CSSComponent, [{
      key: 'render',
      value: function render() {
        var props = this.props;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = attrs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref3 = _step2.value;
            var property = _ref3.property,
                name = _ref3.name,
                type = _ref3.type,
                cssStyleDeclaration = _ref3.cssStyleDeclaration;

            if (props[name]) {
              cssStyleDeclaration[property] = postfixAttrValue(props[name], type);
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

        return createElement('div', _extends({}, omitBy(props, function (value, key) {
          return invalidProps[key];
        }), {
          className: [localClassName].concat(_toConsumableArray(Object.keys(props).filter(function (prop) {
            return props[prop] && propsMap[prop];
          }).map(function (prop) {
            return propsMap[prop].localClassName;
          }))).join(' ')
        }));
      }
    }]);

    return CSSComponent;
  }(PureComponent);
}