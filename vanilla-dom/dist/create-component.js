'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('../../core/template');

var _matchAttribute = require('../../core/match-attribute');

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _bindAttrsToCssom = require('../../dom/bind-attrs-to-cssom');

var _bindAttrsToCssom2 = _interopRequireDefault(_bindAttrsToCssom);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getAttributeClassNames = function getAttributeClassNames(attributes) {
  return function (props) {
    return attributes.filter(function (attribute) {
      return (0, _matchAttribute2.default)(attribute, props[attribute.name]);
    }).map(function (attribute) {
      return attribute.className;
    });
  };
};

var createComponent = function createComponent(_ref) {
  var _class, _temp;

  var displayName = _ref.displayName,
      selector = _ref.selector,
      className = _ref.className,
      attributes = _ref.attributes,
      attrs = _ref.attrs,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 'div' : _ref$base,
      invalidProps = _ref.invalidProps;
  return _temp = _class = function () {
    _createClass(CSSComponent, [{
      key: 'props',
      get: function get() {
        var _this = this;

        return attributes.reduce(function (props, attribute) {
          return _extends({}, props, _defineProperty({}, attribute.name, _this['__' + attribute.name + '__']));
        }, {});
      }
    }], [{
      key: 'create',
      value: function create(initialAttributes) {
        var instance = new CSSComponent(initialAttributes);
        return instance.element;
      }
    }]);

    function CSSComponent(initialAttributes) {
      var _this2 = this;

      _classCallCheck(this, CSSComponent);

      this.element = document.createElement(base);
      this.willUpdate = false;
      this.attrs = [];

      this.render = function () {
        requestAnimationFrame(function () {
          var props = _this2.props;

          _this2.element.dispatchEvent(new _event2.default('componentWillUpdate', props));
          _this2.element.className = [className].concat(CSSComponent.getAttributeClassNames(props)).join(' ');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this2.attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var attr = _step.value;

              if (attr.cssRule) {
                attr.cssRule.style[attr.prop] = (0, _template.format)(attr.template, props);
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

          _this2.element.dispatchEvent(new _event2.default('componentDidUpdate', props));
          _this2.willUpdate = false;
        });
      };

      (0, _bindAttrsToCssom2.default)(attrs).then(function (boundAttrs) {
        _this2.attrs = boundAttrs;
      });

      var _loop = function _loop(attribute) {
        var key = '__' + attribute.name + '__';
        Object.defineProperty(_this2.element, attribute.name, {
          get: function get() {
            return this[key];
          },
          set: function set(value) {
            this[key] = value;
            if (!this.willUpdate) {
              this.willUpdate = true;

              this.render();
            }
            return value;
          }
        });
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var attribute = _step2.value;

          _loop(attribute);
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

    return CSSComponent;
  }(), _class.getAttributeClassNames = getAttributeClassNames(attributes), _temp;
};

exports.default = createComponent;