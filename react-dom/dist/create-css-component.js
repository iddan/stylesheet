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

      _this.className = className;
      _this.attributes = attributes;
      _this.attrs = attrs;
      _this.base = base;
      _this.invalidProps = invalidProps;
      _this.state = {
        attrs: []
      };

      (0, _bindAttrsToCssom2.default)(_this.attrs).then(function (boundAttrs) {
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
        var _this2 = this;

        var props = this.props,
            state = this.state;

        return (0, _react.createElement)(this.base, _extends({}, (0, _utils.omitBy)(props, function (value, key) {
          return _this2.invalidProps[key];
        }), {
          className: [this.className].concat(_toConsumableArray(state.attrs.map(function (attr) {
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
  }(_react.Component), _class.displayName = displayName, _temp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJzdGF0ZSIsInRoZW4iLCJzZXRTdGF0ZSIsImJvdW5kQXR0cnMiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJhdHRyIiwiY3NzUnVsZSIsInN0eWxlIiwicHJvcCIsInRlbXBsYXRlIiwidmFsdWUiLCJrZXkiLCJtYXAiLCJmaWx0ZXIiLCJhdHRyaWJ1dGUiLCJuYW1lIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQUEsT0FBT0MsT0FBUCxHQUFpQixTQUFTQyxrQkFBVCxPQU9kO0FBQUE7O0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEsTUFKREMsVUFJQyxRQUpEQSxVQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsdUJBRkRDLElBRUM7QUFBQSxNQUZEQSxJQUVDLDZCQUZNLEtBRU47QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7O0FBQ0Q7QUFBQTs7QUFhRSwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUFBLFlBVm5CTCxTQVVtQixHQVZQQSxTQVVPO0FBQUEsWUFUbkJDLFVBU21CLEdBVE5BLFVBU007QUFBQSxZQVJuQkMsS0FRbUIsR0FSWEEsS0FRVztBQUFBLFlBUG5CQyxJQU9tQixHQVBaQSxJQU9ZO0FBQUEsWUFObkJDLFlBTW1CLEdBTkpBLFlBTUk7QUFBQSxZQUpuQkUsS0FJbUIsR0FKWDtBQUNOSixlQUFPO0FBREQsT0FJVzs7QUFFakIsc0NBQWlCLE1BQUtBLEtBQXRCLEVBQTZCSyxJQUE3QixDQUFrQztBQUFBLGVBQWMsTUFBS0MsUUFBTCxDQUFjLEVBQUVOLE9BQU9PLFVBQVQsRUFBZCxDQUFkO0FBQUEsT0FBbEM7QUFGaUI7QUFHbEI7O0FBaEJIO0FBQUE7QUFBQSwwQ0FrQnNCQyxTQWxCdEIsRUFrQmlDQyxTQWxCakMsRUFrQjRDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3hDLCtCQUFtQkEsVUFBVVQsS0FBN0IsOEhBQW9DO0FBQUEsZ0JBQXpCVSxJQUF5Qjs7QUFDbEMsZ0JBQUlBLEtBQUtDLE9BQVQsRUFBa0I7QUFDaEJELG1CQUFLQyxPQUFMLENBQWFDLEtBQWIsQ0FBbUJGLEtBQUtHLElBQXhCLElBQWdDLHNCQUFPSCxLQUFLSSxRQUFaLEVBQXNCTixTQUF0QixDQUFoQztBQUNEO0FBQ0Y7QUFMdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU16QztBQXhCSDtBQUFBO0FBQUEsK0JBMEJXO0FBQUE7O0FBQUEsWUFDQ0wsS0FERCxHQUNrQixJQURsQixDQUNDQSxLQUREO0FBQUEsWUFDUUMsS0FEUixHQUNrQixJQURsQixDQUNRQSxLQURSOztBQUVQLGVBQU8sMEJBQWMsS0FBS0gsSUFBbkIsZUFDRixtQkFBT0UsS0FBUCxFQUFjLFVBQUNZLEtBQUQsRUFBUUMsR0FBUjtBQUFBLGlCQUFnQixPQUFLZCxZQUFMLENBQWtCYyxHQUFsQixDQUFoQjtBQUFBLFNBQWQsQ0FERTtBQUVMbEIscUJBQVcsQ0FDVCxLQUFLQSxTQURJLDRCQUVOTSxNQUFNSixLQUFOLENBQVlpQixHQUFaLENBQWdCO0FBQUEsbUJBQVFQLEtBQUtaLFNBQWI7QUFBQSxXQUFoQixDQUZNLHNCQUdOLEtBQUtDLFVBQUwsQ0FDQW1CLE1BREEsQ0FFQztBQUFBLG1CQUFhZixNQUFNZ0IsVUFBVUMsSUFBaEIsS0FBeUIsOEJBQWVELFNBQWYsRUFBMEJoQixNQUFNZ0IsVUFBVUMsSUFBaEIsQ0FBMUIsQ0FBdEM7QUFBQSxXQUZELEVBSUFILEdBSkEsQ0FJSTtBQUFBLG1CQUFhRSxVQUFVckIsU0FBdkI7QUFBQSxXQUpKLENBSE0sR0FRVHVCLElBUlMsQ0FRSixHQVJJO0FBRk4sV0FBUDtBQVlEO0FBeENIOztBQUFBO0FBQUEsOEJBQ1N4QixXQURULEdBQ3VCQSxXQUR2QjtBQTBDRCxDQWxERCIsImZpbGUiOiJjcmVhdGUtY3NzLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uLy4uL2NvcmUvdGVtcGxhdGUnO1xuaW1wb3J0IG1hdGNoQXR0cmlidXRlIGZyb20gJy4uLy4uL2NvcmUvbWF0Y2gtYXR0cmlidXRlJztcbmltcG9ydCBiaW5kQXR0cnNUb0NTU09NIGZyb20gJy4uLy4uL2RvbS9kaXN0L2JpbmQtYXR0cnMtdG8tY3Nzb20nO1xuaW1wb3J0IHsgb21pdEJ5IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcGFyYW0ge09iamVjdH0gaW52YWxpZFByb3BzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlQ1NTQ29tcG9uZW50KHtcbiAgZGlzcGxheU5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgYXR0cmlidXRlcyxcbiAgYXR0cnMsXG4gIGJhc2UgPSAnZGl2JyxcbiAgaW52YWxpZFByb3BzLFxufSkge1xuICByZXR1cm4gY2xhc3MgQ1NTQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICBhdHRycyA9IGF0dHJzO1xuICAgIGJhc2UgPSBiYXNlO1xuICAgIGludmFsaWRQcm9wcyA9IGludmFsaWRQcm9wcztcblxuICAgIHN0YXRlID0ge1xuICAgICAgYXR0cnM6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgYmluZEF0dHJzVG9DU1NPTSh0aGlzLmF0dHJzKS50aGVuKGJvdW5kQXR0cnMgPT4gdGhpcy5zZXRTdGF0ZSh7IGF0dHJzOiBib3VuZEF0dHJzIH0pKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgbmV4dFN0YXRlLmF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRyLmNzc1J1bGUpIHtcbiAgICAgICAgICBhdHRyLmNzc1J1bGUuc3R5bGVbYXR0ci5wcm9wXSA9IGZvcm1hdChhdHRyLnRlbXBsYXRlLCBuZXh0UHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBwcm9wcywgc3RhdGUgfSA9IHRoaXM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0aGlzLmJhc2UsIHtcbiAgICAgICAgLi4ub21pdEJ5KHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpcy5pbnZhbGlkUHJvcHNba2V5XSksXG4gICAgICAgIGNsYXNzTmFtZTogW1xuICAgICAgICAgIHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICAgIC4uLnN0YXRlLmF0dHJzLm1hcChhdHRyID0+IGF0dHIuY2xhc3NOYW1lKSxcbiAgICAgICAgICAuLi50aGlzLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZSA9PiBwcm9wc1thdHRyaWJ1dGUubmFtZV0gJiYgbWF0Y2hBdHRyaWJ1dGUoYXR0cmlidXRlLCBwcm9wc1thdHRyaWJ1dGUubmFtZV0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY2xhc3NOYW1lKSxcbiAgICAgICAgXS5qb2luKCcgJyksXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuIl19