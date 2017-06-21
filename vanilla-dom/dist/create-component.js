'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('../../core/template');

var _matchAttribute = require('../../core/match-attribute');

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _bindAttrsToCssom = require('../../dom/dist/bind-attrs-to-cssom');

var _bindAttrsToCssom2 = _interopRequireDefault(_bindAttrsToCssom);

var _generateClassName = require('../../dom/dist/generate-class-name');

var _generateClassName2 = _interopRequireDefault(_generateClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var CSSComponent = function () {
  function CSSComponent(element, attrs) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, CSSComponent);

    this.willUpdate = false;

    this.element = element;
    this.attrs = attrs;
    this.props = props;
  }

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
            _this.update(_extends({}, _this.props, _defineProperty({}, property, value)));
            return value;
          }
        }));
      }, {}));
    }
  }, {
    key: 'update',
    value: function update(nextProps) {
      var _this2 = this;

      var prevProps = this.props;
      this.props = nextProps;
      if (!this.willUpdate) {
        this.willUpdate = true;
        setTimeout(function () {
          _this2.element.dispatchEvent(Object.assign(new Event('willUpdateStyle'), {
            props: prevProps,
            nextProps: _this2.props
          }));
          _this2.willUpdate = false;
          requestAnimationFrame(function () {
            _this2.render();
            _this2.element.dispatchEvent(Object.assign(new Event('didUpdateStyle'), { prevProps: prevProps, props: _this2.props }));
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      this.element.className = this.className;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.attrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
    }
  }]);

  return CSSComponent;
}();

var createComponent = function createComponent(_ref) {
  var _class, _temp;

  var className = _ref.className,
      attributes = _ref.attributes,
      attrs = _ref.attrs,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 'div' : _ref$base;
  return _temp = _class = function (_CSSComponent) {
    _inherits(_class, _CSSComponent);

    _createClass(_class, null, [{
      key: 'create',
      value: function create(initialAttributes) {
        var instance = new this(initialAttributes);
        return instance.element;
      }
    }]);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this3 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, document.createElement(base), (0, _bindAttrsToCssom2.default)(attrs), props));

      _this3.generateClassName = (0, _generateClassName2.default)({ className: className, attributes: attributes, attrs: _this3.attrs });

      _this3.observe(_this3.constructor.propKeys);
      _this3.render();
      return _this3;
    }

    _createClass(_class, [{
      key: 'className',
      get: function get() {
        return this.generateClassName(this.props);
      }
    }]);

    return _class;
  }(CSSComponent), _class.getAttributeClassNames = getAttributeClassNames(attributes), _class.propKeys = [].concat(_toConsumableArray(attributes.map(function (attribute) {
    return attribute.name;
  })), _toConsumableArray(attrs.reduce(function (acc, attr) {
    return acc.concat(attr.attributes);
  }, []))), _class.className = className, _class.attributes = attributes, _class.attrs = attrs, _class.base = base, _temp;
};

