'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('../../core/template');

var _matchAttribute = require('../../core/match-attribute');

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _bindAttrsToCssom = require('../../dom/dist/bind-attrs-to-cssom');

var _bindAttrsToCssom2 = _interopRequireDefault(_bindAttrsToCssom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getAttributeClassNames = function getAttributeClassNames(attributes) {
  return function (props) {
    return attributes.filter(function (attribute) {
      return (0, _matchAttribute2.default)(attribute, props[attribute.name]);
    }).map(function (attribute) {
      return attribute.className;
    });
  };
};

var createComponent = function createComponent(_ref) {
  var _class, _temp, _initialiseProps;

  var displayName = _ref.displayName,
      selector = _ref.selector,
      className = _ref.className,
      attributes = _ref.attributes,
      attrs = _ref.attrs,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 'div' : _ref$base,
      invalidProps = _ref.invalidProps;
  return _temp = _class = function () {
    _createClass(CSSComponent, [{
      key: 'observe',
      value: function observe(properties) {
        var _this = this;

        Object.defineProperties(this.element, properties.reduce(function (acc, property) {
          return _extends({}, acc, _defineProperty({}, property, {
            get: function get() {
              return _this.props[property];
            },
            set: function set(value) {
              _this.props[property] = value;
              if (!_this.willUpdate) {
                _this.willUpdate = true;

                _this.render();
              }
              return value;
            }
          }));
        }, {}));
      }
    }], [{
      key: 'create',
      value: function create(initialAttributes) {
        var instance = new CSSComponent(initialAttributes);
        return instance.element;
      }
    }]);

    function CSSComponent() {
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CSSComponent);

      _initialiseProps.call(this);

      this.props = props;
      this.observe(this.constructor.propKeys);
      this.render();
      (0, _bindAttrsToCssom2.default)(attrs).then(function (boundAttrs) {
        _this2.attrs = boundAttrs;
        _this2.render();
      });
    }

    return CSSComponent;
  }(), _class.getAttributeClassNames = getAttributeClassNames(attributes), _class.propKeys = [].concat(_toConsumableArray(attributes.map(function (attribute) {
    return attribute.name;
  })), _toConsumableArray(attrs.reduce(function (acc, attr) {
    return acc.concat(attr.attributes);
  }, []))), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.element = document.createElement(base);
    this.willUpdate = false;
    this.attrs = [];

    this.render = function () {
      requestAnimationFrame(function () {
        var props = _this3.props;

        console.log('rendering', { props: props });
        _this3.element.dispatchEvent(Object.assign(new Event('componentWillUpdate', {
          props: props
        })));
        _this3.element.className = [className].concat(_this3.constructor.getAttributeClassNames(props)).concat(_this3.attrs.map(function (attr) {
          return attr.className;
        })).join(' ');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this3.attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            if (attr.cssRule) {
              attr.cssRule.style[attr.prop] = (0, _template.format)(attr.template, props);
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

        _this3.element.dispatchEvent(Object.assign(new Event('componentDidUpdate', { props: props })));
        _this3.willUpdate = false;
      });
    };
  }, _temp;
};

