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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * @param {Object[]} objects array of plain objects
 */
const deepMerge = (...objects) => objects.reduce(
  (acc, object) => {
    if (!acc || typeof object !== 'object') {
      return object;
    }
    if (!Array.isArray(acc) && Array.isArray(object)) {
      return object;
    }
    if (Array.isArray(acc) && Array.isArray(object)) {
      return [...acc, ...object];
    }
    return Object.keys(object).reduce(
      (acc2, key) => Object.assign({}, acc2, { [key]: deepMerge(acc2[key], object[key]) }),
      acc || {}
    );
  },
  {}
);

module.exports = deepMerge;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(5);

var _matchAttribute = __webpack_require__(4);

var _matchAttribute2 = _interopRequireDefault(_matchAttribute);

var _bindAttrsToCssom = __webpack_require__(6);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../loader/index.js??ref--0-1!./index.css", function() {
			var newContent = require("!!../../../loader/index.js??ref--0-1!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = matchAttribute;
/**
 * @param {Object} attribute A CSS attribute selector presenation
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const format = (template, values) =>
  template.replace(
    /\{\s*(.+?)(?:\s*=\s*"(.+?)")?\s*\}/g,
    (match, name, defaultValue) => values[name] || defaultValue
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

var _domLoad = __webpack_require__(7);

var _domLoad2 = _interopRequireDefault(_domLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCSSRule = function getCSSRule(attr, className) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.styleSheets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cssStylesheet = _step.value;

      for (var i = 0; i < cssStylesheet.cssRules.length; i++) {
        var rule = cssStylesheet.cssRules[i];
        if (rule.selectorText && rule.selectorText.includes(attr.selector)) {
          cssStylesheet.insertRule('.' + className + ' {}', i + 1);
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

  throw new Error('The CSS rule of ' + attr.template + ' was not found. Make sure you imported the source CSS correctly');
};

var bindAttrsToCSSOM = function bindAttrsToCSSOM(attrs) {
  return _domLoad2.default.then(function () {
    return attrs.map(function (attr) {
      var className = 'a' + Math.random().toString(32).slice(6);
      var cssRule = getCSSRule(attr, className);
      return _extends({}, attr, { className: className, cssRule: cssRule });
    });
  });
};

exports.default = bindAttrsToCSSOM;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaW5kLWF0dHJzLXRvLWNzc29tLmpzIl0sIm5hbWVzIjpbImdldENTU1J1bGUiLCJhdHRyIiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsImNzc1N0eWxlc2hlZXQiLCJpIiwiY3NzUnVsZXMiLCJsZW5ndGgiLCJydWxlIiwic2VsZWN0b3JUZXh0IiwiaW5jbHVkZXMiLCJzZWxlY3RvciIsImluc2VydFJ1bGUiLCJFcnJvciIsInRlbXBsYXRlIiwiYmluZEF0dHJzVG9DU1NPTSIsInRoZW4iLCJhdHRycyIsIm1hcCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiY3NzUnVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN0Qyx5QkFBNEJDLFNBQVNDLFdBQXJDLDhIQUFrRDtBQUFBLFVBQXZDQyxhQUF1Qzs7QUFDaEQsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELGNBQWNFLFFBQWQsQ0FBdUJDLE1BQTNDLEVBQW1ERixHQUFuRCxFQUF3RDtBQUN0RCxZQUFNRyxPQUFPSixjQUFjRSxRQUFkLENBQXVCRCxDQUF2QixDQUFiO0FBQ0EsWUFBSUcsS0FBS0MsWUFBTCxJQUFxQkQsS0FBS0MsWUFBTCxDQUFrQkMsUUFBbEIsQ0FBMkJWLEtBQUtXLFFBQWhDLENBQXpCLEVBQW9FO0FBQ2xFUCx3QkFBY1EsVUFBZCxPQUE4QlgsU0FBOUIsVUFBK0NJLElBQUksQ0FBbkQ7QUFDQSxpQkFBT0QsY0FBY0UsUUFBZCxDQUF1QkQsSUFBSSxDQUEzQixDQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBVHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXRDLFFBQU0sSUFBSVEsS0FBSixzQkFDZ0JiLEtBQUtjLFFBRHJCLHFFQUFOO0FBR0QsQ0FiRDs7QUFlQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLFNBQ3ZCLGtCQUFRQyxJQUFSLENBQWE7QUFBQSxXQUNYQyxNQUFNQyxHQUFOLENBQVUsZ0JBQVE7QUFDaEIsVUFBTWpCLFlBQVksTUFBTWtCLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBeEI7QUFDQSxVQUFNQyxVQUFVeEIsV0FBV0MsSUFBWCxFQUFpQkMsU0FBakIsQ0FBaEI7QUFDQSwwQkFBWUQsSUFBWixJQUFrQkMsb0JBQWxCLEVBQTZCc0IsZ0JBQTdCO0FBQ0QsS0FKRCxDQURXO0FBQUEsR0FBYixDQUR1QjtBQUFBLENBQXpCOztrQkFTZVIsZ0IiLCJmaWxlIjoiYmluZC1hdHRycy10by1jc3NvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01Mb2FkIGZyb20gJy4vZG9tLWxvYWQnO1xuXG5jb25zdCBnZXRDU1NSdWxlID0gKGF0dHIsIGNsYXNzTmFtZSkgPT4ge1xuICBmb3IgKGNvbnN0IGNzc1N0eWxlc2hlZXQgb2YgZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc1N0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSBjc3NTdHlsZXNoZWV0LmNzc1J1bGVzW2ldO1xuICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JUZXh0ICYmIHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKGF0dHIuc2VsZWN0b3IpKSB7XG4gICAgICAgIGNzc1N0eWxlc2hlZXQuaW5zZXJ0UnVsZShgLiR7IGNsYXNzTmFtZSB9IHt9YCwgaSArIDEpO1xuICAgICAgICByZXR1cm4gY3NzU3R5bGVzaGVldC5jc3NSdWxlc1tpICsgMV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVGhlIENTUyBydWxlIG9mICR7IGF0dHIudGVtcGxhdGUgfSB3YXMgbm90IGZvdW5kLiBNYWtlIHN1cmUgeW91IGltcG9ydGVkIHRoZSBzb3VyY2UgQ1NTIGNvcnJlY3RseWBcbiAgKTtcbn07XG5cbmNvbnN0IGJpbmRBdHRyc1RvQ1NTT00gPSBhdHRycyA9PlxuICBET01Mb2FkLnRoZW4oKCkgPT5cbiAgICBhdHRycy5tYXAoYXR0ciA9PiB7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSAnYScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSg2KTtcbiAgICAgIGNvbnN0IGNzc1J1bGUgPSBnZXRDU1NSdWxlKGF0dHIsIGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4geyAuLi5hdHRyLCBjbGFzc05hbWUsIGNzc1J1bGUgfTtcbiAgICB9KVxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBiaW5kQXR0cnNUb0NTU09NO1xuIl19

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOMLoad = new Promise(function (resolve) {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    var onDOMLoad = function onDOMLoad() {
      removeEventListener('load', onDOMLoad);
      resolve();
    };
    addEventListener('load', onDOMLoad);
  }
});

exports.default = DOMLoad;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb20tbG9hZC5qcyJdLCJuYW1lcyI6WyJET01Mb2FkIiwiUHJvbWlzZSIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsInJlc29sdmUiLCJvbkRPTUxvYWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxVQUFVLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUNyQyxNQUFJQyxTQUFTQyxVQUFULEtBQXdCLFVBQTVCLEVBQXdDO0FBQ3RDQztBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1DLFlBQVksU0FBWkEsU0FBWSxHQUFNO0FBQ3RCQywwQkFBb0IsTUFBcEIsRUFBNEJELFNBQTVCO0FBQ0FEO0FBQ0QsS0FIRDtBQUlBRyxxQkFBaUIsTUFBakIsRUFBeUJGLFNBQXpCO0FBQ0Q7QUFDRixDQVZlLENBQWhCOztrQkFZZUwsTyIsImZpbGUiOiJkb20tbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTUxvYWQgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICByZXNvbHZlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb25ET01Mb2FkID0gKCkgPT4ge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uRE9NTG9hZCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcbiAgICBhZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25ET01Mb2FkKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUxvYWQ7XG4iXX0=

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);


const App = () => {
  const container = document.createElement('div');
  container.setAttribute('role', 'container');

  const ryskin = __WEBPACK_IMPORTED_MODULE_0__index_css__["Label"].create({
    fontSize: Math.random() * 100,
    highlighted: true,
    name: 'Ryskin',
  });

  ryskin.appendChild(document.createTextNode('Ryskinder, please click me!'));

  ryskin.addEventListener('click', () => {
    ryskin.fontSize = Math.random() * 100;
    ryskin.color = `rgb(${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() * 255).toFixed(0) })`;
  });

  const theWhiteScreen = __WEBPACK_IMPORTED_MODULE_0__index_css__["Label"].create({
    name: 'The White Screen',
  });

  theWhiteScreen.appendChild(document.createTextNode('The White Screen'));

  container.appendChild(ryskin);
  container.appendChild(theWhiteScreen);

  return container;
};

document.querySelector('#root').appendChild(App());


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


                exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, ".Label_H1EqTrJz-.Label-name_r1BcTSkGZ_H1EqTrJz- {\n  background: white;\n  color: red;\n}\n", "", {"version":3,"sources":["<input css 2>"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;CACZ","file":"another.css","sourcesContent":["Label[name=\"The White Screen\"] {\n  background: white;\n  color: red;\n}\n"],"sourceRoot":""}]);

// exports

        var deepMerge = __webpack_require__(0);
        var importedComponentsData = exports.slice(0, exports.length - 1).map(([id]) => __webpack_require__(id).components);
        var createComponent = __webpack_require__(2);
        var moduleData = {"Label":{"className":"Label_H1EqTrJz-","attributes":[{"operator":"=","name":"name","value":"The White Screen","className":"Label-name_r1BcTSkGZ_H1EqTrJz-"}],"attrs":[]}};
        var data = deepMerge.apply(null, importedComponentsData.concat(moduleData));
        exports.components = data;
        exports.locals = {
          Label: createComponent(Object.assign({}, data.Label, {
              displayName: "Label"
            }))
        };
        

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


                exports = module.exports = __webpack_require__(1)(true);
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, "@media screen and (max-width: 250px) {}\n\nbody {\n  margin: 0;\n}\n\n.Label_H1EqTrJz- {\n  font-family: monospace;\n  font-size: 14px;\n  user-select: none;\n  color: white;\n  background: blue;\n  padding: 1rem;\n  margin: 1rem;\n}\n\nbody .Label_H1EqTrJz-.Label-highlighted_rJeNcpBkMb_H1EqTrJz- {\n  color: white;\n}\n\nbody .Label_H1EqTrJz-.Label-name_BybN9THyMZ_H1EqTrJz- {\n  color: red;\n}\n", "", {"version":3,"sources":["<input css 1>"],"names":[],"mappings":"AACA,uCAAuC;;AAEvC;EACE,UAAU;CACX;;AAED;EAEE,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,aAAa;CACd;;AAED;EAGE,aAAa;CACd;;AAED;EACE,WAAW;CACZ","file":"index.css","sourcesContent":["@import './another.css';\n@media screen and (max-width: 250px) {}\n\nbody {\n  margin: 0;\n}\n\nLabel {\n  @apply span;\n  font-family: monospace;\n  font-size: 14px;\n  user-select: none;\n  color: white;\n  background: blue;\n  padding: 1rem;\n  margin: 1rem;\n}\n\nbody Label[highlighted] {\n  background: linear-gradient(to top, yellow, attr(color color, tomato));\n  font-size: calc(attr(fontSize px) + 12px);\n  color: white;\n}\n\nbody Label[name=\"Ryskin\"] {\n  color: red;\n}\n"],"sourceRoot":""}]);

// exports

        var deepMerge = __webpack_require__(0);
        var importedComponentsData = exports.slice(0, exports.length - 1).map(([id]) => __webpack_require__(id).components);
        var createComponent = __webpack_require__(2);
        var moduleData = {"Label":{"className":"Label_H1EqTrJz-","attributes":[{"name":"highlighted","className":"Label-highlighted_rJeNcpBkMb_H1EqTrJz-"},{"operator":"=","name":"name","value":"Ryskin","className":"Label-name_BybN9THyMZ_H1EqTrJz-"}],"attrs":[{"prop":"background","selector":"body .Label_H1EqTrJz-.Label-highlighted_rJeNcpBkMb_H1EqTrJz-","template":"linear-gradient(to top, yellow, { color = \"tomato\"})","attributes":["color"]},{"prop":"fontSize","selector":"body .Label_H1EqTrJz-.Label-highlighted_rJeNcpBkMb_H1EqTrJz-","template":"calc({ fontSize }px + 12px)","attributes":["fontSize"]}],"base":"span"}};
        var data = deepMerge.apply(null, importedComponentsData.concat(moduleData));
        exports.components = data;
        exports.locals = {
          Label: createComponent(Object.assign({}, data.Label, {
              displayName: "Label"
            }))
        };
        

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map