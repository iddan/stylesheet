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
        var _this2 = this;

        var props = this.props;

        return (0, _react.createElement)(this.base, _extends({}, (0, _utils.omitBy)(props, function (value, key) {
          return _this2.invalidProps[key];
        }), {
          className: [this.className].concat(_toConsumableArray(this.attrs.map(function (attr) {
            return attr.className;
          })), _toConsumableArray(this.attributes.filter(function (attribute) {
            return props[attribute.name] && (0, _matchAttribute2.default)(attribute, props[attribute.name]);
          }).map(function (attribute) {
            return attribute.className;
          }))).join(' ')
        }));
      }
    }]);

    return CSSComponent;
  }(_react.Component), _class.displayName = displayName, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.className = className;
    this.attributes = attributes;
    this.base = base;
    this.invalidProps = invalidProps;

    this.applyAttrs = function (props) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this3.attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  }, _temp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJhcHBseUF0dHJzIiwibmV4dFByb3BzIiwidmFsdWUiLCJrZXkiLCJtYXAiLCJhdHRyIiwiZmlsdGVyIiwiYXR0cmlidXRlIiwibmFtZSIsImpvaW4iLCJjc3NSdWxlIiwic3R5bGUiLCJwcm9wIiwidGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUFBLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0Msa0JBQVQsT0FPZDtBQUFBOztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLFNBS0MsUUFMREEsU0FLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLHVCQUZEQyxJQUVDO0FBQUEsTUFGREEsSUFFQyw2QkFGTSxLQUVOO0FBQUEsTUFEREMsWUFDQyxRQUREQSxZQUNDOztBQUNEO0FBQUE7O0FBUUUsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFBQTs7QUFFakIsWUFBS0gsS0FBTCxHQUFhLGdDQUFpQkEsS0FBakIsQ0FBYjtBQUNBLFlBQUtJLFVBQUwsQ0FBZ0JELEtBQWhCO0FBSGlCO0FBSWxCOztBQVpIO0FBQUE7QUFBQSwwQ0FvQnNCRSxTQXBCdEIsRUFvQmlDO0FBQzdCLGFBQUtELFVBQUwsQ0FBZ0JDLFNBQWhCO0FBQ0Q7QUF0Qkg7QUFBQTtBQUFBLCtCQXdCVztBQUFBOztBQUFBLFlBQ0NGLEtBREQsR0FDVyxJQURYLENBQ0NBLEtBREQ7O0FBRVAsZUFBTywwQkFBYyxLQUFLRixJQUFuQixlQUNGLG1CQUFPRSxLQUFQLEVBQWMsVUFBQ0csS0FBRCxFQUFRQyxHQUFSO0FBQUEsaUJBQWdCLE9BQUtMLFlBQUwsQ0FBa0JLLEdBQWxCLENBQWhCO0FBQUEsU0FBZCxDQURFO0FBRUxULHFCQUFXLENBQ1QsS0FBS0EsU0FESSw0QkFFTixLQUFLRSxLQUFMLENBQVdRLEdBQVgsQ0FBZTtBQUFBLG1CQUFRQyxLQUFLWCxTQUFiO0FBQUEsV0FBZixDQUZNLHNCQUdOLEtBQUtDLFVBQUwsQ0FDQVcsTUFEQSxDQUVDO0FBQUEsbUJBQWFQLE1BQU1RLFVBQVVDLElBQWhCLEtBQXlCLDhCQUFlRCxTQUFmLEVBQTBCUixNQUFNUSxVQUFVQyxJQUFoQixDQUExQixDQUF0QztBQUFBLFdBRkQsRUFJQUosR0FKQSxDQUlJO0FBQUEsbUJBQWFHLFVBQVViLFNBQXZCO0FBQUEsV0FKSixDQUhNLEdBUVRlLElBUlMsQ0FRSixHQVJJO0FBRk4sV0FBUDtBQVlEO0FBdENIOztBQUFBO0FBQUEsOEJBQ1NoQixXQURULEdBQ3VCQSxXQUR2QjtBQUFBOztBQUFBLFNBR0VDLFNBSEYsR0FHY0EsU0FIZDtBQUFBLFNBSUVDLFVBSkYsR0FJZUEsVUFKZjtBQUFBLFNBS0VFLElBTEYsR0FLU0EsSUFMVDtBQUFBLFNBTUVDLFlBTkYsR0FNaUJBLFlBTmpCOztBQUFBLFNBY0VFLFVBZEYsR0FjZSxpQkFBUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNwQiw2QkFBbUIsT0FBS0osS0FBeEIsOEhBQStCO0FBQUEsY0FBcEJTLElBQW9COztBQUM3QkEsZUFBS0ssT0FBTCxDQUFhQyxLQUFiLENBQW1CTixLQUFLTyxJQUF4QixJQUFnQyxzQkFBT1AsS0FBS1EsUUFBWixFQUFzQmQsS0FBdEIsQ0FBaEM7QUFDRDtBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXJCLEtBbEJIO0FBQUE7QUF3Q0QsQ0FoREQiLCJmaWxlIjoiY3JlYXRlLWNzcy1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBtYXRjaEF0dHJpYnV0ZSBmcm9tICcuLi8uLi9jb3JlL21hdGNoLWF0dHJpYnV0ZSc7XG5pbXBvcnQgYmluZEF0dHJzVG9DU1NPTSBmcm9tICcuLi8uLi9kb20vZGlzdC9iaW5kLWF0dHJzLXRvLWNzc29tJztcbmltcG9ydCB7IG9taXRCeSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRQcm9wc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUNTU0NvbXBvbmVudCh7XG4gIGRpc3BsYXlOYW1lLFxuICBjbGFzc05hbWUsXG4gIGF0dHJpYnV0ZXMsXG4gIGF0dHJzLFxuICBiYXNlID0gJ2RpdicsXG4gIGludmFsaWRQcm9wcyxcbn0pIHtcbiAgcmV0dXJuIGNsYXNzIENTU0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG5cbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgYmFzZSA9IGJhc2U7XG4gICAgaW52YWxpZFByb3BzID0gaW52YWxpZFByb3BzO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuYXR0cnMgPSBiaW5kQXR0cnNUb0NTU09NKGF0dHJzKTtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyhwcm9wcyk7XG4gICAgfVxuXG4gICAgYXBwbHlBdHRycyA9IHByb3BzID0+IHtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBvZiB0aGlzLmF0dHJzKSB7XG4gICAgICAgIGF0dHIuY3NzUnVsZS5zdHlsZVthdHRyLnByb3BdID0gZm9ybWF0KGF0dHIudGVtcGxhdGUsIHByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0aGlzLmJhc2UsIHtcbiAgICAgICAgLi4ub21pdEJ5KHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpcy5pbnZhbGlkUHJvcHNba2V5XSksXG4gICAgICAgIGNsYXNzTmFtZTogW1xuICAgICAgICAgIHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICAgIC4uLnRoaXMuYXR0cnMubWFwKGF0dHIgPT4gYXR0ci5jbGFzc05hbWUpLFxuICAgICAgICAgIC4uLnRoaXMuYXR0cmlidXRlc1xuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgYXR0cmlidXRlID0+IHByb3BzW2F0dHJpYnV0ZS5uYW1lXSAmJiBtYXRjaEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHByb3BzW2F0dHJpYnV0ZS5uYW1lXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoYXR0cmlidXRlID0+IGF0dHJpYnV0ZS5jbGFzc05hbWUpLFxuICAgICAgICBdLmpvaW4oJyAnKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG4iXX0=