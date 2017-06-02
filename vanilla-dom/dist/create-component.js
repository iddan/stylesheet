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

  var className = _ref.className,
      attributes = _ref.attributes,
      attrs = _ref.attrs,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 'div' : _ref$base;
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
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CSSComponent);

      _initialiseProps.call(this);

      this.props = props;
      this.observe(this.constructor.propKeys);
      this.render();
    }

    return CSSComponent;
  }(), _class.getAttributeClassNames = getAttributeClassNames(attributes), _class.propKeys = [].concat(_toConsumableArray(attributes.map(function (attribute) {
    return attribute.name;
  })), _toConsumableArray(attrs.reduce(function (acc, attr) {
    return acc.concat(attr.attributes);
  }, []))), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.element = document.createElement(base);
    this.attrs = (0, _bindAttrsToCssom2.default)(attrs);
    this.willUpdate = false;

    this.render = function () {
      requestAnimationFrame(function () {
        var props = _this2.props;

        _this2.element.dispatchEvent(Object.assign(new Event('componentWillUpdate', {
          props: props
        })));
        _this2.element.className = [className].concat(_this2.constructor.getAttributeClassNames(props)).concat(_this2.attrs.map(function (attr) {
          return attr.className;
        })).join(' ');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this2.attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

        _this2.element.dispatchEvent(Object.assign(new Event('componentDidUpdate', { props: props })));
        _this2.willUpdate = false;
      });
    };
  }, _temp;
};

module.exports = createComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImdldEF0dHJpYnV0ZUNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiZmlsdGVyIiwiYXR0cmlidXRlIiwicHJvcHMiLCJuYW1lIiwibWFwIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tcG9uZW50IiwiYXR0cnMiLCJiYXNlIiwicHJvcGVydGllcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJlbGVtZW50IiwicmVkdWNlIiwiYWNjIiwicHJvcGVydHkiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsIndpbGxVcGRhdGUiLCJyZW5kZXIiLCJpbml0aWFsQXR0cmlidXRlcyIsImluc3RhbmNlIiwiQ1NTQ29tcG9uZW50Iiwib2JzZXJ2ZSIsImNvbnN0cnVjdG9yIiwicHJvcEtleXMiLCJhdHRyIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImFzc2lnbiIsIkV2ZW50Iiwiam9pbiIsImNzc1J1bGUiLCJzdHlsZSIsInByb3AiLCJ0ZW1wbGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsU0FBYztBQUFBLFdBQzNDQyxXQUNHQyxNQURILENBQ1U7QUFBQSxhQUFhLDhCQUFlQyxTQUFmLEVBQTBCQyxNQUFNRCxVQUFVRSxJQUFoQixDQUExQixDQUFiO0FBQUEsS0FEVixFQUVHQyxHQUZILENBRU87QUFBQSxhQUFhSCxVQUFVSSxTQUF2QjtBQUFBLEtBRlAsQ0FEMkM7QUFBQSxHQUFkO0FBQUEsQ0FBL0I7O0FBS0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBOztBQUFBLE1BQUdELFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWNOLFVBQWQsUUFBY0Es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akJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCMUIsZUFBS1UsT0FBTCxDQUFhb0IsYUFBYixDQUEyQnRCLE9BQU91QixNQUFQLENBQWMsSUFBSUMsS0FBSixDQUFVLG9CQUFWLEVBQWdDLEVBQUVoQyxZQUFGLEVBQWhDLENBQWQsQ0FBM0I7QUFDQSxlQUFLaUIsVUFBTCxHQUFrQixLQUFsQjtBQUNELE9BcEJEO0FBcUJELEtBekVxQjtBQUFBO0FBQUEsQ0FBeEI7O0FBNEVBcUIsT0FBT0MsT0FBUCxHQUFpQm5DLGVBQWpCIiwiZmlsZSI6ImNyZWF0ZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBtYXRjaEF0dHJpYnV0ZSBmcm9tICcuLi8uLi9jb3JlL21hdGNoLWF0dHJpYnV0ZSc7XG5pbXBvcnQgYmluZEF0dHJzVG9DU1NPTSBmcm9tICcuLi8uLi9kb20vZGlzdC9iaW5kLWF0dHJzLXRvLWNzc29tJztcblxuY29uc3QgZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyA9IGF0dHJpYnV0ZXMgPT4gcHJvcHMgPT5cbiAgYXR0cmlidXRlc1xuICAgIC5maWx0ZXIoYXR0cmlidXRlID0+IG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgcHJvcHNbYXR0cmlidXRlLm5hbWVdKSlcbiAgICAubWFwKGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY2xhc3NOYW1lKTtcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKHsgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBhdHRycywgYmFzZSA9ICdkaXYnIH0pID0+IGNsYXNzIENTU0NvbXBvbmVudCB7XG4gIHN0YXRpYyBjcmVhdGUoaW5pdGlhbEF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDU1NDb21wb25lbnQoaW5pdGlhbEF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBpbnN0YW5jZS5lbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGdldEF0dHJpYnV0ZUNsYXNzTmFtZXMgPSBnZXRBdHRyaWJ1dGVDbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG4gIHN0YXRpYyBwcm9wS2V5cyA9IFtcbiAgICAuLi5hdHRyaWJ1dGVzLm1hcChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLm5hbWUpLFxuICAgIC4uLmF0dHJzLnJlZHVjZSgoYWNjLCBhdHRyKSA9PiBhY2MuY29uY2F0KGF0dHIuYXR0cmlidXRlcyksIFtdKSxcbiAgXTtcblxuICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiYXNlKTtcblxuICBhdHRycyA9IGJpbmRBdHRyc1RvQ1NTT00oYXR0cnMpO1xuXG4gIHdpbGxVcGRhdGUgPSBmYWxzZTtcblxuICBvYnNlcnZlKHByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAoYWNjLCBwcm9wZXJ0eSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgW3Byb3BlcnR5XToge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLndpbGxVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbGxVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMub2JzZXJ2ZSh0aGlzLmNvbnN0cnVjdG9yLnByb3BLZXlzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgbmV3IEV2ZW50KCdjb21wb25lbnRXaWxsVXBkYXRlJywge1xuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBbY2xhc3NOYW1lXVxuICAgICAgICAuY29uY2F0KHRoaXMuY29uc3RydWN0b3IuZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyhwcm9wcykpXG4gICAgICAgIC5jb25jYXQodGhpcy5hdHRycy5tYXAoYXR0ciA9PiBhdHRyLmNsYXNzTmFtZSkpXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgdGhpcy5hdHRycykge1xuICAgICAgICBpZiAoYXR0ci5jc3NSdWxlKSB7XG4gICAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKG5ldyBFdmVudCgnY29tcG9uZW50RGlkVXBkYXRlJywgeyBwcm9wcyB9KSkpO1xuICAgICAgdGhpcy53aWxsVXBkYXRlID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvbmVudDtcbiJdfQ==