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

        console.log(this.attributes, props);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJhcHBseUF0dHJzIiwibmV4dFByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZiIsImlubmVyUmVmIiwic2hvdWxkT21pdFByb3AiLCJtYXAiLCJnZXRDbGFzc05hbWUiLCJmaWx0ZXIiLCJtYXRjaEF0dHJpYnV0ZVRvUHJvcCIsImpvaW4iLCJhdHRyIiwiY3NzUnVsZSIsInN0eWxlIiwicHJvcCIsInRlbXBsYXRlIiwidmFsdWUiLCJrZXkiLCJhdHRyaWJ1dGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQVFBQSxPQUFPQyxPQUFQLEdBQWlCLFNBQVNDLGtCQUFULE9BT2Q7QUFBQTs7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxTQUtDLFFBTERBLFNBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSx1QkFGREMsSUFFQztBQUFBLE1BRkRBLElBRUMsNkJBRk0sS0FFTjtBQUFBLE1BRERDLFlBQ0MsUUFEREEsWUFDQzs7QUFDRDtBQUFBOztBQVFFLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBQUE7O0FBRWpCLFlBQUtILEtBQUwsR0FBYSxnQ0FBaUJBLEtBQWpCLENBQWI7QUFDQSxZQUFLSSxVQUFMLENBQWdCRCxLQUFoQjtBQUhpQjtBQUlsQjs7QUFaSDtBQUFBO0FBQUEsMENBY3NCRSxTQWR0QixFQWNpQztBQUM3QixhQUFLRCxVQUFMLENBQWdCQyxTQUFoQjtBQUNEO0FBaEJIO0FBQUE7QUFBQSwrQkFnQ1c7QUFBQSxZQUNDRixLQURELEdBQ1csSUFEWCxDQUNDQSxLQUREOztBQUVQRyxnQkFBUUMsR0FBUixDQUFZLEtBQUtSLFVBQWpCLEVBQTZCSSxLQUE3QjtBQUNBLGVBQU8sMEJBQWMsS0FBS0YsSUFBbkI7QUFDTE8sZUFBS0wsTUFBTU07QUFETixXQUVGLG1CQUFPTixLQUFQLEVBQWMsS0FBS08sY0FBbkIsQ0FGRTtBQUdMWixxQkFBVyxDQUNULEtBQUtBLFNBREksNEJBRU4sS0FBS0UsS0FBTCxDQUFXVyxHQUFYLENBQWVDLFlBQWYsQ0FGTSxzQkFHTixLQUFLYixVQUFMLENBQWdCYyxNQUFoQixDQUF1QixLQUFLQyxvQkFBNUIsRUFBa0RILEdBQWxELENBQXNEQyxZQUF0RCxDQUhNLEdBSVRHLElBSlMsQ0FJSixHQUpJO0FBSE4sV0FBUDtBQVNEO0FBNUNIOztBQUFBO0FBQUEsOEJBQ1NsQixXQURULGVBQ2tDQSxXQURsQztBQUFBOztBQUFBLFNBR0VDLFNBSEYsR0FHY0EsU0FIZDtBQUFBLFNBSUVDLFVBSkYsR0FJZUEsVUFKZjtBQUFBLFNBS0VFLElBTEYsR0FLU0EsSUFMVDtBQUFBLFNBTUVDLFlBTkYsR0FNaUJBLFlBTmpCOztBQUFBLFNBa0JFRSxVQWxCRixHQWtCZSxpQkFBUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNwQiw2QkFBbUIsT0FBS0osS0FBeEIsOEhBQStCO0FBQUEsY0FBcEJnQixJQUFvQjs7QUFDN0JBLGVBQUtDLE9BQUwsQ0FBYUMsS0FBYixDQUFtQkYsS0FBS0csSUFBeEIsSUFBZ0Msc0JBQU9ILEtBQUtJLFFBQVosRUFBc0JqQixLQUF0QixDQUFoQztBQUNEO0FBSG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJckIsS0F0Qkg7O0FBQUEsU0F3QkVPLGNBeEJGLEdBd0JtQixVQUFDVyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDL0IsYUFBTyxPQUFLcEIsWUFBTCxDQUFrQm9CLEdBQWxCLEtBQTBCQSxRQUFRLFVBQXpDO0FBQ0QsS0ExQkg7O0FBQUEsU0E0QkVSLG9CQTVCRixHQTRCeUIscUJBQWE7QUFDbEMsYUFBTyw4QkFBZVMsU0FBZixFQUEwQixPQUFLcEIsS0FBTCxDQUFXb0IsVUFBVUMsSUFBckIsQ0FBMUIsQ0FBUDtBQUNELEtBOUJIO0FBQUE7QUE4Q0QsQ0F0REQ7O0FBd0RBLElBQU1aLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdkLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFNBQW1CQSxTQUFuQjtBQUFBLENBQXJCIiwiZmlsZSI6ImNyZWF0ZS1jc3MtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XG5pbXBvcnQgbWF0Y2hBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vY29yZS9tYXRjaC1hdHRyaWJ1dGUnO1xuaW1wb3J0IGJpbmRBdHRyc1RvQ1NTT00gZnJvbSAnLi4vLi4vZG9tL2Rpc3QvYmluZC1hdHRycy10by1jc3NvbSc7XG5pbXBvcnQgeyBvbWl0QnkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkUHJvcHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVDU1NDb21wb25lbnQoe1xuICBkaXNwbGF5TmFtZSxcbiAgY2xhc3NOYW1lLFxuICBhdHRyaWJ1dGVzLFxuICBhdHRycyxcbiAgYmFzZSA9ICdkaXYnLFxuICBpbnZhbGlkUHJvcHMsXG59KSB7XG4gIHJldHVybiBjbGFzcyBDU1NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBTdHlsZWQoJHsgZGlzcGxheU5hbWUgfSlgO1xuXG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgIGJhc2UgPSBiYXNlO1xuICAgIGludmFsaWRQcm9wcyA9IGludmFsaWRQcm9wcztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmF0dHJzID0gYmluZEF0dHJzVG9DU1NPTShhdHRycyk7XG4gICAgICB0aGlzLmFwcGx5QXR0cnMocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLmFwcGx5QXR0cnMobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBhcHBseUF0dHJzID0gcHJvcHMgPT4ge1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIHRoaXMuYXR0cnMpIHtcbiAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgcHJvcHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzaG91bGRPbWl0UHJvcCA9ICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkUHJvcHNba2V5XSB8fCBrZXkgPT09ICdpbm5lclJlZic7XG4gICAgfTtcblxuICAgIG1hdGNoQXR0cmlidXRlVG9Qcm9wID0gYXR0cmlidXRlID0+IHtcbiAgICAgIHJldHVybiBtYXRjaEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHRoaXMucHJvcHNbYXR0cmlidXRlLm5hbWVdKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXR0cmlidXRlcywgcHJvcHMpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodGhpcy5iYXNlLCB7XG4gICAgICAgIHJlZjogcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIC4uLm9taXRCeShwcm9wcywgdGhpcy5zaG91bGRPbWl0UHJvcCksXG4gICAgICAgIGNsYXNzTmFtZTogW1xuICAgICAgICAgIHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICAgIC4uLnRoaXMuYXR0cnMubWFwKGdldENsYXNzTmFtZSksXG4gICAgICAgICAgLi4udGhpcy5hdHRyaWJ1dGVzLmZpbHRlcih0aGlzLm1hdGNoQXR0cmlidXRlVG9Qcm9wKS5tYXAoZ2V0Q2xhc3NOYW1lKSxcbiAgICAgICAgXS5qb2luKCcgJyksXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBnZXRDbGFzc05hbWUgPSAoeyBjbGFzc05hbWUgfSkgPT4gY2xhc3NOYW1lO1xuIl19