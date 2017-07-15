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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Stylesheet = {
  instances: [],
  register: function register(instance) {
    this.instances.push(instance);
  },
  unregister: function unregister(instance) {
    this.instances.splice(this.instances.indexOf(instance), 1);
  },
  handleAccept: function handleAccept() {
    var _this = this;

    setTimeout(function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.instances[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var instance = _step.value;

          instance.init();
          instance.forceUpdate();
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
    }, 1);
  }
};

exports.default = Stylesheet;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylesheet_react_dom_hot__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylesheet_react_dom_hot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stylesheet_react_dom_hot__);





if (false) {
  module.hot.accept('./App', Stylesheet.handleAccept);
}

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]), document.querySelector('#root'));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




console.log(__WEBPACK_IMPORTED_MODULE_1__index_css__["a" /* Label */]);

class Counter extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = { count: 0 }, this.handleClick = () => {
      this.setState(state => _extends({}, state, { count: state.count + 1 }));
    }, _temp;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { onClick: this.handleClick },
      this.state.count
    );
  }
}

class App extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(...args) {
    var _temp2;

    return _temp2 = super(...args), this.state = {}, this.handleClick = () => {
      this.setState({
        color: `rgb(${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)})`,
        fontSize: Math.random() * 100
      });
    }, _temp2;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__index_css__["a" /* Label */],
        { color: this.state.color, fontSize: this.state.fontSize, onClick: this.handleClick, highlighted: true },
        'Click Me'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__index_css__["a" /* Label */],
        { name: 'The White Screen' },
        'The White Screen'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__index_css__["a" /* Label */],
        null,
        'Just a label bro'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Counter, null)
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_normal_loader_js_id_ryd7NBwBZ_bindings_react_dom_index_css__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loader_normal_loader_js_id_ryd7NBwBZ_bindings_react_dom_index_css__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_1_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_postcss_loader_lib_index_js_config_path_Users_iddan_stylesheet_loader_postcss_config_js_ctx_id_ryd7NBwBZ_index_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_1_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_postcss_loader_lib_index_js_config_path_Users_iddan_stylesheet_loader_postcss_config_js_ctx_id_ryd7NBwBZ_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_extract_text_webpack_plugin_dist_loader_js_ref_1_1_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_postcss_loader_lib_index_js_config_path_Users_iddan_stylesheet_loader_postcss_config_js_ctx_id_ryd7NBwBZ_index_css__);

  
  
  

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });

    var data = {"Label":{"className":"Label_ryd7NBwBZ","attributes":[{"name":"highlighted","className":"Label-highlighted__ryd7NBwBZ"},{"operator":"=","name":"name","value":"Ryskin","className":"Label-name_TjNxB_ryd7NBwBZ"}],"attrs":[{"prop":"background","selector":"body .Label_ryd7NBwBZ.Label-highlighted__ryd7NBwBZ","template":"linear-gradient(to top, yellow, { color = \"tomato\"})","attributes":["color"]},{"prop":"fontSize","selector":"body .Label_ryd7NBwBZ.Label-highlighted__ryd7NBwBZ","template":"calc({ fontSize }px + 12px)","attributes":["fontSize"]}],"base":"span","invalidProps":{"highlighted":true,"name":false,"color":false,"fontSize":false}}};
    var createComponent = __webpack_require__(7);
    
  var Label = createComponent(Object.assign({}, data.Label, {
        displayName: "Label"
      }));
  

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _template = __webpack_require__(8);

var _bindAttrsToCssom = __webpack_require__(9);

var _bindAttrsToCssom2 = _interopRequireDefault(_bindAttrsToCssom);

var _generateClassName = __webpack_require__(11);

var _generateClassName2 = _interopRequireDefault(_generateClassName);

var _hot = __webpack_require__(1);

var _hot2 = _interopRequireDefault(_hot);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @typedef {string} Template
 */

/**
 * @param {Template} template
 * @param {Object<string|number|bool>} values
 */
var format = exports.format = function format(template, values) {
  return template.replace(/\{\s*(.+?)(?:\s*=\s*"(.+?)")?\s*\}/g, function (match, name, defaultValue) {
    return values[name] || defaultValue || '';
  });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _onDomLoad = __webpack_require__(10);

var _onDomLoad2 = _interopRequireDefault(_onDomLoad);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

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

/***/ }),
/* 10 */
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _matchAttribute = __webpack_require__(12);

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchAttribute;
/**
 * @param {Object} attribute A CSS attribute selector representation
 * @param {string} attribute.operator
 * @param {string} attribute.value
 * @param {boolean} attribute.insensitive
 * @param {string} value The element's attribute value
 */
function matchAttribute(attribute, value) {
  var insensitive = attribute.insensitive;

  var attributeValue = insensitive ? attribute.value.toLowerCase() : attribute.value;
  var elementValue = insensitive ? value.toLowerCase() : value;
  switch (attribute.operator) {
    case '=':
      {
        return elementValue === attributeValue;
      }
    case '~=':
      {
        return whitespaceList(elementValue).includes(attributeValue);
      }
    case '|=':
      {
        return beforeDash(elementValue) === attributeValue;
      }
    case '^=':
      {
        return elementValue.startsWith(attributeValue);
      }
    case '$=':
      {
        return elementValue.endsWith(attributeValue);
      }
    case '*=':
      {
        return elementValue.includes(attributeValue);
      }
    default:
      {
        return Boolean(elementValue);
      }
  }
}

var beforeDash = function beforeDash(string) {
  return string.split('-')[0];
};

var whitespaceList = function whitespaceList(string) {
  return string.split(/\s+/);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var omitBy = exports.omitBy = function omitBy(object, filter) {
  var newObj = {};
  for (var key in object) {
    var value = object[key];
    if (!filter(value, key)) {
      newObj[key] = value;
    }
  }
  return newObj;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);