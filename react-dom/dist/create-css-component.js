'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _template = require('../../core/template');

var _matchAttribute = require('../../core/match-attribute');

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _bindAttrsToCssom = require('../../dom/dist/bind-attrs-to-cssom');

var _bindAttrsToCssom2 = _interopRequireDefault(_bindAttrsToCssom);

var _generateClassName = require('../../dom/dist/generate-class-name');

var _generateClassName2 = _interopRequireDefault(_generateClassName);

var _hot = require('../hot');

var _hot2 = _interopRequireDefault(_hot);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var _class, _temp, _initialiseProps;

  var displayName = _ref.displayName,
      className = _ref.className,
      attributes = _ref.attributes,
      attrs = _ref.attrs,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 'div' : _ref$base,
      invalidProps = _ref.invalidProps;

  return _temp = _class = function (_Component) {
    _inherits(CSSComponent, _Component);

    function CSSComponent(props) {
      _classCallCheck(this, CSSComponent);

      var _this = _possibleConstructorReturn(this, (CSSComponent.__proto__ || Object.getPrototypeOf(CSSComponent)).call(this, props));

      _initialiseProps.call(_this);

      _this.init();
      _hot2.default.register(_this);
      return _this;
    }

    _createClass(CSSComponent, [{
      key: 'init',
      value: function init() {
        this.attrs = (0, _bindAttrsToCssom2.default)(this.constructor.attrs);
        this.generateClassName = (0, _generateClassName2.default)({
          className: this.constructor.className,
          attributes: this.constructor.attributes,
          attrs: this.attrs
        });
        this.applyAttrs(this.props);
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        this.applyAttrs(nextProps);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _hot2.default.unregister(this);
      }
    }, {
      key: 'render',
      value: function render() {
        var props = this.props;

        return (0, _react.createElement)(this.constructor.base, _extends({
          ref: props.innerRef
        }, (0, _utils.omitBy)(props, this.shouldOmitProp), {
          className: this.generateClassName(this.props)
        }));
      }
    }]);

    return CSSComponent;
  }(_react.Component), _class.displayName = 'Styled(' + displayName + ')', _class.className = className, _class.attributes = attributes, _class.attrs = attrs, _class.base = base, _class.invalidProps = invalidProps, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.applyAttrs = function (props) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this2.attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var attr = _step.value;

          attr.cssRule.style[attr.prop] = (0, _template.format)(attr.template, props);
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
    };

    this.shouldOmitProp = function (value, key) {
      return _this2.constructor.invalidProps[key] || key === 'innerRef';
    };

    this.matchAttributeToProp = function (attribute) {
      return (0, _matchAttribute2.default)(attribute, _this2.props[attribute.name]);
    };
  }, _temp;
};

