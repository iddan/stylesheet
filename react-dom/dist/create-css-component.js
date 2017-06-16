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

        return (0, _react.createElement)(this.base, _extends({
          ref: props.innerRef
        }, (0, _utils.omitBy)(props, function (value, key) {
          return _this2.invalidProps[key] || key === 'innerRef';
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
  }(_react.Component), _class.displayName = 'Styled(' + displayName + ')', _initialiseProps = function _initialiseProps() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJhcHBseUF0dHJzIiwibmV4dFByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJ2YWx1ZSIsImtleSIsIm1hcCIsImF0dHIiLCJmaWx0ZXIiLCJhdHRyaWJ1dGUiLCJuYW1lIiwiam9pbiIsImNzc1J1bGUiLCJzdHlsZSIsInByb3AiLCJ0ZW1wbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQUEsT0FBT0MsT0FBUCxHQUFpQixTQUFTQyxrQkFBVCxPQU9kO0FBQUE7O0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEsTUFKREMsVUFJQyxRQUpEQSxVQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsdUJBRkRDLElBRUM7QUFBQSxNQUZEQSxJQUVDLDZCQUZNLEtBRU47QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7O0FBQ0Q7QUFBQTs7QUFRRSwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUFBOztBQUVqQixZQUFLSCxLQUFMLEdBQWEsZ0NBQWlCQSxLQUFqQixDQUFiO0FBQ0EsWUFBS0ksVUFBTCxDQUFnQkQsS0FBaEI7QUFIaUI7QUFJbEI7O0FBWkg7QUFBQTtBQUFBLDBDQW9Cc0JFLFNBcEJ0QixFQW9CaUM7QUFDN0IsYUFBS0QsVUFBTCxDQUFnQkMsU0FBaEI7QUFDRDtBQXRCSDtBQUFBO0FBQUEsK0JBd0JXO0FBQUE7O0FBQUEsWUFDQ0YsS0FERCxHQUNXLElBRFgsQ0FDQ0EsS0FERDs7QUFFUCxlQUFPLDBCQUFjLEtBQUtGLElBQW5CO0FBQ0xLLGVBQUtILE1BQU1JO0FBRE4sV0FFRixtQkFBT0osS0FBUCxFQUFjLFVBQUNLLEtBQUQsRUFBUUMsR0FBUjtBQUFBLGlCQUFnQixPQUFLUCxZQUFMLENBQWtCTyxHQUFsQixLQUEwQkEsUUFBUSxVQUFsRDtBQUFBLFNBQWQsQ0FGRTtBQUdMWCxxQkFBVyxDQUNULEtBQUtBLFNBREksNEJBRU4sS0FBS0UsS0FBTCxDQUFXVSxHQUFYLENBQWU7QUFBQSxtQkFBUUMsS0FBS2IsU0FBYjtBQUFBLFdBQWYsQ0FGTSxzQkFHTixLQUFLQyxVQUFMLENBQ0FhLE1BREEsQ0FFQztBQUFBLG1CQUFhVCxNQUFNVSxVQUFVQyxJQUFoQixLQUF5Qiw4QkFBZUQsU0FBZixFQUEwQlYsTUFBTVUsVUFBVUMsSUFBaEIsQ0FBMUIsQ0FBdEM7QUFBQSxXQUZELEVBSUFKLEdBSkEsQ0FJSTtBQUFBLG1CQUFhRyxVQUFVZixTQUF2QjtBQUFBLFdBSkosQ0FITSxHQVFUaUIsSUFSUyxDQVFKLEdBUkk7QUFITixXQUFQO0FBYUQ7QUF2Q0g7O0FBQUE7QUFBQSw4QkFDU2xCLFdBRFQsZUFDa0NBLFdBRGxDO0FBQUE7O0FBQUEsU0FHRUMsU0FIRixHQUdjQSxTQUhkO0FBQUEsU0FJRUMsVUFKRixHQUllQSxVQUpmO0FBQUEsU0FLRUUsSUFMRixHQUtTQSxJQUxUO0FBQUEsU0FNRUMsWUFORixHQU1pQkEsWUFOakI7O0FBQUEsU0FjRUUsVUFkRixHQWNlLGlCQUFTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3BCLDZCQUFtQixPQUFLSixLQUF4Qiw4SEFBK0I7QUFBQSxjQUFwQlcsSUFBb0I7O0FBQzdCQSxlQUFLSyxPQUFMLENBQWFDLEtBQWIsQ0FBbUJOLEtBQUtPLElBQXhCLElBQWdDLHNCQUFPUCxLQUFLUSxRQUFaLEVBQXNCaEIsS0FBdEIsQ0FBaEM7QUFDRDtBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXJCLEtBbEJIO0FBQUE7QUF5Q0QsQ0FqREQiLCJmaWxlIjoiY3JlYXRlLWNzcy1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBtYXRjaEF0dHJpYnV0ZSBmcm9tICcuLi8uLi9jb3JlL21hdGNoLWF0dHJpYnV0ZSc7XG5pbXBvcnQgYmluZEF0dHJzVG9DU1NPTSBmcm9tICcuLi8uLi9kb20vZGlzdC9iaW5kLWF0dHJzLXRvLWNzc29tJztcbmltcG9ydCB7IG9taXRCeSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRQcm9wc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUNTU0NvbXBvbmVudCh7XG4gIGRpc3BsYXlOYW1lLFxuICBjbGFzc05hbWUsXG4gIGF0dHJpYnV0ZXMsXG4gIGF0dHJzLFxuICBiYXNlID0gJ2RpdicsXG4gIGludmFsaWRQcm9wcyxcbn0pIHtcbiAgcmV0dXJuIGNsYXNzIENTU0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYFN0eWxlZCgkeyBkaXNwbGF5TmFtZSB9KWA7XG5cbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgYmFzZSA9IGJhc2U7XG4gICAgaW52YWxpZFByb3BzID0gaW52YWxpZFByb3BzO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuYXR0cnMgPSBiaW5kQXR0cnNUb0NTU09NKGF0dHJzKTtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyhwcm9wcyk7XG4gICAgfVxuXG4gICAgYXBwbHlBdHRycyA9IHByb3BzID0+IHtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBvZiB0aGlzLmF0dHJzKSB7XG4gICAgICAgIGF0dHIuY3NzUnVsZS5zdHlsZVthdHRyLnByb3BdID0gZm9ybWF0KGF0dHIudGVtcGxhdGUsIHByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0aGlzLmJhc2UsIHtcbiAgICAgICAgcmVmOiBwcm9wcy5pbm5lclJlZixcbiAgICAgICAgLi4ub21pdEJ5KHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpcy5pbnZhbGlkUHJvcHNba2V5XSB8fCBrZXkgPT09ICdpbm5lclJlZicpLFxuICAgICAgICBjbGFzc05hbWU6IFtcbiAgICAgICAgICB0aGlzLmNsYXNzTmFtZSxcbiAgICAgICAgICAuLi50aGlzLmF0dHJzLm1hcChhdHRyID0+IGF0dHIuY2xhc3NOYW1lKSxcbiAgICAgICAgICAuLi50aGlzLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZSA9PiBwcm9wc1thdHRyaWJ1dGUubmFtZV0gJiYgbWF0Y2hBdHRyaWJ1dGUoYXR0cmlidXRlLCBwcm9wc1thdHRyaWJ1dGUubmFtZV0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY2xhc3NOYW1lKSxcbiAgICAgICAgXS5qb2luKCcgJyksXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuIl19