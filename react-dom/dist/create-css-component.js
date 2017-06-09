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

  console.log(displayName, invalidProps);
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

        console.log(invalidProps, props, (0, _utils.omitBy)(function (value, key) {
          return _this2.invalidProps[key];
        }), displayName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYXBwbHlBdHRycyIsIm5leHRQcm9wcyIsInZhbHVlIiwia2V5IiwibWFwIiwiYXR0ciIsImZpbHRlciIsImF0dHJpYnV0ZSIsIm5hbWUiLCJqb2luIiwiY3NzUnVsZSIsInN0eWxlIiwicHJvcCIsInRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQVFBQSxPQUFPQyxPQUFQLEdBQWlCLFNBQVNDLGtCQUFULE9BT2Q7QUFBQTs7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxTQUtDLFFBTERBLFNBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSx1QkFGREMsSUFFQztBQUFBLE1BRkRBLElBRUMsNkJBRk0sS0FFTjtBQUFBLE1BRERDLFlBQ0MsUUFEREEsWUFDQzs7QUFDREMsVUFBUUMsR0FBUixDQUFZUCxXQUFaLEVBQXlCSyxZQUF6QjtBQUNBO0FBQUE7O0FBUUUsMEJBQVlHLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFBQTs7QUFFakIsWUFBS0wsS0FBTCxHQUFhLGdDQUFpQkEsS0FBakIsQ0FBYjtBQUNBLFlBQUtNLFVBQUwsQ0FBZ0JELEtBQWhCO0FBSGlCO0FBSWxCOztBQVpIO0FBQUE7QUFBQSwwQ0FvQnNCRSxTQXBCdEIsRUFvQmlDO0FBQzdCLGFBQUtELFVBQUwsQ0FBZ0JDLFNBQWhCO0FBQ0Q7QUF0Qkg7QUFBQTtBQUFBLCtCQXdCVztBQUFBOztBQUFBLFlBQ0NGLEtBREQsR0FDVyxJQURYLENBQ0NBLEtBREQ7O0FBRVBGLGdCQUFRQyxHQUFSLENBQVlGLFlBQVosRUFBMEJHLEtBQTFCLEVBQWlDLG1CQUFPLFVBQUNHLEtBQUQsRUFBUUMsR0FBUjtBQUFBLGlCQUFnQixPQUFLUCxZQUFMLENBQWtCTyxHQUFsQixDQUFoQjtBQUFBLFNBQVAsQ0FBakMsRUFBaUZaLFdBQWpGO0FBQ0EsZUFBTywwQkFBYyxLQUFLSSxJQUFuQixlQUNGLG1CQUFPSSxLQUFQLEVBQWMsVUFBQ0csS0FBRCxFQUFRQyxHQUFSO0FBQUEsaUJBQWdCLE9BQUtQLFlBQUwsQ0FBa0JPLEdBQWxCLENBQWhCO0FBQUEsU0FBZCxDQURFO0FBRUxYLHFCQUFXLENBQ1QsS0FBS0EsU0FESSw0QkFFTixLQUFLRSxLQUFMLENBQVdVLEdBQVgsQ0FBZTtBQUFBLG1CQUFRQyxLQUFLYixTQUFiO0FBQUEsV0FBZixDQUZNLHNCQUdOLEtBQUtDLFVBQUwsQ0FDQWEsTUFEQSxDQUVDO0FBQUEsbUJBQWFQLE1BQU1RLFVBQVVDLElBQWhCLEtBQXlCLDhCQUFlRCxTQUFmLEVBQTBCUixNQUFNUSxVQUFVQyxJQUFoQixDQUExQixDQUF0QztBQUFBLFdBRkQsRUFJQUosR0FKQSxDQUlJO0FBQUEsbUJBQWFHLFVBQVVmLFNBQXZCO0FBQUEsV0FKSixDQUhNLEdBUVRpQixJQVJTLENBUUosR0FSSTtBQUZOLFdBQVA7QUFZRDtBQXZDSDs7QUFBQTtBQUFBLDhCQUNTbEIsV0FEVCxHQUN1QkEsV0FEdkI7QUFBQTs7QUFBQSxTQUdFQyxTQUhGLEdBR2NBLFNBSGQ7QUFBQSxTQUlFQyxVQUpGLEdBSWVBLFVBSmY7QUFBQSxTQUtFRSxJQUxGLEdBS1NBLElBTFQ7QUFBQSxTQU1FQyxZQU5GLEdBTWlCQSxZQU5qQjs7QUFBQSxTQWNFSSxVQWRGLEdBY2UsaUJBQVM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDcEIsNkJBQW1CLE9BQUtOLEtBQXhCLDhIQUErQjtBQUFBLGNBQXBCVyxJQUFvQjs7QUFDN0JBLGVBQUtLLE9BQUwsQ0FBYUMsS0FBYixDQUFtQk4sS0FBS08sSUFBeEIsSUFBZ0Msc0JBQU9QLEtBQUtRLFFBQVosRUFBc0JkLEtBQXRCLENBQWhDO0FBQ0Q7QUFIbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlyQixLQWxCSDtBQUFBO0FBeUNELENBbEREIiwiZmlsZSI6ImNyZWF0ZS1jc3MtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XG5pbXBvcnQgbWF0Y2hBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vY29yZS9tYXRjaC1hdHRyaWJ1dGUnO1xuaW1wb3J0IGJpbmRBdHRyc1RvQ1NTT00gZnJvbSAnLi4vLi4vZG9tL2Rpc3QvYmluZC1hdHRycy10by1jc3NvbSc7XG5pbXBvcnQgeyBvbWl0QnkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkUHJvcHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVDU1NDb21wb25lbnQoe1xuICBkaXNwbGF5TmFtZSxcbiAgY2xhc3NOYW1lLFxuICBhdHRyaWJ1dGVzLFxuICBhdHRycyxcbiAgYmFzZSA9ICdkaXYnLFxuICBpbnZhbGlkUHJvcHMsXG59KSB7XG4gIGNvbnNvbGUubG9nKGRpc3BsYXlOYW1lLCBpbnZhbGlkUHJvcHMpO1xuICByZXR1cm4gY2xhc3MgQ1NTQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICBiYXNlID0gYmFzZTtcbiAgICBpbnZhbGlkUHJvcHMgPSBpbnZhbGlkUHJvcHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5hdHRycyA9IGJpbmRBdHRyc1RvQ1NTT00oYXR0cnMpO1xuICAgICAgdGhpcy5hcHBseUF0dHJzKHByb3BzKTtcbiAgICB9XG5cbiAgICBhcHBseUF0dHJzID0gcHJvcHMgPT4ge1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIHRoaXMuYXR0cnMpIHtcbiAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgcHJvcHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5hcHBseUF0dHJzKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKGludmFsaWRQcm9wcywgcHJvcHMsIG9taXRCeSgodmFsdWUsIGtleSkgPT4gdGhpcy5pbnZhbGlkUHJvcHNba2V5XSksIGRpc3BsYXlOYW1lKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHRoaXMuYmFzZSwge1xuICAgICAgICAuLi5vbWl0QnkocHJvcHMsICh2YWx1ZSwga2V5KSA9PiB0aGlzLmludmFsaWRQcm9wc1trZXldKSxcbiAgICAgICAgY2xhc3NOYW1lOiBbXG4gICAgICAgICAgdGhpcy5jbGFzc05hbWUsXG4gICAgICAgICAgLi4udGhpcy5hdHRycy5tYXAoYXR0ciA9PiBhdHRyLmNsYXNzTmFtZSksXG4gICAgICAgICAgLi4udGhpcy5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICBhdHRyaWJ1dGUgPT4gcHJvcHNbYXR0cmlidXRlLm5hbWVdICYmIG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgcHJvcHNbYXR0cmlidXRlLm5hbWVdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLmNsYXNzTmFtZSksXG4gICAgICAgIF0uam9pbignICcpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcbiJdfQ==