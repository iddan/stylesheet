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
  var _class, _temp;

  var displayName = _ref.displayName,
      selector = _ref.selector,
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

      _this.state = {
        attrs: []
      };

      (0, _bindAttrsToCssom2.default)(attrs).then(function (boundAttrs) {
        return _this.setState({ attrs: boundAttrs });
      });
      return _this;
    }

    _createClass(CSSComponent, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = nextState.attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            if (attr.cssRule) {
              attr.cssRule.style[attr.prop] = (0, _template.format)(attr.template, nextProps);
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
    }, {
      key: 'render',
      value: function render() {
        var props = this.props,
            state = this.state;

        return (0, _react.createElement)(base, _extends({}, (0, _utils.omitBy)(props, function (value, key) {
          return invalidProps[key];
        }), {
          className: [className].concat(_toConsumableArray(state.attrs.map(function (attr) {
            return attr.className;
          })), _toConsumableArray(attributes.filter(function (attribute) {
            return props[attribute.name] && (0, _matchAttribute2.default)(attribute, props[attribute.name]);
          }).map(function (attribute) {
            return attribute.className;
          }))).join(' ')
        }));
      }
    }]);

    return CSSComponent;
  }(_react.Component), _class.displayName = displayName, _temp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJzZWxlY3RvciIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZXMiLCJhdHRycyIsImJhc2UiLCJpbnZhbGlkUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwidGhlbiIsInNldFN0YXRlIiwiYm91bmRBdHRycyIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsImF0dHIiLCJjc3NSdWxlIiwic3R5bGUiLCJwcm9wIiwidGVtcGxhdGUiLCJ2YWx1ZSIsImtleSIsIm1hcCIsImZpbHRlciIsImF0dHJpYnV0ZSIsIm5hbWUiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQVFBQSxPQUFPQyxPQUFQLEdBQWlCLFNBQVNDLGtCQUFULE9BUWQ7QUFBQTs7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxTQUtDLFFBTERBLFNBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSx1QkFGREMsSUFFQztBQUFBLE1BRkRBLElBRUMsNkJBRk0sS0FFTjtBQUFBLE1BRERDLFlBQ0MsUUFEREEsWUFDQzs7QUFDRDtBQUFBOztBQU9FLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBQUEsWUFKbkJDLEtBSW1CLEdBSlg7QUFDTkosZUFBTztBQURELE9BSVc7O0FBRWpCLHNDQUFpQkEsS0FBakIsRUFBd0JLLElBQXhCLENBQTZCO0FBQUEsZUFBYyxNQUFLQyxRQUFMLENBQWMsRUFBRU4sT0FBT08sVUFBVCxFQUFkLENBQWQ7QUFBQSxPQUE3QjtBQUZpQjtBQUdsQjs7QUFWSDtBQUFBO0FBQUEsMENBWXNCQyxTQVp0QixFQVlpQ0MsU0FaakMsRUFZNEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDeEMsK0JBQW1CQSxVQUFVVCxLQUE3Qiw4SEFBb0M7QUFBQSxnQkFBekJVLElBQXlCOztBQUNsQyxnQkFBSUEsS0FBS0MsT0FBVCxFQUFrQjtBQUNoQkQsbUJBQUtDLE9BQUwsQ0FBYUMsS0FBYixDQUFtQkYsS0FBS0csSUFBeEIsSUFBZ0Msc0JBQU9ILEtBQUtJLFFBQVosRUFBc0JOLFNBQXRCLENBQWhDO0FBQ0Q7QUFDRjtBQUx1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXpDO0FBbEJIO0FBQUE7QUFBQSwrQkFvQlc7QUFBQSxZQUNDTCxLQURELEdBQ2tCLElBRGxCLENBQ0NBLEtBREQ7QUFBQSxZQUNRQyxLQURSLEdBQ2tCLElBRGxCLENBQ1FBLEtBRFI7O0FBRVAsZUFBTywwQkFBY0gsSUFBZCxlQUNGLG1CQUFPRSxLQUFQLEVBQWMsVUFBQ1ksS0FBRCxFQUFRQyxHQUFSO0FBQUEsaUJBQWdCZCxhQUFhYyxHQUFiLENBQWhCO0FBQUEsU0FBZCxDQURFO0FBRUxsQixxQkFBVyxDQUNUQSxTQURTLDRCQUVOTSxNQUFNSixLQUFOLENBQVlpQixHQUFaLENBQWdCO0FBQUEsbUJBQVFQLEtBQUtaLFNBQWI7QUFBQSxXQUFoQixDQUZNLHNCQUdOQyxXQUNBbUIsTUFEQSxDQUVDO0FBQUEsbUJBQWFmLE1BQU1nQixVQUFVQyxJQUFoQixLQUF5Qiw4QkFBZUQsU0FBZixFQUEwQmhCLE1BQU1nQixVQUFVQyxJQUFoQixDQUExQixDQUF0QztBQUFBLFdBRkQsRUFJQUgsR0FKQSxDQUlJO0FBQUEsbUJBQWFFLFVBQVVyQixTQUF2QjtBQUFBLFdBSkosQ0FITSxHQVFUdUIsSUFSUyxDQVFKLEdBUkk7QUFGTixXQUFQO0FBWUQ7QUFsQ0g7O0FBQUE7QUFBQSw4QkFDU3pCLFdBRFQsR0FDdUJBLFdBRHZCO0FBb0NELENBN0NEIiwiZmlsZSI6ImNyZWF0ZS1jc3MtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XG5pbXBvcnQgbWF0Y2hBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vY29yZS9tYXRjaC1hdHRyaWJ1dGUnO1xuaW1wb3J0IGJpbmRBdHRyc1RvQ1NTT00gZnJvbSAnLi4vLi4vZG9tL2Rpc3QvYmluZC1hdHRycy10by1jc3NvbSc7XG5pbXBvcnQgeyBvbWl0QnkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkUHJvcHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVDU1NDb21wb25lbnQoe1xuICBkaXNwbGF5TmFtZSxcbiAgc2VsZWN0b3IsXG4gIGNsYXNzTmFtZSxcbiAgYXR0cmlidXRlcyxcbiAgYXR0cnMsXG4gIGJhc2UgPSAnZGl2JyxcbiAgaW52YWxpZFByb3BzLFxufSkge1xuICByZXR1cm4gY2xhc3MgQ1NTQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgYXR0cnM6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgYmluZEF0dHJzVG9DU1NPTShhdHRycykudGhlbihib3VuZEF0dHJzID0+IHRoaXMuc2V0U3RhdGUoeyBhdHRyczogYm91bmRBdHRycyB9KSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIG5leHRTdGF0ZS5hdHRycykge1xuICAgICAgICBpZiAoYXR0ci5jc3NSdWxlKSB7XG4gICAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgbmV4dFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgcHJvcHMsIHN0YXRlIH0gPSB0aGlzO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYmFzZSwge1xuICAgICAgICAuLi5vbWl0QnkocHJvcHMsICh2YWx1ZSwga2V5KSA9PiBpbnZhbGlkUHJvcHNba2V5XSksXG4gICAgICAgIGNsYXNzTmFtZTogW1xuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAuLi5zdGF0ZS5hdHRycy5tYXAoYXR0ciA9PiBhdHRyLmNsYXNzTmFtZSksXG4gICAgICAgICAgLi4uYXR0cmlidXRlc1xuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgYXR0cmlidXRlID0+IHByb3BzW2F0dHJpYnV0ZS5uYW1lXSAmJiBtYXRjaEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHByb3BzW2F0dHJpYnV0ZS5uYW1lXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoYXR0cmlidXRlID0+IGF0dHJpYnV0ZS5jbGFzc05hbWUpLFxuICAgICAgICBdLmpvaW4oJyAnKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG4iXX0=