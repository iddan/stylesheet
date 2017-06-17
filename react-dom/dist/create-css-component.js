'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _template = require('../../core/template');

var _matchAttribute = require('../../core/match-attribute');

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _bindAttrsToCssom = require('../../dom/dist/bind-attrs-to-cssom');

var _bindAttrsToCssom2 = _interopRequireDefault(_bindAttrsToCssom);

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

      _this.attrs = (0, _bindAttrsToCssom2.default)(attrs);
      _this.applyAttrs(props);
      return _this;
    }

    _createClass(CSSComponent, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        this.applyAttrs(nextProps);
      }
    }, {
      key: 'render',
      value: function render() {
        var props = this.props;

        return (0, _react.createElement)(this.base, _extends({
          ref: props.innerRef
        }, (0, _utils.omitBy)(props, this.shouldOmitProp), {
          className: [this.className].concat(_toConsumableArray(this.attrs.map(getClassName)), _toConsumableArray(this.attributes.filter(this.matchAttributeToProp).map(getClassName))).join(' ')
        }));
      }
    }]);

    return CSSComponent;
  }(_react.Component), _class.displayName = 'Styled(' + displayName + ')', _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.className = className;
    this.attributes = attributes;
    this.base = base;
    this.invalidProps = invalidProps;

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
      return _this2.invalidProps[key] || key === 'innerRef';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJhcHBseUF0dHJzIiwibmV4dFByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJzaG91bGRPbWl0UHJvcCIsIm1hcCIsImdldENsYXNzTmFtZSIsImZpbHRlciIsIm1hdGNoQXR0cmlidXRlVG9Qcm9wIiwiam9pbiIsImF0dHIiLCJjc3NSdWxlIiwic3R5bGUiLCJwcm9wIiwidGVtcGxhdGUiLCJ2YWx1ZSIsImtleSIsImF0dHJpYnV0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUFBLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0Msa0JBQVQsT0FPZDtBQUFBOztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLFNBS0MsUUFMREEsU0FLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLHVCQUZEQyxJQUVDO0FBQUEsTUFGREEsSUFFQyw2QkFGTSxLQUVOO0FBQUEsTUFEREMsWUFDQyxRQUREQSxZQUNDOztBQUNEO0FBQUE7O0FBUUUsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFBQTs7QUFFakIsWUFBS0gsS0FBTCxHQUFhLGdDQUFpQkEsS0FBakIsQ0FBYjtBQUNBLFlBQUtJLFVBQUwsQ0FBZ0JELEtBQWhCO0FBSGlCO0FBSWxCOztBQVpIO0FBQUE7QUFBQSwwQ0Fjc0JFLFNBZHRCLEVBY2lDO0FBQzdCLGFBQUtELFVBQUwsQ0FBZ0JDLFNBQWhCO0FBQ0Q7QUFoQkg7QUFBQTtBQUFBLCtCQWdDVztBQUFBLFlBQ0NGLEtBREQsR0FDVyxJQURYLENBQ0NBLEtBREQ7O0FBRVAsZUFBTywwQkFBYyxLQUFLRixJQUFuQjtBQUNMSyxlQUFLSCxNQUFNSTtBQUROLFdBRUYsbUJBQU9KLEtBQVAsRUFBYyxLQUFLSyxjQUFuQixDQUZFO0FBR0xWLHFCQUFXLENBQ1QsS0FBS0EsU0FESSw0QkFFTixLQUFLRSxLQUFMLENBQVdTLEdBQVgsQ0FBZUMsWUFBZixDQUZNLHNCQUdOLEtBQUtYLFVBQUwsQ0FBZ0JZLE1BQWhCLENBQXVCLEtBQUtDLG9CQUE1QixFQUFrREgsR0FBbEQsQ0FBc0RDLFlBQXRELENBSE0sR0FJVEcsSUFKUyxDQUlKLEdBSkk7QUFITixXQUFQO0FBU0Q7QUEzQ0g7O0FBQUE7QUFBQSw4QkFDU2hCLFdBRFQsZUFDa0NBLFdBRGxDO0FBQUE7O0FBQUEsU0FHRUMsU0FIRixHQUdjQSxTQUhkO0FBQUEsU0FJRUMsVUFKRixHQUllQSxVQUpmO0FBQUEsU0FLRUUsSUFMRixHQUtTQSxJQUxUO0FBQUEsU0FNRUMsWUFORixHQU1pQkEsWUFOakI7O0FBQUEsU0FrQkVFLFVBbEJGLEdBa0JlLGlCQUFTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3BCLDZCQUFtQixPQUFLSixLQUF4Qiw4SEFBK0I7QUFBQSxjQUFwQmMsSUFBb0I7O0FBQzdCQSxlQUFLQyxPQUFMLENBQWFDLEtBQWIsQ0FBbUJGLEtBQUtHLElBQXhCLElBQWdDLHNCQUFPSCxLQUFLSSxRQUFaLEVBQXNCZixLQUF0QixDQUFoQztBQUNEO0FBSG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJckIsS0F0Qkg7O0FBQUEsU0F3QkVLLGNBeEJGLEdBd0JtQixVQUFDVyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDL0IsYUFBTyxPQUFLbEIsWUFBTCxDQUFrQmtCLEdBQWxCLEtBQTBCQSxRQUFRLFVBQXpDO0FBQ0QsS0ExQkg7O0FBQUEsU0E0QkVSLG9CQTVCRixHQTRCeUIscUJBQWE7QUFDbEMsYUFBTyw4QkFBZVMsU0FBZixFQUEwQixPQUFLbEIsS0FBTCxDQUFXa0IsVUFBVUMsSUFBckIsQ0FBMUIsQ0FBUDtBQUNELEtBOUJIO0FBQUE7QUE2Q0QsQ0FyREQ7O0FBdURBLElBQU1aLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdaLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFNBQW1CQSxTQUFuQjtBQUFBLENBQXJCIiwiZmlsZSI6ImNyZWF0ZS1jc3MtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XG5pbXBvcnQgbWF0Y2hBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vY29yZS9tYXRjaC1hdHRyaWJ1dGUnO1xuaW1wb3J0IGJpbmRBdHRyc1RvQ1NTT00gZnJvbSAnLi4vLi4vZG9tL2Rpc3QvYmluZC1hdHRycy10by1jc3NvbSc7XG5pbXBvcnQgeyBvbWl0QnkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkUHJvcHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVDU1NDb21wb25lbnQoe1xuICBkaXNwbGF5TmFtZSxcbiAgY2xhc3NOYW1lLFxuICBhdHRyaWJ1dGVzLFxuICBhdHRycyxcbiAgYmFzZSA9ICdkaXYnLFxuICBpbnZhbGlkUHJvcHMsXG59KSB7XG4gIHJldHVybiBjbGFzcyBDU1NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBTdHlsZWQoJHsgZGlzcGxheU5hbWUgfSlgO1xuXG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgIGJhc2UgPSBiYXNlO1xuICAgIGludmFsaWRQcm9wcyA9IGludmFsaWRQcm9wcztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmF0dHJzID0gYmluZEF0dHJzVG9DU1NPTShhdHRycyk7XG4gICAgICB0aGlzLmFwcGx5QXR0cnMocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLmFwcGx5QXR0cnMobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBhcHBseUF0dHJzID0gcHJvcHMgPT4ge1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIHRoaXMuYXR0cnMpIHtcbiAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgcHJvcHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzaG91bGRPbWl0UHJvcCA9ICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkUHJvcHNba2V5XSB8fCBrZXkgPT09ICdpbm5lclJlZic7XG4gICAgfTtcblxuICAgIG1hdGNoQXR0cmlidXRlVG9Qcm9wID0gYXR0cmlidXRlID0+IHtcbiAgICAgIHJldHVybiBtYXRjaEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHRoaXMucHJvcHNbYXR0cmlidXRlLm5hbWVdKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHRoaXMuYmFzZSwge1xuICAgICAgICByZWY6IHByb3BzLmlubmVyUmVmLFxuICAgICAgICAuLi5vbWl0QnkocHJvcHMsIHRoaXMuc2hvdWxkT21pdFByb3ApLFxuICAgICAgICBjbGFzc05hbWU6IFtcbiAgICAgICAgICB0aGlzLmNsYXNzTmFtZSxcbiAgICAgICAgICAuLi50aGlzLmF0dHJzLm1hcChnZXRDbGFzc05hbWUpLFxuICAgICAgICAgIC4uLnRoaXMuYXR0cmlidXRlcy5maWx0ZXIodGhpcy5tYXRjaEF0dHJpYnV0ZVRvUHJvcCkubWFwKGdldENsYXNzTmFtZSksXG4gICAgICAgIF0uam9pbignICcpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKHsgY2xhc3NOYW1lIH0pID0+IGNsYXNzTmFtZTtcbiJdfQ==