module.exports = createComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImdldEF0dHJpYnV0ZUNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiZmlsdGVyIiwiYXR0cmlidXRlIiwicHJvcHMiLCJuYW1lIiwibWFwIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJzZWxlY3RvciIsImF0dHJzIiwiYmFzZSIsImludmFsaWRQcm9wcyIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZWxlbWVudCIsInJlZHVjZSIsImFjYyIsInByb3BlcnR5IiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJ3aWxsVXBkYXRlIiwicmVuZGVyIiwiaW5pdGlhbEF0dHJpYnV0ZXMiLCJpbnN0YW5jZSIsIkNTU0NvbXBvbmVudCIsIm9ic2VydmUiLCJjb25zdHJ1Y3RvciIsInByb3BLZXlzIiwidGhlbiIsImJvdW5kQXR0cnMiLCJhdHRyIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoRXZlbnQiLCJhc3NpZ24iLCJFdmVudCIsImpvaW4iLCJjc3NSdWxlIiwic3R5bGUiLCJwcm9wIiwidGVtcGxhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx5QkFBeUIsU0FBekJBLHNCQUF5QjtBQUFBLFNBQWM7QUFBQSxXQUMzQ0MsV0FDR0MsTUFESCxDQUNVO0FBQUEsYUFBYSw4QkFBZUMsU0FBZixFQUEwQkMsTUFBTUQsVUFBVUUsSUFBaEIsQ0FBMUIsQ0FBYjtBQUFBLEtBRFYsRUFFR0MsR0FGSCxDQUVPO0FBQUEsYUFBYUgsVUFBVUksU0FBdkI7QUFBQSxLQUZQLENBRDJDO0FBQUEsR0FBZDtBQUFBLENBQS9COztBQUtBLElBQU1D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akIsQ0FBd0NJLEtBQXhDLENBRGUsRUFFdEIrQixNQUZzQixDQUVmLE9BQUt4QixLQUFMLENBQVdMLEdBQVgsQ0FBZTtBQUFBLGlCQUFRNEIsS0FBSzNCLFNBQWI7QUFBQSxTQUFmLENBRmUsRUFHdEJxQyxJQUhzQixDQUdqQixHQUhpQixDQUF6QjtBQVYwQjtBQUFBO0FBQUE7O0FBQUE7QUFjMUIsK0JBQW1CLE9BQUtqQyxLQUF4Qiw4SEFBK0I7QUFBQSxnQkFBcEJ1QixJQUFvQjs7QUFDN0IsZ0JBQUlBLEtBQUtXLE9BQVQsRUFBa0I7QUFDaEJYLG1CQUFLVyxPQUFMLENBQWFDLEtBQWIsQ0FBbUJaLEtBQUthLElBQXhCLElBQWdDLHNCQUFPYixLQUFLYyxRQUFaLEVBQXNCNUMsS0FBdEIsQ0FBaEM7QUFDRDtBQUNGO0FBbEJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CMUIsZUFBS2EsT0FBTCxDQUFhd0IsYUFBYixDQUEyQjFCLE9BQU8yQixNQUFQLENBQWMsSUFBSUMsS0FBSixDQUFVLG9CQUFWLEVBQWdDLEVBQUV2QyxZQUFGLEVBQWhDLENBQWQsQ0FBM0I7QUFDQSxlQUFLb0IsVUFBTCxHQUFrQixLQUFsQjtBQUNELE9BckJEO0FBc0JELEtBckZxQjtBQUFBO0FBQUEsQ0FBeEI7O0FBd0ZBeUIsT0FBT0MsT0FBUCxHQUFpQjFDLGVBQWpCIiwiZmlsZSI6ImNyZWF0ZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBtYXRjaEF0dHJpYnV0ZSBmcm9tICcuLi8uLi9jb3JlL21hdGNoLWF0dHJpYnV0ZSc7XG5pbXBvcnQgYmluZEF0dHJzVG9DU1NPTSBmcm9tICcuLi8uLi9kb20vZGlzdC9iaW5kLWF0dHJzLXRvLWNzc29tJztcblxuY29uc3QgZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyA9IGF0dHJpYnV0ZXMgPT4gcHJvcHMgPT5cbiAgYXR0cmlidXRlc1xuICAgIC5maWx0ZXIoYXR0cmlidXRlID0+IG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgcHJvcHNbYXR0cmlidXRlLm5hbWVdKSlcbiAgICAubWFwKGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY2xhc3NOYW1lKTtcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKHtcbiAgZGlzcGxheU5hbWUsXG4gIHNlbGVjdG9yLFxuICBjbGFzc05hbWUsXG4gIGF0dHJpYnV0ZXMsXG4gIGF0dHJzLFxuICBiYXNlID0gJ2RpdicsXG4gIGludmFsaWRQcm9wcyxcbn0pID0+IGNsYXNzIENTU0NvbXBvbmVudCB7XG4gIHN0YXRpYyBjcmVhdGUoaW5pdGlhbEF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDU1NDb21wb25lbnQoaW5pdGlhbEF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBpbnN0YW5jZS5lbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGdldEF0dHJpYnV0ZUNsYXNzTmFtZXMgPSBnZXRBdHRyaWJ1dGVDbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG4gIHN0YXRpYyBwcm9wS2V5cyA9IFtcbiAgICAuLi5hdHRyaWJ1dGVzLm1hcChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLm5hbWUpLFxuICAgIC4uLmF0dHJzLnJlZHVjZSgoYWNjLCBhdHRyKSA9PiBhY2MuY29uY2F0KGF0dHIuYXR0cmlidXRlcyksIFtdKSxcbiAgXTtcblxuICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiYXNlKTtcblxuICB3aWxsVXBkYXRlID0gZmFsc2U7XG5cbiAgYXR0cnMgPSBbXTtcblxuICBvYnNlcnZlKHByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHByb3BlcnRpZXMucmVkdWNlKChhY2MsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtwcm9wZXJ0eV06IHtcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmICghdGhpcy53aWxsVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWxsVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSwge30pXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5vYnNlcnZlKHRoaXMuY29uc3RydWN0b3IucHJvcEtleXMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgYmluZEF0dHJzVG9DU1NPTShhdHRycykudGhlbihib3VuZEF0dHJzID0+IHtcbiAgICAgIHRoaXMuYXR0cnMgPSBib3VuZEF0dHJzO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcnLCB7IHByb3BzIH0pO1xuICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgbmV3IEV2ZW50KCdjb21wb25lbnRXaWxsVXBkYXRlJywge1xuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBbY2xhc3NOYW1lXVxuICAgICAgICAuY29uY2F0KHRoaXMuY29uc3RydWN0b3IuZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyhwcm9wcykpXG4gICAgICAgIC5jb25jYXQodGhpcy5hdHRycy5tYXAoYXR0ciA9PiBhdHRyLmNsYXNzTmFtZSkpXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgdGhpcy5hdHRycykge1xuICAgICAgICBpZiAoYXR0ci5jc3NSdWxlKSB7XG4gICAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKG5ldyBFdmVudCgnY29tcG9uZW50RGlkVXBkYXRlJywgeyBwcm9wcyB9KSkpO1xuICAgICAgdGhpcy53aWxsVXBkYXRlID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvbmVudDtcbiJdfQ==