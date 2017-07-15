/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = matchAttribute;
/**
 * @param {Object} attribute A CSS attribute selector representation
 * @param {string} attribute.operator
 * @param {string} attribute.value
 * @param {boolean} attribute.insensitive
 * @param {string} value The element's attribute value
 */
function matchAttribute(attribute, value) {
  const { insensitive } = attribute;
  const attributeValue = insensitive ? attribute.value.toLowerCase() : attribute.value;
  const elementValue = insensitive ? value.toLowerCase() : value;
  switch (attribute.operator) {
    case '=': {
      return elementValue === attributeValue;
    }
    case '~=': {
      return whitespaceList(elementValue).includes(attributeValue);
    }
    case '|=': {
      return beforeDash(elementValue) === attributeValue;
    }
    case '^=': {
      return elementValue.startsWith(attributeValue);
    }
    case '$=': {
      return elementValue.endsWith(attributeValue);
    }
    case '*=': {
      return elementValue.includes(attributeValue);
    }
    default: {
      return Boolean(elementValue);
    }
  }
}

const beforeDash = string => string.split('-')[0];

const whitespaceList = string => string.split(/\s+/);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(2);


const randomInt = max => (Math.random() * max).toFixed(0);

const randomColor = () => `rgb(${ [randomInt(255), randomInt(255), randomInt(255)].join() })`;

const App = () => {
  const container = document.createElement('div');
  container.setAttribute('role', 'container');

  const ryskin = __WEBPACK_IMPORTED_MODULE_0__index_css__["a" /* Label */].create({
    fontSize: Math.random() * 100,
    highlighted: true,
    name: 'Ryskin',
    color: randomColor(),
  });

  ryskin.appendChild(document.createTextNode('Ryskinder, please click me!'));

  ryskin.addEventListener('click', () => {
    ryskin.fontSize = Math.random() * 100;
    ryskin.color = randomColor();
  });

  const theWhiteScreen = __WEBPACK_IMPORTED_MODULE_0__index_css__["a" /* Label */].create({
    name: 'The White Screen',
  });

  theWhiteScreen.appendChild(document.createTextNode('The White Screen'));

  container.appendChild(ryskin);
  container.appendChild(theWhiteScreen);

  return container;
};

document.querySelector('#root').appendChild(App());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_normal_loader_js_id_Bk4BUSPrb_bindings_vanilla_dom_index_css__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loader_normal_loader_js_id_Bk4BUSPrb_bindings_vanilla_dom_index_css__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_0_1_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_postcss_loader_lib_index_js_config_path_Users_iddan_stylesheet_loader_postcss_config_js_ctx_id_Bk4BUSPrb_index_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_0_1_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_postcss_loader_lib_index_js_config_path_Users_iddan_stylesheet_loader_postcss_config_js_ctx_id_Bk4BUSPrb_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_0_1_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_postcss_loader_lib_index_js_config_path_Users_iddan_stylesheet_loader_postcss_config_js_ctx_id_Bk4BUSPrb_index_css__);

  
  
  

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });

    var data = {"Label":{"className":"Label_Bk4BUSPrb","attributes":[{"name":"highlighted","className":"Label-highlighted__Bk4BUSPrb"},{"operator":"=","name":"name","value":"Ryskin","className":"Label-name_TjNxB_Bk4BUSPrb"}],"attrs":[{"prop":"background","selector":"body .Label_Bk4BUSPrb.Label-highlighted__Bk4BUSPrb","template":"linear-gradient(to top, yellow, { color = \"tomato\"})","attributes":["color"]},{"prop":"fontSize","selector":"body .Label_Bk4BUSPrb.Label-highlighted__Bk4BUSPrb","template":"calc({ fontSize }px + 12px)","attributes":["fontSize"]}],"base":"span"}};
    var createComponent = __webpack_require__(4);
    
  var Label = createComponent(Object.assign({}, data.Label, {
        displayName: "Label"
      }));
  

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(5);

var _matchAttribute = __webpack_require__(0);

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _bindAttrsToCssom = __webpack_require__(6);

var _bindAttrsToCssom2 = _interopRequireDefault(_bindAttrsToCssom);

var _generateClassName = __webpack_require__(8);

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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * @typedef {string} Template
 */

/**
 * @param {Template} template
 * @param {Object<string|number|bool>} values
 */
const format = (template, values) =>
  template.replace(
    /\{\s*(.+?)(?:\s*=\s*"(.+?)")?\s*\}/g,
    (match, name, defaultValue) => values[name] || defaultValue || ''
  );
/* harmony export (immutable) */ __webpack_exports__["format"] = format;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _onDomLoad = __webpack_require__(7);

var _onDomLoad2 = _interopRequireDefault(_onDomLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getFirstStyleSheet() {
  var _document$styleSheets = _slicedToArray(document.styleSheets, 1),
      firstStyleSheet = _document$styleSheets[0];

  if (firstStyleSheet) {
    return firstStyleSheet;
  } else {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    document.head.appendChild(styleElement);
    return styleElement.sheet;
  }
}

function insertCSSRule(selector, rule) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.styleSheets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cssStylesheet = _step.value;

      for (var i = 0; i < cssStylesheet.cssRules.length; i++) {
        var cssRule = cssStylesheet.cssRules[i];
        if (cssRule.selectorText && cssRule.selectorText.includes(selector)) {
          cssStylesheet.insertRule(rule, i + 1);
          return cssStylesheet.cssRules[i + 1];
        }
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

  throw new Error('A CSS rule used by a Stylesheet component was not found. Make sure you imported the source CSS correctly');
}

/**
 * @typedef {Attr} BoundAttr Attr bound to a CSSOM rule
 * @property {CSSRule} cssRule will be used to apply the result of the attr declaration
 * @property {string} className cssRule's class name
 */

/**
 * @param {Attr[]} attrs
 * @returns {BoundAttr[]}
 */
var bindAttrsToCSSOM = function bindAttrsToCSSOM(attrs) {
  var firstStyleSheet = getFirstStyleSheet();
  var boundAttrs = attrs.map(function (attr) {
    var className = 'a' + Math.random().toString(32).slice(6);
    var cssRuleIndex = firstStyleSheet.cssRules.length;
    firstStyleSheet.insertRule(attr.selector + '.' + className + ' {}', cssRuleIndex);
    var cssRule = firstStyleSheet.cssRules[cssRuleIndex];
    return _extends({}, attr, { className: className, cssRule: cssRule });
  });
  (0, _onDomLoad2.default)(function () {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = boundAttrs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var attr = _step2.value;

        var cssRuleIndex = [].concat(_toConsumableArray(firstStyleSheet.cssRules)).indexOf(attr.cssRule);
        firstStyleSheet.deleteRule(cssRuleIndex);
        attr.cssRule = insertCSSRule(attr.selector, attr.cssRule.cssText);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
  return boundAttrs;
};

exports.default = bindAttrsToCSSOM;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaW5kLWF0dHJzLXRvLWNzc29tLmpzIl0sIm5hbWVzIjpbImdldEZpcnN0U3R5bGVTaGVldCIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJmaXJzdFN0eWxlU2hlZXQiLCJzdHlsZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2hlZXQiLCJpbnNlcnRDU1NSdWxlIiwic2VsZWN0b3IiLCJydWxlIiwiY3NzU3R5bGVzaGVldCIsImkiLCJjc3NSdWxlcyIsImxlbmd0aCIsImNzc1J1bGUiLCJzZWxlY3RvclRleHQiLCJpbmNsdWRlcyIsImluc2VydFJ1bGUiLCJFcnJvciIsImJpbmRBdHRyc1RvQ1NTT00iLCJib3VuZEF0dHJzIiwiYXR0cnMiLCJtYXAiLCJjbGFzc05hbWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsImNzc1J1bGVJbmRleCIsImF0dHIiLCJpbmRleE9mIiwiZGVsZXRlUnVsZSIsImNzc1RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxTQUFTQSxrQkFBVCxHQUE4QjtBQUFBLDZDQUNGQyxTQUFTQyxXQURQO0FBQUEsTUFDckJDLGVBRHFCOztBQUU1QixNQUFJQSxlQUFKLEVBQXFCO0FBQ25CLFdBQU9BLGVBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNQyxlQUFlSCxTQUFTSSxhQUFULENBQXVCLE9BQXZCLENBQXJCO0FBQ0FELGlCQUFhRSxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLFVBQWxDO0FBQ0FMLGFBQVNNLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosWUFBMUI7QUFDQSxXQUFPQSxhQUFhSyxLQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3JDLHlCQUE0QlgsU0FBU0MsV0FBckMsOEhBQWtEO0FBQUEsVUFBdkNXLGFBQXVDOztBQUNoRCxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsY0FBY0UsUUFBZCxDQUF1QkMsTUFBM0MsRUFBbURGLEdBQW5ELEVBQXdEO0FBQ3RELFlBQU1HLFVBQVVKLGNBQWNFLFFBQWQsQ0FBdUJELENBQXZCLENBQWhCO0FBQ0EsWUFBSUcsUUFBUUMsWUFBUixJQUF3QkQsUUFBUUMsWUFBUixDQUFxQkMsUUFBckIsQ0FBOEJSLFFBQTlCLENBQTVCLEVBQXFFO0FBQ25FRSx3QkFBY08sVUFBZCxDQUF5QlIsSUFBekIsRUFBK0JFLElBQUksQ0FBbkM7QUFDQSxpQkFBT0QsY0FBY0UsUUFBZCxDQUF1QkQsSUFBSSxDQUEzQixDQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBVG9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXJDLFFBQU0sSUFBSU8sS0FBSixDQUNKLDBHQURJLENBQU47QUFHRDs7QUFFRDs7Ozs7O0FBTUE7Ozs7QUFJQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixRQUFTO0FBQ2hDLE1BQU1uQixrQkFBa0JILG9CQUF4QjtBQUNBLE1BQU11QixhQUFhQyxNQUFNQyxHQUFOLENBQVUsZ0JBQVE7QUFDbkMsUUFBTUMsWUFBWSxNQUFNQyxLQUFLQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLEtBQTNCLENBQWlDLENBQWpDLENBQXhCO0FBQ0EsUUFBTUMsZUFBZTVCLGdCQUFnQlksUUFBaEIsQ0FBeUJDLE1BQTlDO0FBQ0FiLG9CQUFnQmlCLFVBQWhCLENBQStCWSxLQUFLckIsUUFBcEMsU0FBa0RlLFNBQWxELFVBQW1FSyxZQUFuRTtBQUNBLFFBQU1kLFVBQVVkLGdCQUFnQlksUUFBaEIsQ0FBeUJnQixZQUF6QixDQUFoQjtBQUNBLHdCQUFZQyxJQUFaLElBQWtCTixvQkFBbEIsRUFBNkJULGdCQUE3QjtBQUNELEdBTmtCLENBQW5CO0FBT0EsMkJBQVUsWUFBTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNkLDRCQUFtQk0sVUFBbkIsbUlBQStCO0FBQUEsWUFBcEJTLElBQW9COztBQUM3QixZQUFNRCxlQUFlLDZCQUFJNUIsZ0JBQWdCWSxRQUFwQixHQUE4QmtCLE9BQTlCLENBQXNDRCxLQUFLZixPQUEzQyxDQUFyQjtBQUNBZCx3QkFBZ0IrQixVQUFoQixDQUEyQkgsWUFBM0I7QUFDQUMsYUFBS2YsT0FBTCxHQUFlUCxjQUFjc0IsS0FBS3JCLFFBQW5CLEVBQTZCcUIsS0FBS2YsT0FBTCxDQUFha0IsT0FBMUMsQ0FBZjtBQUNEO0FBTGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1mLEdBTkQ7QUFPQSxTQUFPWixVQUFQO0FBQ0QsQ0FqQkQ7O2tCQW1CZUQsZ0IiLCJmaWxlIjoiYmluZC1hdHRycy10by1jc3NvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbkRPTUxvYWQgZnJvbSAnLi9vbi1kb20tbG9hZCc7XG5cbmZ1bmN0aW9uIGdldEZpcnN0U3R5bGVTaGVldCgpIHtcbiAgY29uc3QgW2ZpcnN0U3R5bGVTaGVldF0gPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgaWYgKGZpcnN0U3R5bGVTaGVldCkge1xuICAgIHJldHVybiBmaXJzdFN0eWxlU2hlZXQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQuc2hlZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0Q1NTUnVsZShzZWxlY3RvciwgcnVsZSkge1xuICBmb3IgKGNvbnN0IGNzc1N0eWxlc2hlZXQgb2YgZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc1N0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNzc1J1bGUgPSBjc3NTdHlsZXNoZWV0LmNzc1J1bGVzW2ldO1xuICAgICAgaWYgKGNzc1J1bGUuc2VsZWN0b3JUZXh0ICYmIGNzc1J1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjc3NTdHlsZXNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaSArIDEpO1xuICAgICAgICByZXR1cm4gY3NzU3R5bGVzaGVldC5jc3NSdWxlc1tpICsgMV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnQSBDU1MgcnVsZSB1c2VkIGJ5IGEgU3R5bGVzaGVldCBjb21wb25lbnQgd2FzIG5vdCBmb3VuZC4gTWFrZSBzdXJlIHlvdSBpbXBvcnRlZCB0aGUgc291cmNlIENTUyBjb3JyZWN0bHknXG4gICk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge0F0dHJ9IEJvdW5kQXR0ciBBdHRyIGJvdW5kIHRvIGEgQ1NTT00gcnVsZVxuICogQHByb3BlcnR5IHtDU1NSdWxlfSBjc3NSdWxlIHdpbGwgYmUgdXNlZCB0byBhcHBseSB0aGUgcmVzdWx0IG9mIHRoZSBhdHRyIGRlY2xhcmF0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY2xhc3NOYW1lIGNzc1J1bGUncyBjbGFzcyBuYW1lXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0F0dHJbXX0gYXR0cnNcbiAqIEByZXR1cm5zIHtCb3VuZEF0dHJbXX1cbiAqL1xuY29uc3QgYmluZEF0dHJzVG9DU1NPTSA9IGF0dHJzID0+IHtcbiAgY29uc3QgZmlyc3RTdHlsZVNoZWV0ID0gZ2V0Rmlyc3RTdHlsZVNoZWV0KCk7XG4gIGNvbnN0IGJvdW5kQXR0cnMgPSBhdHRycy5tYXAoYXR0ciA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ2EnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoNik7XG4gICAgY29uc3QgY3NzUnVsZUluZGV4ID0gZmlyc3RTdHlsZVNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICBmaXJzdFN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgJHsgYXR0ci5zZWxlY3RvciB9LiR7IGNsYXNzTmFtZSB9IHt9YCwgY3NzUnVsZUluZGV4KTtcbiAgICBjb25zdCBjc3NSdWxlID0gZmlyc3RTdHlsZVNoZWV0LmNzc1J1bGVzW2Nzc1J1bGVJbmRleF07XG4gICAgcmV0dXJuIHsgLi4uYXR0ciwgY2xhc3NOYW1lLCBjc3NSdWxlIH07XG4gIH0pO1xuICBvbkRPTUxvYWQoKCkgPT4ge1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBib3VuZEF0dHJzKSB7XG4gICAgICBjb25zdCBjc3NSdWxlSW5kZXggPSBbLi4uZmlyc3RTdHlsZVNoZWV0LmNzc1J1bGVzXS5pbmRleE9mKGF0dHIuY3NzUnVsZSk7XG4gICAgICBmaXJzdFN0eWxlU2hlZXQuZGVsZXRlUnVsZShjc3NSdWxlSW5kZXgpO1xuICAgICAgYXR0ci5jc3NSdWxlID0gaW5zZXJ0Q1NTUnVsZShhdHRyLnNlbGVjdG9yLCBhdHRyLmNzc1J1bGUuY3NzVGV4dCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGJvdW5kQXR0cnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiaW5kQXR0cnNUb0NTU09NO1xuIl19

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onDOMLoad;
function onDOMLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    var handleDOMLoad = function handleDOMLoad() {
      removeEventListener('load', handleDOMLoad);
      callback();
    };
    addEventListener('load', handleDOMLoad);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vbi1kb20tbG9hZC5qcyJdLCJuYW1lcyI6WyJvbkRPTUxvYWQiLCJjYWxsYmFjayIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImhhbmRsZURPTUxvYWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxTO0FBQVQsU0FBU0EsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDMUMsTUFBSUMsU0FBU0MsVUFBVCxLQUF3QixVQUE1QixFQUF3QztBQUN0Q0Y7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJDLDBCQUFvQixNQUFwQixFQUE0QkQsYUFBNUI7QUFDQUg7QUFDRCxLQUhEO0FBSUFLLHFCQUFpQixNQUFqQixFQUF5QkYsYUFBekI7QUFDRDtBQUNGIiwiZmlsZSI6Im9uLWRvbS1sb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25ET01Mb2FkKGNhbGxiYWNrKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoYW5kbGVET01Mb2FkID0gKCkgPT4ge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZURPTUxvYWQpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVET01Mb2FkKTtcbiAgfVxufVxuIl19

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _matchAttribute = __webpack_require__(0);

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getClassName = function getClassName(_ref) {
  var className = _ref.className;
  return className;
};

var generateClassName = function generateClassName(_ref2) {
  var className = _ref2.className,
      _ref2$attributes = _ref2.attributes,
      attributes = _ref2$attributes === undefined ? [] : _ref2$attributes,
      _ref2$attrs = _ref2.attrs,
      attrs = _ref2$attrs === undefined ? [] : _ref2$attrs;
  return function (props) {
    return [className].concat(_toConsumableArray(attrs.map(getClassName)), _toConsumableArray(attributes.filter(function (attribute) {
      return (0, _matchAttribute2.default)(attribute, props[attribute.name]);
    }).map(getClassName))).join(' ');
  };
};

exports.default = generateClassName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmF0ZS1jbGFzcy1uYW1lLmpzIl0sIm5hbWVzIjpbImdldENsYXNzTmFtZSIsImNsYXNzTmFtZSIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiYXR0cmlidXRlcyIsImF0dHJzIiwibWFwIiwiZmlsdGVyIiwiYXR0cmlidXRlIiwicHJvcHMiLCJuYW1lIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FBbUJBLFNBQW5CO0FBQUEsQ0FBckI7O0FBRUEsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHRCxTQUFILFNBQUdBLFNBQUg7QUFBQSwrQkFBY0UsVUFBZDtBQUFBLE1BQWNBLFVBQWQsb0NBQTJCLEVBQTNCO0FBQUEsMEJBQStCQyxLQUEvQjtBQUFBLE1BQStCQSxLQUEvQiwrQkFBdUMsRUFBdkM7QUFBQSxTQUFnRDtBQUFBLFdBQ3hFLENBQ0VILFNBREYsNEJBRUtHLE1BQU1DLEdBQU4sQ0FBVUwsWUFBVixDQUZMLHNCQUdLRyxXQUNBRyxNQURBLENBQ087QUFBQSxhQUFhLDhCQUFlQyxTQUFmLEVBQTBCQyxNQUFNRCxVQUFVRSxJQUFoQixDQUExQixDQUFiO0FBQUEsS0FEUCxFQUVBSixHQUZBLENBRUlMLFlBRkosQ0FITCxHQU1FVSxJQU5GLENBTU8sR0FOUCxDQUR3RTtBQUFBLEdBQWhEO0FBQUEsQ0FBMUI7O2tCQVNlUixpQiIsImZpbGUiOiJnZW5lcmF0ZS1jbGFzcy1uYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoQXR0cmlidXRlIGZyb20gJy4uLy4uL2NvcmUvbWF0Y2gtYXR0cmlidXRlJztcblxuY29uc3QgZ2V0Q2xhc3NOYW1lID0gKHsgY2xhc3NOYW1lIH0pID0+IGNsYXNzTmFtZTtcblxuY29uc3QgZ2VuZXJhdGVDbGFzc05hbWUgPSAoeyBjbGFzc05hbWUsIGF0dHJpYnV0ZXMgPSBbXSwgYXR0cnMgPSBbXSB9KSA9PiBwcm9wcyA9PlxuICBbXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLmF0dHJzLm1hcChnZXRDbGFzc05hbWUpLFxuICAgIC4uLmF0dHJpYnV0ZXNcbiAgICAgIC5maWx0ZXIoYXR0cmlidXRlID0+IG1hdGNoQXR0cmlidXRlKGF0dHJpYnV0ZSwgcHJvcHNbYXR0cmlidXRlLm5hbWVdKSlcbiAgICAgIC5tYXAoZ2V0Q2xhc3NOYW1lKSxcbiAgXS5qb2luKCcgJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ2xhc3NOYW1lO1xuIl19

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);