var getClassName = function getClassName(_ref2) {
  var className = _ref2.className;
  return className;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJpbml0IiwicmVnaXN0ZXIiLCJjb25zdHJ1Y3RvciIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiYXBwbHlBdHRycyIsIm5leHRQcm9wcyIsInVucmVnaXN0ZXIiLCJyZWYiLCJpbm5lclJlZiIsInNob3VsZE9taXRQcm9wIiwiYXR0ciIsImNzc1J1bGUiLCJzdHlsZSIsInByb3AiLCJ0ZW1wbGF0ZSIsInZhbHVlIiwia2V5IiwibWF0Y2hBdHRyaWJ1dGVUb1Byb3AiLCJhdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUFBLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0Msa0JBQVQsT0FPZDtBQUFBOztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLFNBS0MsUUFMREEsU0FLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLHVCQUZEQyxJQUVDO0FBQUEsTUFGREEsSUFFQyw2QkFGTSxLQUVOO0FBQUEsTUFEREMsWUFDQyxRQUREQSxZQUNDOztBQUNEO0FBQUE7O0FBUUUsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFBQTs7QUFFakIsWUFBS0MsSUFBTDtBQUNBLG9CQUFXQyxRQUFYO0FBSGlCO0FBSWxCOztBQVpIO0FBQUE7QUFBQSw2QkFjUztBQUNMLGFBQUtMLEtBQUwsR0FBYSxnQ0FBaUIsS0FBS00sV0FBTCxDQUFpQk4sS0FBbEMsQ0FBYjtBQUNBLGFBQUtPLGlCQUFMLEdBQXlCLGlDQUFrQjtBQUN6Q1QscUJBQVcsS0FBS1EsV0FBTCxDQUFpQlIsU0FEYTtBQUV6Q0Msc0JBQVksS0FBS08sV0FBTCxDQUFpQlAsVUFGWTtBQUd6Q0MsaUJBQU8sS0FBS0E7QUFINkIsU0FBbEIsQ0FBekI7QUFLQSxhQUFLUSxVQUFMLENBQWdCLEtBQUtMLEtBQXJCO0FBQ0Q7QUF0Qkg7QUFBQTtBQUFBLDBDQXdCc0JNLFNBeEJ0QixFQXdCaUM7QUFDN0IsYUFBS0QsVUFBTCxDQUFnQkMsU0FBaEI7QUFDRDtBQTFCSDtBQUFBO0FBQUEsNkNBNEJ5QjtBQUNyQixzQkFBV0MsVUFBWCxDQUFzQixJQUF0QjtBQUNEO0FBOUJIO0FBQUE7QUFBQSwrQkE4Q1c7QUFBQSxZQUNDUCxLQURELEdBQ1csSUFEWCxDQUNDQSxLQUREOztBQUVQLGVBQU8sMEJBQWMsS0FBS0csV0FBTCxDQUFpQkwsSUFBL0I7QUFDTFUsZUFBS1IsTUFBTVM7QUFETixXQUVGLG1CQUFPVCxLQUFQLEVBQWMsS0FBS1UsY0FBbkIsQ0FGRTtBQUdMZixxQkFBVyxLQUFLUyxpQkFBTCxDQUF1QixLQUFLSixLQUE1QjtBQUhOLFdBQVA7QUFLRDtBQXJESDs7QUFBQTtBQUFBLDhCQUNTTixXQURULGVBQ2tDQSxXQURsQyxlQUVTQyxTQUZULEdBRXFCQSxTQUZyQixTQUdTQyxVQUhULEdBR3NCQSxVQUh0QixTQUlTQyxLQUpULEdBSWlCQSxLQUpqQixTQUtTQyxJQUxULEdBS2dCQSxJQUxoQixTQU1TQyxZQU5ULEdBTXdCQSxZQU54QjtBQUFBOztBQUFBLFNBZ0NFTSxVQWhDRixHQWdDZSxpQkFBUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNwQiw2QkFBbUIsT0FBS1IsS0FBeEIsOEhBQStCO0FBQUEsY0FBcEJjLElBQW9COztBQUM3QkEsZUFBS0MsT0FBTCxDQUFhQyxLQUFiLENBQW1CRixLQUFLRyxJQUF4QixJQUFnQyxzQkFBT0gsS0FBS0ksUUFBWixFQUFzQmYsS0FBdEIsQ0FBaEM7QUFDRDtBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXJCLEtBcENIOztBQUFBLFNBc0NFVSxjQXRDRixHQXNDbUIsVUFBQ00sS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQy9CLGFBQU8sT0FBS2QsV0FBTCxDQUFpQkosWUFBakIsQ0FBOEJrQixHQUE5QixLQUFzQ0EsUUFBUSxVQUFyRDtBQUNELEtBeENIOztBQUFBLFNBMENFQyxvQkExQ0YsR0EwQ3lCLHFCQUFhO0FBQ2xDLGFBQU8sOEJBQWVDLFNBQWYsRUFBMEIsT0FBS25CLEtBQUwsQ0FBV21CLFVBQVVDLElBQXJCLENBQTFCLENBQVA7QUFDRCxLQTVDSDtBQUFBO0FBdURELENBL0REOztBQWlFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFHMUIsU0FBSCxTQUFHQSxTQUFIO0FBQUEsU0FBbUJBLFNBQW5CO0FBQUEsQ0FBckIiLCJmaWxlIjoiY3JlYXRlLWNzcy1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBtYXRjaEF0dHJpYnV0ZSBmcm9tICcuLi8uLi9jb3JlL21hdGNoLWF0dHJpYnV0ZSc7XG5pbXBvcnQgYmluZEF0dHJzVG9DU1NPTSBmcm9tICcuLi8uLi9kb20vZGlzdC9iaW5kLWF0dHJzLXRvLWNzc29tJztcbmltcG9ydCBnZW5lcmF0ZUNsYXNzTmFtZSBmcm9tICcuLi8uLi9kb20vZGlzdC9nZW5lcmF0ZS1jbGFzcy1uYW1lJztcbmltcG9ydCBTdHlsZXNoZWV0IGZyb20gJy4uL2hvdCc7XG5pbXBvcnQgeyBvbWl0QnkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkUHJvcHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVDU1NDb21wb25lbnQoe1xuICBkaXNwbGF5TmFtZSxcbiAgY2xhc3NOYW1lLFxuICBhdHRyaWJ1dGVzLFxuICBhdHRycyxcbiAgYmFzZSA9ICdkaXYnLFxuICBpbnZhbGlkUHJvcHMsXG59KSB7XG4gIHJldHVybiBjbGFzcyBDU1NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBTdHlsZWQoJHsgZGlzcGxheU5hbWUgfSlgO1xuICAgIHN0YXRpYyBjbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgc3RhdGljIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgIHN0YXRpYyBhdHRycyA9IGF0dHJzO1xuICAgIHN0YXRpYyBiYXNlID0gYmFzZTtcbiAgICBzdGF0aWMgaW52YWxpZFByb3BzID0gaW52YWxpZFByb3BzO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgU3R5bGVzaGVldC5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5hdHRycyA9IGJpbmRBdHRyc1RvQ1NTT00odGhpcy5jb25zdHJ1Y3Rvci5hdHRycyk7XG4gICAgICB0aGlzLmdlbmVyYXRlQ2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoe1xuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IuY2xhc3NOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzOiB0aGlzLmNvbnN0cnVjdG9yLmF0dHJpYnV0ZXMsXG4gICAgICAgIGF0dHJzOiB0aGlzLmF0dHJzLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFwcGx5QXR0cnModGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgU3R5bGVzaGVldC51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgIGFwcGx5QXR0cnMgPSBwcm9wcyA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgdGhpcy5hdHRycykge1xuICAgICAgICBhdHRyLmNzc1J1bGUuc3R5bGVbYXR0ci5wcm9wXSA9IGZvcm1hdChhdHRyLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNob3VsZE9taXRQcm9wID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmludmFsaWRQcm9wc1trZXldIHx8IGtleSA9PT0gJ2lubmVyUmVmJztcbiAgICB9O1xuXG4gICAgbWF0Y2hBdHRyaWJ1dGVUb1Byb3AgPSBhdHRyaWJ1dGUgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgdGhpcy5wcm9wc1thdHRyaWJ1dGUubmFtZV0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodGhpcy5jb25zdHJ1Y3Rvci5iYXNlLCB7XG4gICAgICAgIHJlZjogcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIC4uLm9taXRCeShwcm9wcywgdGhpcy5zaG91bGRPbWl0UHJvcCksXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZW5lcmF0ZUNsYXNzTmFtZSh0aGlzLnByb3BzKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IGdldENsYXNzTmFtZSA9ICh7IGNsYXNzTmFtZSB9KSA9PiBjbGFzc05hbWU7XG4iXX0=