module.exports = createComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImdldEF0dHJpYnV0ZUNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiZmlsdGVyIiwiYXR0cmlidXRlIiwicHJvcHMiLCJuYW1lIiwibWFwIiwiY2xhc3NOYW1lIiwiQ1NTQ29tcG9uZW50IiwiZWxlbWVudCIsImF0dHJzIiwid2lsbFVwZGF0ZSIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVkdWNlIiwiYWNjIiwicHJvcGVydHkiLCJnZXQiLCJzZXQiLCJ1cGRhdGUiLCJ2YWx1ZSIsIm5leHRQcm9wcyIsInByZXZQcm9wcyIsInNldFRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiYXNzaWduIiwiRXZlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJhdHRyIiwiY3NzUnVsZSIsInN0eWxlIiwicHJvcCIsInRlbXBsYXRlIiwiY3JlYXRlQ29tcG9uZW50IiwiYmFzZSIsImluaXRpYWxBdHRyaWJ1dGVzIiwiaW5zdGFuY2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsIm9ic2VydmUiLCJjb25zdHJ1Y3RvciIsInByb3BLZXlzIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEseUJBQXlCLFNBQXpCQSxzQkFBeUI7QUFBQSxTQUFjO0FBQUEsV0FDM0NDLFdBQ0dDLE1BREgsQ0FDVTtBQUFBLGFBQWEsOEJBQWVDLFNBQWYsRUFBMEJDLE1BQU1ELFVBQVVFLElBQWhCLENBQTFCLENBQWI7QUFBQSxLQURWLEVBRUdDLEdBRkgsQ0FFTztBQUFBLGFBQWFILFVBQVVJLFNBQXZCO0FBQUEsS0FGUCxDQUQyQztBQUFBLEdBQWQ7QUFBQSxDQUEvQjs7SUFLTUMsWTtBQUdKLHdC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LEVBQ21CLGdDQUFpQjFCLEtBQWpCLENBRG5CLEVBQzRDTixLQUQ1Qzs7QUFBQSxhQU1uQnFDLGlCQU5tQixHQU1DLGlDQUFrQixFQUFFbEMsb0JBQUYsRUFBYU4sc0JBQWIsRUFBeUJTLE9BQU8sT0FBS0EsS0FBckMsRUFBbEIsQ0FORDs7QUFFakIsYUFBS2dDLE9BQUwsQ0FBYSxPQUFLQyxXQUFMLENBQWlCQyxRQUE5QjtBQUNBLGFBQUtmLE1BQUw7QUFIaUI7QUFJbEI7O0FBdkJtQjtBQUFBO0FBQUEsMEJBMkJKO0FBQ2QsZUFBTyxLQUFLWSxpQkFBTCxDQUF1QixLQUFLckMsS0FBNUIsQ0FBUDtBQUNEO0FBN0JtQjs7QUFBQTtBQUFBLElBQ2RJLFlBRGMsVUFFYlIsc0JBRmEsR0FFWUEsdUJBQXVCQyxVQUF2QixDQUZaLFNBU2IyQyxRQVRhLGdDQVVmM0MsV0FBV0ssR0FBWCxDQUFlO0FBQUEsV0FBYUgsVUFBVUUsSUFBdkI7QUFBQSxHQUFmLENBVmUsc0JBV2ZLLE1BQU1LLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1jLElBQU47QUFBQSxXQUFlZCxJQUFJNkIsTUFBSixDQUFXZixLQUFLN0IsVUFBaEIsQ0FBZjtBQUFBLEdBQWIsRUFBeUQsRUFBekQsQ0FYZSxXQWNiTSxTQWRhLEdBY0RBLFNBZEMsU0FlYk4sVUFmYSxHQWVBQSxVQWZBLFNBZ0JiUyxLQWhCYSxHQWdCTEEsS0FoQkssU0FpQmIwQixJQWpCYSxHQWlCTkEsSUFqQk07QUFBQSxDQUF4Qjs7QUFnQ0FVLE9BQU9DLE9BQVAsR0FBaUJaLGVBQWpCIiwiZmlsZSI6ImNyZWF0ZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL3RlbXBsYXRlJztcbmltcG9ydCBtYXRjaEF0dHJpYnV0ZSBmcm9tICcuLi8uLi9jb3JlL21hdGNoLWF0dHJpYnV0ZSc7XG5pbXBvcnQgYmluZEF0dHJzVG9DU1NPTSBmcm9tICcuLi8uLi9kb20vZGlzdC9iaW5kLWF0dHJzLXRvLWNzc29tJztcbmltcG9ydCBnZW5lcmF0ZUNsYXNzTmFtZSBmcm9tICcuLi8uLi9kb20vZGlzdC9nZW5lcmF0ZS1jbGFzcy1uYW1lJztcblxuY29uc3QgZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyA9IGF0dHJpYnV0ZXMgPT4gcHJvcHMgPT5cbiAgYXR0cmlidXRlc1xuICAgIC5maWx0ZXIoYXR0cmlidXRlID0+IG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgcHJvcHNbYXR0cmlidXRlLm5hbWVdKSlcbiAgICAubWFwKGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY2xhc3NOYW1lKTtcblxuY2xhc3MgQ1NTQ29tcG9uZW50IHtcbiAgd2lsbFVwZGF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGF0dHJzLCBwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmF0dHJzID0gYXR0cnM7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB9XG5cbiAgb2JzZXJ2ZShwcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICBwcm9wZXJ0aWVzLnJlZHVjZShcbiAgICAgICAgKGFjYywgcHJvcGVydHkpID0+ICh7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtwcm9wZXJ0eV06IHtcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlKHsgLi4udGhpcy5wcm9wcywgW3Byb3BlcnR5XTogdmFsdWUgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgaWYgKCF0aGlzLndpbGxVcGRhdGUpIHtcbiAgICAgIHRoaXMud2lsbFVwZGF0ZSA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXcgRXZlbnQoJ3dpbGxVcGRhdGVTdHlsZScpLCB7XG4gICAgICAgICAgICBwcm9wczogcHJldlByb3BzLFxuICAgICAgICAgICAgbmV4dFByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMud2lsbFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG5ldyBFdmVudCgnZGlkVXBkYXRlU3R5bGUnKSwgeyBwcmV2UHJvcHMsIHByb3BzOiB0aGlzLnByb3BzIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIHRoaXMuYXR0cnMpIHtcbiAgICAgIGlmIChhdHRyLmNzc1J1bGUpIHtcbiAgICAgICAgYXR0ci5jc3NSdWxlLnN0eWxlW2F0dHIucHJvcF0gPSBmb3JtYXQoYXR0ci50ZW1wbGF0ZSwgcHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDb21wb25lbnQgPSAoeyBjbGFzc05hbWUsIGF0dHJpYnV0ZXMsIGF0dHJzLCBiYXNlID0gJ2RpdicgfSkgPT4gY2xhc3NcbiAgZXh0ZW5kcyBDU1NDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRBdHRyaWJ1dGVDbGFzc05hbWVzID0gZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuICAgIHN0YXRpYyBjcmVhdGUoaW5pdGlhbEF0dHJpYnV0ZXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoaW5pdGlhbEF0dHJpYnV0ZXMpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BLZXlzID0gW1xuICAgICAgLi4uYXR0cmlidXRlcy5tYXAoYXR0cmlidXRlID0+IGF0dHJpYnV0ZS5uYW1lKSxcbiAgICAgIC4uLmF0dHJzLnJlZHVjZSgoYWNjLCBhdHRyKSA9PiBhY2MuY29uY2F0KGF0dHIuYXR0cmlidXRlcyksIFtdKSxcbiAgICBdO1xuXG4gICAgc3RhdGljIGNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBzdGF0aWMgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgc3RhdGljIGF0dHJzID0gYXR0cnM7XG4gICAgc3RhdGljIGJhc2UgPSBiYXNlO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYmFzZSksIGJpbmRBdHRyc1RvQ1NTT00oYXR0cnMpLCBwcm9wcyk7XG4gICAgICB0aGlzLm9ic2VydmUodGhpcy5jb25zdHJ1Y3Rvci5wcm9wS2V5cyk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoeyBjbGFzc05hbWUsIGF0dHJpYnV0ZXMsIGF0dHJzOiB0aGlzLmF0dHJzIH0pO1xuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlQ2xhc3NOYW1lKHRoaXMucHJvcHMpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29tcG9uZW50O1xuIl19