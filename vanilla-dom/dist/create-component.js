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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImdldEF0dHJpYnV0ZUNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiZmlsdGVyIiwiYXR0cmlidXRlIiwicHJvcHMiLCJuYW1lIiwibWFwIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJzZWxlY3RvciIsImF0dHJzIiwiYmFzZSIsImludmFsaWRQcm9wcyIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZWxlbWVudCIsInJlZHVjZSIsImFjYyIsInByb3BlcnR5IiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJ3aWxsVXBkYXRlIiwicmVuZGVyIiwiaW5pdGlhbEF0dHJpYnV0ZXMiLCJpbnN0YW5jZSIsIkNTU0NvbXBvbmVudCIsIm9ic2VydmUiLCJjb25zdHJ1Y3RvciIsInByb3BLZXlzIiwidGhlbiIsImJvdW5kQXR0cnMiLCJhdHRyIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImFzc2lnbiIsIkV2ZW50Iiwiam9pbiIsImNzc1J1bGUiLCJzdHlsZSIsInByb3AiLCJ0ZW1wbGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsU0FBYztBQUFBLFdBQzNDQyxXQUNHQyxNQURILENBQ1U7QUFBQSxhQUFhLDhCQUFlQyxTQUFmLEVBQTBCQyxNQUFNRCxVQUFVRSxJQUFoQixDQUExQixDQUFiO0FBQUEsS0FEVixFQUVHQyxHQUZILENBRU87QUFBQSxhQUFhSCxVQUFVSSxTQUF2QjtBQUFBLEtBRlAsQ0FEMkM7QUFBQSxHQUFkO0FBQUEsQ0FBL0I7O0FBS0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxl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QUFBLGlCQUFRNEIsS0FBSzNCLFNBQWI7QUFBQSxTQUFmLENBRmUsRUFHdEJtQyxJQUhzQixDQUdqQixHQUhpQixDQUF6QjtBQVQwQjtBQUFBO0FBQUE7O0FBQUE7QUFhMUIsK0JBQW1CLE9BQUsvQixLQUF4Qiw4SEFBK0I7QUFBQSxnQkFBcEJ1QixJQUFvQjs7QUFDN0IsZ0JBQUlBLEtBQUtTLE9BQVQsRUFBa0I7QUFDaEJULG1CQUFLUyxPQUFMLENBQWFDLEtBQWIsQ0FBbUJWLEtBQUtXLElBQXhCLElBQWdDLHNCQUFPWCxLQUFLWSxRQUFaLEVBQXNCMUMsS0FBdEIsQ0FBaEM7QUFDRDtBQUNGO0FBakJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCMUIsZUFBS2EsT0FBTCxDQUFhc0IsYUFBYixDQUEyQnhCLE9BQU95QixNQUFQLENBQWMsSUFBSUMsS0FBSixDQUFVLG9CQUFWLEVBQWdDLEVBQUVyQyxZQUFGLEVBQWhDLENBQWQsQ0FBM0I7QUFDQSxlQUFLb0IsVUFBTCxHQUFrQixLQUFsQjtBQUNELE9BcEJEO0FBcUJELEtBcEZxQjtBQUFBO0FBQUEsQ0FBeEI7O0FBdUZBdUIsT0FBT0MsT0FBUCxHQUFpQnhDLGVBQWpCIiwiZmlsZSI6ImNyZWF0ZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBtYXRjaEF0dHJpYnV0ZSBmcm9tICcuLi8uLi9jb3JlL21hdGNoLWF0dHJpYnV0ZSc7XG5pbXBvcnQgYmluZEF0dHJzVG9DU1NPTSBmcm9tICcuLi8uLi9kb20vZGlzdC9iaW5kLWF0dHJzLXRvLWNzc29tJztcblxuY29uc3QgZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyA9IGF0dHJpYnV0ZXMgPT4gcHJvcHMgPT5cbiAgYXR0cmlidXRlc1xuICAgIC5maWx0ZXIoYXR0cmlidXRlID0+IG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgcHJvcHNbYXR0cmlidXRlLm5hbWVdKSlcbiAgICAubWFwKGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY2xhc3NOYW1lKTtcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKHtcbiAgZGlzcGxheU5hbWUsXG4gIHNlbGVjdG9yLFxuICBjbGFzc05hbWUsXG4gIGF0dHJpYnV0ZXMsXG4gIGF0dHJzLFxuICBiYXNlID0gJ2RpdicsXG4gIGludmFsaWRQcm9wcyxcbn0pID0+IGNsYXNzIENTU0NvbXBvbmVudCB7XG4gIHN0YXRpYyBjcmVhdGUoaW5pdGlhbEF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDU1NDb21wb25lbnQoaW5pdGlhbEF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBpbnN0YW5jZS5lbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGdldEF0dHJpYnV0ZUNsYXNzTmFtZXMgPSBnZXRBdHRyaWJ1dGVDbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG4gIHN0YXRpYyBwcm9wS2V5cyA9IFtcbiAgICAuLi5hdHRyaWJ1dGVzLm1hcChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLm5hbWUpLFxuICAgIC4uLmF0dHJzLnJlZHVjZSgoYWNjLCBhdHRyKSA9PiBhY2MuY29uY2F0KGF0dHIuYXR0cmlidXRlcyksIFtdKSxcbiAgXTtcblxuICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiYXNlKTtcblxuICB3aWxsVXBkYXRlID0gZmFsc2U7XG5cbiAgYXR0cnMgPSBbXTtcblxuICBvYnNlcnZlKHByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHByb3BlcnRpZXMucmVkdWNlKChhY2MsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtwcm9wZXJ0eV06IHtcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmICghdGhpcy53aWxsVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWxsVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSwge30pXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5vYnNlcnZlKHRoaXMuY29uc3RydWN0b3IucHJvcEtleXMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgYmluZEF0dHJzVG9DU1NPTShhdHRycykudGhlbihib3VuZEF0dHJzID0+IHtcbiAgICAgIHRoaXMuYXR0cnMgPSBib3VuZEF0dHJzO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIG5ldyBFdmVudCgnY29tcG9uZW50V2lsbFVwZGF0ZScsIHtcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gW2NsYXNzTmFtZV1cbiAgICAgICAgLmNvbmNhdCh0aGlzLmNvbnN0cnVjdG9yLmdldEF0dHJpYnV0ZUNsYXNzTmFtZXMocHJvcHMpKVxuICAgICAgICAuY29uY2F0KHRoaXMuYXR0cnMubWFwKGF0dHIgPT4gYXR0ci5jbGFzc05hbWUpKVxuICAgICAgICAuam9pbignICcpO1xuICAgICAgZm9yIChjb25zdCBhdHRyIG9mIHRoaXMuYXR0cnMpIHtcbiAgICAgICAgaWYgKGF0dHIuY3NzUnVsZSkge1xuICAgICAgICAgIGF0dHIuY3NzUnVsZS5zdHlsZVthdHRyLnByb3BdID0gZm9ybWF0KGF0dHIudGVtcGxhdGUsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihuZXcgRXZlbnQoJ2NvbXBvbmVudERpZFVwZGF0ZScsIHsgcHJvcHMgfSkpKTtcbiAgICAgIHRoaXMud2lsbFVwZGF0ZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb21wb25lbnQ7XG4iXX0=