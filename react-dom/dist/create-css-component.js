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
          className: this.generateClassName(this.props)
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
    this.attrs = (0, _bindAttrsToCssom2.default)(attrs);
    this.generateClassName = (0, _generateClassName2.default)({ className: className, attributes: attributes, attrs: this.attrs });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJhcHBseUF0dHJzIiwibmV4dFByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJzaG91bGRPbWl0UHJvcCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiYXR0ciIsImNzc1J1bGUiLCJzdHlsZSIsInByb3AiLCJ0ZW1wbGF0ZSIsInZhbHVlIiwia2V5IiwibWF0Y2hBdHRyaWJ1dGVUb1Byb3AiLCJhdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQVFBQSxPQUFPQyxPQUFQLEdBQWlCLFNBQVNDLGtCQUFULE9BT2Q7QUFBQTs7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxTQUtDLFFBTERBLFNBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSx1QkFGREMsSUFFQztBQUFBLE1BRkRBLElBRUMsNkJBRk0sS0FFTjtBQUFBLE1BRERDLFlBQ0MsUUFEREEsWUFDQzs7QUFDRDtBQUFBOztBQVdFLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBQUE7O0FBRWpCLFlBQUtDLFVBQUwsQ0FBZ0JELEtBQWhCO0FBRmlCO0FBR2xCOztBQWRIO0FBQUE7QUFBQSwwQ0FnQnNCRSxTQWhCdEIsRUFnQmlDO0FBQzdCLGFBQUtELFVBQUwsQ0FBZ0JDLFNBQWhCO0FBQ0Q7QUFsQkg7QUFBQTtBQUFBLCtCQWtDVztBQUFBLFlBQ0NGLEtBREQsR0FDVyxJQURYLENBQ0NBLEtBREQ7O0FBRVAsZUFBTywwQkFBYyxLQUFLRixJQUFuQjtBQUNMSyxlQUFLSCxNQUFNSTtBQUROLFdBRUYsbUJBQU9KLEtBQVAsRUFBYyxLQUFLSyxjQUFuQixDQUZFO0FBR0xWLHFCQUFXLEtBQUtXLGlCQUFMLENBQXVCLEtBQUtOLEtBQTVCO0FBSE4sV0FBUDtBQUtEO0FBekNIOztBQUFBO0FBQUEsOEJBQ1NOLFdBRFQsZUFDa0NBLFdBRGxDO0FBQUE7O0FBQUEsU0FHRUMsU0FIRixHQUdjQSxTQUhkO0FBQUEsU0FJRUMsVUFKRixHQUllQSxVQUpmO0FBQUEsU0FLRUUsSUFMRixHQUtTQSxJQUxUO0FBQUEsU0FNRUMsWUFORixHQU1pQkEsWUFOakI7QUFBQSxTQVFFRixLQVJGLEdBUVUsZ0NBQWlCQSxLQUFqQixDQVJWO0FBQUEsU0FTRVMsaUJBVEYsR0FTc0IsaUNBQWtCLEVBQUVYLG9CQUFGLEVBQWFDLHNCQUFiLEVBQXlCQyxPQUFPLEtBQUtBLEtBQXJDLEVBQWxCLENBVHRCOztBQUFBLFNBb0JFSSxVQXBCRixHQW9CZSxpQkFBUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNwQiw2QkFBbUIsT0FBS0osS0FBeEIsOEhBQStCO0FBQUEsY0FBcEJVLElBQW9COztBQUM3QkEsZUFBS0MsT0FBTCxDQUFhQyxLQUFiLENBQW1CRixLQUFLRyxJQUF4QixJQUFnQyxzQkFBT0gsS0FBS0ksUUFBWixFQUFzQlgsS0FBdEIsQ0FBaEM7QUFDRDtBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXJCLEtBeEJIOztBQUFBLFNBMEJFSyxjQTFCRixHQTBCbUIsVUFBQ08sS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQy9CLGFBQU8sT0FBS2QsWUFBTCxDQUFrQmMsR0FBbEIsS0FBMEJBLFFBQVEsVUFBekM7QUFDRCxLQTVCSDs7QUFBQSxTQThCRUMsb0JBOUJGLEdBOEJ5QixxQkFBYTtBQUNsQyxhQUFPLDhCQUFlQyxTQUFmLEVBQTBCLE9BQUtmLEtBQUwsQ0FBV2UsVUFBVUMsSUFBckIsQ0FBMUIsQ0FBUDtBQUNELEtBaENIO0FBQUE7QUEyQ0QsQ0FuREQ7O0FBcURBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUd0QixTQUFILFNBQUdBLFNBQUg7QUFBQSxTQUFtQkEsU0FBbkI7QUFBQSxDQUFyQiIsImZpbGUiOiJjcmVhdGUtY3NzLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uLy4uL2NvcmUvdGVtcGxhdGUnO1xuaW1wb3J0IG1hdGNoQXR0cmlidXRlIGZyb20gJy4uLy4uL2NvcmUvbWF0Y2gtYXR0cmlidXRlJztcbmltcG9ydCBiaW5kQXR0cnNUb0NTU09NIGZyb20gJy4uLy4uL2RvbS9kaXN0L2JpbmQtYXR0cnMtdG8tY3Nzb20nO1xuaW1wb3J0IGdlbmVyYXRlQ2xhc3NOYW1lIGZyb20gJy4uLy4uL2RvbS9kaXN0L2dlbmVyYXRlLWNsYXNzLW5hbWUnO1xuaW1wb3J0IHsgb21pdEJ5IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcGFyYW0ge09iamVjdH0gaW52YWxpZFByb3BzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlQ1NTQ29tcG9uZW50KHtcbiAgZGlzcGxheU5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgYXR0cmlidXRlcyxcbiAgYXR0cnMsXG4gIGJhc2UgPSAnZGl2JyxcbiAgaW52YWxpZFByb3BzLFxufSkge1xuICByZXR1cm4gY2xhc3MgQ1NTQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgU3R5bGVkKCR7IGRpc3BsYXlOYW1lIH0pYDtcblxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICBiYXNlID0gYmFzZTtcbiAgICBpbnZhbGlkUHJvcHMgPSBpbnZhbGlkUHJvcHM7XG5cbiAgICBhdHRycyA9IGJpbmRBdHRyc1RvQ1NTT00oYXR0cnMpO1xuICAgIGdlbmVyYXRlQ2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoeyBjbGFzc05hbWUsIGF0dHJpYnV0ZXMsIGF0dHJzOiB0aGlzLmF0dHJzIH0pO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyhwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGFwcGx5QXR0cnMgPSBwcm9wcyA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgdGhpcy5hdHRycykge1xuICAgICAgICBhdHRyLmNzc1J1bGUuc3R5bGVbYXR0ci5wcm9wXSA9IGZvcm1hdChhdHRyLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNob3VsZE9taXRQcm9wID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWRQcm9wc1trZXldIHx8IGtleSA9PT0gJ2lubmVyUmVmJztcbiAgICB9O1xuXG4gICAgbWF0Y2hBdHRyaWJ1dGVUb1Byb3AgPSBhdHRyaWJ1dGUgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgdGhpcy5wcm9wc1thdHRyaWJ1dGUubmFtZV0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodGhpcy5iYXNlLCB7XG4gICAgICAgIHJlZjogcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIC4uLm9taXRCeShwcm9wcywgdGhpcy5zaG91bGRPbWl0UHJvcCksXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZW5lcmF0ZUNsYXNzTmFtZSh0aGlzLnByb3BzKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IGdldENsYXNzTmFtZSA9ICh7IGNsYXNzTmFtZSB9KSA9PiBjbGFzc05hbWU7XG4iXX0=