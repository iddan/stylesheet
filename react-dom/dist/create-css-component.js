'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _template = require('../../core/template');

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
 * @param {string} displayName to be displayed in the React Dev Tools wrapped with Styled()
 * @param {string} className to be used for basic styles bound to the component's tag name
 * @param {Array<Attribute>} attributes selectors the component can be bound to
 * @param {Array<Attr>} attrs in properties that the component can be bound to
 * @param {string} [base] tag the component uses by default
 * @param {Object} invalidProps to avoid passing to the component's DOM element
 * @returns {Class<React.Component>}
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

    /** Defined on the component so they can be redefined and be updated in instances later */
    function CSSComponent(props) {
      _classCallCheck(this, CSSComponent);

      var _this = _possibleConstructorReturn(this, (CSSComponent.__proto__ || Object.getPrototypeOf(CSSComponent)).call(this, props));

      _initialiseProps.call(_this);

      _this.init();
      /** Register the instance for hot updates */
      _hot2.default.register(_this);
      return _this;
    }

    /**
     * Defined outside the constructor as it can be reused when the component's static properties change.
     * Currently used for HMR
     */


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

      /** Updates the element's CSS properties using attr() */


      /**
       * @param {*} value of prop
       * @param {*} key of prop
       * @return {boolean}
       */

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
  }, _temp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY3NzLWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ1NTQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJiYXNlIiwiaW52YWxpZFByb3BzIiwicHJvcHMiLCJpbml0IiwicmVnaXN0ZXIiLCJjb25zdHJ1Y3RvciIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiYXBwbHlBdHRycyIsIm5leHRQcm9wcyIsInVucmVnaXN0ZXIiLCJyZWYiLCJpbm5lclJlZiIsInNob3VsZE9taXRQcm9wIiwiYXR0ciIsImNzc1J1bGUiLCJzdHlsZSIsInByb3AiLCJ0ZW1wbGF0ZSIsInZhbHVlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7QUFTQUEsT0FBT0MsT0FBUCxHQUFpQixTQUFTQyxrQkFBVCxPQU9kO0FBQUE7O0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEsTUFKREMsVUFJQyxRQUpEQSxVQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsdUJBRkRDLElBRUM7QUFBQSxNQUZEQSxJQUVDLDZCQUZNLEtBRU47QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7O0FBQ0Q7QUFBQTs7QUFDRTtBQVFBLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBQUE7O0FBRWpCLFlBQUtDLElBQUw7QUFDQTtBQUNBLG9CQUFXQyxRQUFYO0FBSmlCO0FBS2xCOztBQUVEOzs7Ozs7QUFoQkY7QUFBQTtBQUFBLDZCQW9CUztBQUNMLGFBQUtMLEtBQUwsR0FBYSxnQ0FBaUIsS0FBS00sV0FBTCxDQUFpQk4sS0FBbEMsQ0FBYjtBQUNBLGFBQUtPLGlCQUFMLEdBQXlCLGlDQUFrQjtBQUN6Q1QscUJBQVcsS0FBS1EsV0FBTCxDQUFpQlIsU0FEYTtBQUV6Q0Msc0JBQVksS0FBS08sV0FBTCxDQUFpQlAsVUFGWTtBQUd6Q0MsaUJBQU8sS0FBS0E7QUFINkIsU0FBbEIsQ0FBekI7QUFLQSxhQUFLUSxVQUFMLENBQWdCLEtBQUtMLEtBQXJCO0FBQ0Q7QUE1Qkg7QUFBQTtBQUFBLDBDQThCc0JNLFNBOUJ0QixFQThCaUM7QUFDN0IsYUFBS0QsVUFBTCxDQUFnQkMsU0FBaEI7QUFDRDtBQWhDSDtBQUFBO0FBQUEsNkNBa0N5QjtBQUNyQixzQkFBV0MsVUFBWCxDQUFzQixJQUF0QjtBQUNEOztBQUVEOzs7QUFPQTs7Ozs7O0FBN0NGO0FBQUE7QUFBQSwrQkFzRFc7QUFBQSxZQUNDUCxLQURELEdBQ1csSUFEWCxDQUNDQSxLQUREOztBQUVQLGVBQU8sMEJBQWMsS0FBS0csV0FBTCxDQUFpQkwsSUFBL0I7QUFDTFUsZUFBS1IsTUFBTVM7QUFETixXQUVGLG1CQUFPVCxLQUFQLEVBQWMsS0FBS1UsY0FBbkIsQ0FGRTtBQUdMZixxQkFBVyxLQUFLUyxpQkFBTCxDQUF1QixLQUFLSixLQUE1QjtBQUhOLFdBQVA7QUFLRDtBQTdESDs7QUFBQTtBQUFBLDhCQUVTTixXQUZULGVBRWtDQSxXQUZsQyxlQUdTQyxTQUhULEdBR3FCQSxTQUhyQixTQUlTQyxVQUpULEdBSXNCQSxVQUp0QixTQUtTQyxLQUxULEdBS2lCQSxLQUxqQixTQU1TQyxJQU5ULEdBTWdCQSxJQU5oQixTQU9TQyxZQVBULEdBT3dCQSxZQVB4QjtBQUFBOztBQUFBLFNBdUNFTSxVQXZDRixHQXVDZSxpQkFBUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNwQiw2QkFBbUIsT0FBS1IsS0FBeEIsOEhBQStCO0FBQUEsY0FBcEJjLElBQW9COztBQUM3QkEsZUFBS0MsT0FBTCxDQUFhQyxLQUFiLENBQW1CRixLQUFLRyxJQUF4QixJQUFnQyxzQkFBT0gsS0FBS0ksUUFBWixFQUFzQmYsS0FBdEIsQ0FBaEM7QUFDRDtBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXJCLEtBM0NIOztBQUFBLFNBa0RFVSxjQWxERixHQWtEbUIsVUFBQ00sS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQy9CLGFBQU8sT0FBS2QsV0FBTCxDQUFpQkosWUFBakIsQ0FBOEJrQixHQUE5QixLQUFzQ0EsUUFBUSxVQUFyRDtBQUNELEtBcERIO0FBQUE7QUErREQsQ0F2RUQiLCJmaWxlIjoiY3JlYXRlLWNzcy1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBiaW5kQXR0cnNUb0NTU09NIGZyb20gJy4uLy4uL2RvbS9kaXN0L2JpbmQtYXR0cnMtdG8tY3Nzb20nO1xuaW1wb3J0IGdlbmVyYXRlQ2xhc3NOYW1lIGZyb20gJy4uLy4uL2RvbS9kaXN0L2dlbmVyYXRlLWNsYXNzLW5hbWUnO1xuaW1wb3J0IFN0eWxlc2hlZXQgZnJvbSAnLi4vaG90JztcbmltcG9ydCB7IG9taXRCeSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIFJlYWN0IERldiBUb29scyB3cmFwcGVkIHdpdGggU3R5bGVkKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgdG8gYmUgdXNlZCBmb3IgYmFzaWMgc3R5bGVzIGJvdW5kIHRvIHRoZSBjb21wb25lbnQncyB0YWcgbmFtZVxuICogQHBhcmFtIHtBcnJheTxBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzIHNlbGVjdG9ycyB0aGUgY29tcG9uZW50IGNhbiBiZSBib3VuZCB0b1xuICogQHBhcmFtIHtBcnJheTxBdHRyPn0gYXR0cnMgaW4gcHJvcGVydGllcyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGJlIGJvdW5kIHRvXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Jhc2VdIHRhZyB0aGUgY29tcG9uZW50IHVzZXMgYnkgZGVmYXVsdFxuICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRQcm9wcyB0byBhdm9pZCBwYXNzaW5nIHRvIHRoZSBjb21wb25lbnQncyBET00gZWxlbWVudFxuICogQHJldHVybnMge0NsYXNzPFJlYWN0LkNvbXBvbmVudD59XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlQ1NTQ29tcG9uZW50KHtcbiAgZGlzcGxheU5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgYXR0cmlidXRlcyxcbiAgYXR0cnMsXG4gIGJhc2UgPSAnZGl2JyxcbiAgaW52YWxpZFByb3BzLFxufSkge1xuICByZXR1cm4gY2xhc3MgQ1NTQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiogRGVmaW5lZCBvbiB0aGUgY29tcG9uZW50IHNvIHRoZXkgY2FuIGJlIHJlZGVmaW5lZCBhbmQgYmUgdXBkYXRlZCBpbiBpbnN0YW5jZXMgbGF0ZXIgKi9cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgU3R5bGVkKCR7IGRpc3BsYXlOYW1lIH0pYDtcbiAgICBzdGF0aWMgY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHN0YXRpYyBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICBzdGF0aWMgYXR0cnMgPSBhdHRycztcbiAgICBzdGF0aWMgYmFzZSA9IGJhc2U7XG4gICAgc3RhdGljIGludmFsaWRQcm9wcyA9IGludmFsaWRQcm9wcztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIC8qKiBSZWdpc3RlciB0aGUgaW5zdGFuY2UgZm9yIGhvdCB1cGRhdGVzICovXG4gICAgICBTdHlsZXNoZWV0LnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZWQgb3V0c2lkZSB0aGUgY29uc3RydWN0b3IgYXMgaXQgY2FuIGJlIHJldXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBzdGF0aWMgcHJvcGVydGllcyBjaGFuZ2UuXG4gICAgICogQ3VycmVudGx5IHVzZWQgZm9yIEhNUlxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLmF0dHJzID0gYmluZEF0dHJzVG9DU1NPTSh0aGlzLmNvbnN0cnVjdG9yLmF0dHJzKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSh7XG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5jbGFzc05hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuY29uc3RydWN0b3IuYXR0cmlidXRlcyxcbiAgICAgICAgYXR0cnM6IHRoaXMuYXR0cnMsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXBwbHlBdHRycyh0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5hcHBseUF0dHJzKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBTdHlsZXNoZWV0LnVucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIFVwZGF0ZXMgdGhlIGVsZW1lbnQncyBDU1MgcHJvcGVydGllcyB1c2luZyBhdHRyKCkgKi9cbiAgICBhcHBseUF0dHJzID0gcHJvcHMgPT4ge1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIHRoaXMuYXR0cnMpIHtcbiAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgcHJvcHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIG9mIHByb3BcbiAgICAgKiBAcGFyYW0geyp9IGtleSBvZiBwcm9wXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzaG91bGRPbWl0UHJvcCA9ICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5pbnZhbGlkUHJvcHNba2V5XSB8fCBrZXkgPT09ICdpbm5lclJlZic7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0aGlzLmNvbnN0cnVjdG9yLmJhc2UsIHtcbiAgICAgICAgcmVmOiBwcm9wcy5pbm5lclJlZixcbiAgICAgICAgLi4ub21pdEJ5KHByb3BzLCB0aGlzLnNob3VsZE9taXRQcm9wKSxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdlbmVyYXRlQ2xhc3NOYW1lKHRoaXMucHJvcHMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcbiJdfQ==