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

/* eslint-disable prefer-object-spread/prefer-object-spread */
/**
 * @param {Object[]} objects array of plain objects
 */
const deepMerge = (...objects) =>
  objects.reduce((acc, object) => {
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
  }, {});

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
}();

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.element = document.createElement(this.constructor.base);
  this.attrs = (0, _bindAttrsToCssom2.default)(this.constructor.attrs);
  this.willUpdate = false;

  this.render = function () {
    requestAnimationFrame(function () {
      var props = _this3.props;

      _this3.element.dispatchEvent(Object.assign(new Event('componentWillUpdate', {
        props: props
      })));
      _this3.element.className = [_this3.constructor.className].concat(_this3.constructor.getAttributeClassNames(props)).concat(_this3.attrs.map(function (attr) {
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
};

var createComponent = function createComponent(_ref) {
  var _class, _temp;

  var className = _ref.className,
      attributes = _ref.attributes,
      attrs = _ref.attrs,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 'div' : _ref$base;
  return _temp = _class = function (_CSSComponent) {
    _inherits(_class, _CSSComponent);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, null, [{
      key: 'create',
      value: function create(initialAttributes) {
        var instance = new CSSComponent(initialAttributes);
        return instance.element;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGUtY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImdldEF0dHJpYnV0ZUNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiZmlsdGVyIiwiYXR0cmlidXRlIiwicHJvcHMiLCJuYW1lIiwibWFwIiwiY2xhc3NOYW1lIiwiQ1NTQ29tcG9uZW50IiwicHJvcGVydGllcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJlbGVtZW50IiwicmVkdWNlIiwiYWNjIiwicHJvcGVydHkiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsIndpbGxVcGRhdGUiLCJyZW5kZXIiLCJvYnNlcnZlIiwiY29uc3RydWN0b3IiLCJwcm9wS2V5cyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJhc2UiLCJhdHRycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJhc3NpZ24iLCJFdmVudCIsImNvbmNhdCIsImF0dHIiLCJqb2luIiwiY3NzUnVsZSIsInN0eWxlIiwicHJvcCIsInRlbXBsYXRlIiwiY3JlYXRlQ29tcG9uZW50IiwiaW5pdGlhbEF0dHJpYnV0ZXMiLCJpbnN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx5QkFBeUIsU0FBekJBLHNCQUF5QjtBQUFBLFNBQWM7QUFBQSxXQUMzQ0MsV0FDR0MsTUFESCxDQUNVO0FBQUEsYUFBYSw4QkFBZUMsU0FBZixFQUEwQkMsTUFBTUQsVUFBVUUsSUFBaEIsQ0FBMUIsQ0FBYjtBQUFBLEtBRFYsRUFFR0MsR0FGSCxDQUVPO0FBQUEsYUFBYUgsVUFBVUksU0FBdkI7QUFBQSxLQUZQLENBRDJDO0FBQUEsR0FBZDtBQUFBLENBQS9COztJQUtNQyxZOzs7NEJBT0lDLFUsRUFBWTtBQUFBOztBQUNsQkMsYUFBT0MsZ0JBQVAsQ0FDRSxLQUFLQyxPQURQLEVBRUVILFdBQVdJLE1BQVgs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QUFBQTtBQUFBLElBQ2RKLFlBRGMsVUFFYlIsc0JBRmEsR0FFWUEsdUJBQXVCQyxVQUF2QixDQUZaLFNBU2JzQixRQVRhLGdDQVVmdEIsV0FBV0ssR0FBWCxDQUFlO0FBQUEsV0FBYUgsVUFBVUUsSUFBdkI7QUFBQSxHQUFmLENBVmUsc0JBV2ZzQixNQUFNZCxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNbUIsSUFBTjtBQUFBLFdBQWVuQixJQUFJa0IsTUFBSixDQUFXQyxLQUFLaEMsVUFBaEIsQ0FBZjtBQUFBLEdBQWIsRUFBeUQsRUFBekQsQ0FYZSxXQWNiTSxTQWRhLEdBY0RBLFNBZEMsU0FlYk4sVUFmYSxHQWVBQSxVQWZBLFNBZ0JiMEIsS0FoQmEsR0FnQkxBLEtBaEJLLFNBaUJiRCxJQWpCYSxHQWlCTkEsSUFqQk07QUFBQSxDQUF4Qjs7QUFvQkFnQixPQUFPQyxPQUFQLEdBQWlCSixlQUFqQiIsImZpbGUiOiJjcmVhdGUtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vLi4vY29yZS90ZW1wbGF0ZSc7XG5pbXBvcnQgbWF0Y2hBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vY29yZS9tYXRjaC1hdHRyaWJ1dGUnO1xuaW1wb3J0IGJpbmRBdHRyc1RvQ1NTT00gZnJvbSAnLi4vLi4vZG9tL2Rpc3QvYmluZC1hdHRycy10by1jc3NvbSc7XG5cbmNvbnN0IGdldEF0dHJpYnV0ZUNsYXNzTmFtZXMgPSBhdHRyaWJ1dGVzID0+IHByb3BzID0+XG4gIGF0dHJpYnV0ZXNcbiAgICAuZmlsdGVyKGF0dHJpYnV0ZSA9PiBtYXRjaEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHByb3BzW2F0dHJpYnV0ZS5uYW1lXSkpXG4gICAgLm1hcChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLmNsYXNzTmFtZSk7XG5cbmNsYXNzIENTU0NvbXBvbmVudCB7XG4gIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuY29uc3RydWN0b3IuYmFzZSk7XG5cbiAgYXR0cnMgPSBiaW5kQXR0cnNUb0NTU09NKHRoaXMuY29uc3RydWN0b3IuYXR0cnMpO1xuXG4gIHdpbGxVcGRhdGUgPSBmYWxzZTtcblxuICBvYnNlcnZlKHByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAoYWNjLCBwcm9wZXJ0eSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgW3Byb3BlcnR5XToge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLndpbGxVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbGxVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMub2JzZXJ2ZSh0aGlzLmNvbnN0cnVjdG9yLnByb3BLZXlzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgbmV3IEV2ZW50KCdjb21wb25lbnRXaWxsVXBkYXRlJywge1xuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBbdGhpcy5jb25zdHJ1Y3Rvci5jbGFzc05hbWVdXG4gICAgICAgIC5jb25jYXQodGhpcy5jb25zdHJ1Y3Rvci5nZXRBdHRyaWJ1dGVDbGFzc05hbWVzKHByb3BzKSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmF0dHJzLm1hcChhdHRyID0+IGF0dHIuY2xhc3NOYW1lKSlcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBvZiB0aGlzLmF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRyLmNzc1J1bGUpIHtcbiAgICAgICAgICBhdHRyLmNzc1J1bGUuc3R5bGVbYXR0ci5wcm9wXSA9IGZvcm1hdChhdHRyLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24obmV3IEV2ZW50KCdjb21wb25lbnREaWRVcGRhdGUnLCB7IHByb3BzIH0pKSk7XG4gICAgICB0aGlzLndpbGxVcGRhdGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbn1cblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKHsgY2xhc3NOYW1lLCBhdHRyaWJ1dGVzLCBhdHRycywgYmFzZSA9ICdkaXYnIH0pID0+IGNsYXNzXG4gIGV4dGVuZHMgQ1NTQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0QXR0cmlidXRlQ2xhc3NOYW1lcyA9IGdldEF0dHJpYnV0ZUNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cbiAgICBzdGF0aWMgY3JlYXRlKGluaXRpYWxBdHRyaWJ1dGVzKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDU1NDb21wb25lbnQoaW5pdGlhbEF0dHJpYnV0ZXMpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BLZXlzID0gW1xuICAgICAgLi4uYXR0cmlidXRlcy5tYXAoYXR0cmlidXRlID0+IGF0dHJpYnV0ZS5uYW1lKSxcbiAgICAgIC4uLmF0dHJzLnJlZHVjZSgoYWNjLCBhdHRyKSA9PiBhY2MuY29uY2F0KGF0dHIuYXR0cmlidXRlcyksIFtdKSxcbiAgICBdO1xuXG4gICAgc3RhdGljIGNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBzdGF0aWMgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgc3RhdGljIGF0dHJzID0gYXR0cnM7XG4gICAgc3RhdGljIGJhc2UgPSBiYXNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb21wb25lbnQ7XG4iXX0=

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
exports.push([module.i, ".Label_rJbhievmZ.Label-name_HJMbnilPmb_rJbhievmZ {\n  background: white;\n  color: red;\n}\n", "", {"version":3,"sources":["/Users/iddan/stylesheet/examples/webpack-vanilla-dom/src/another.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;CACZ","file":"another.css","sourcesContent":[".Label_rJbhievmZ.Label-name_HJMbnilPmb_rJbhievmZ {\n  background: white;\n  color: red;\n}\n"],"sourceRoot":""}]);

// exports

        var deepMerge = __webpack_require__(0);
        var importedComponentsData = exports
          .slice(0, exports.length - 1)
          .map(([id]) => __webpack_require__(id).components);
        var createComponent = __webpack_require__(2);
        var moduleData = {"Label":{"className":"Label_rJbhievmZ","attributes":[{"operator":"=","name":"name","value":"The White Screen","className":"Label-name_HJMbnilPmb_rJbhievmZ"}],"attrs":[]}};
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
exports.push([module.i, "@media screen and (max-width: 250px) {}\n\nbody {\n  margin: 0;\n}\n\n.Label_rJbhievmZ {\n  font-family: monospace;\n  font-size: 14px;\n  user-select: none;\n  color: white;\n  background: blue;\n  padding: 1rem;\n  margin: 1rem;\n}\n\nbody .Label_rJbhievmZ.Label-highlighted_H1l-hixDXW_rJbhievmZ {\n  color: white;\n}\n\nbody .Label_rJbhievmZ.Label-name_rkWbnslvmb_rJbhievmZ {\n  color: red;\n}\n", "", {"version":3,"sources":["/Users/iddan/stylesheet/examples/webpack-vanilla-dom/src/index.css"],"names":[],"mappings":"AACA,uCAAuC;;AAEvC;EACE,UAAU;CACX;;AAED;EACE,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,aAAa;CACd;;AAED;EACE,aAAa;CACd;;AAED;EACE,WAAW;CACZ","file":"index.css","sourcesContent":["@import './another.css';\n@media screen and (max-width: 250px) {}\n\nbody {\n  margin: 0;\n}\n\n.Label_rJbhievmZ {\n  font-family: monospace;\n  font-size: 14px;\n  user-select: none;\n  color: white;\n  background: blue;\n  padding: 1rem;\n  margin: 1rem;\n}\n\nbody .Label_rJbhievmZ.Label-highlighted_H1l-hixDXW_rJbhievmZ {\n  color: white;\n}\n\nbody .Label_rJbhievmZ.Label-name_rkWbnslvmb_rJbhievmZ {\n  color: red;\n}\n"],"sourceRoot":""}]);

// exports

        var deepMerge = __webpack_require__(0);
        var importedComponentsData = exports
          .slice(0, exports.length - 1)
          .map(([id]) => __webpack_require__(id).components);
        var createComponent = __webpack_require__(2);
        var moduleData = {"Label":{"className":"Label_rJbhievmZ","attributes":[{"name":"highlighted","className":"Label-highlighted_H1l-hixDXW_rJbhievmZ"},{"operator":"=","name":"name","value":"Ryskin","className":"Label-name_rkWbnslvmb_rJbhievmZ"}],"attrs":[{"prop":"background","selector":"body .Label_rJbhievmZ.Label-highlighted_H1l-hixDXW_rJbhievmZ","template":"linear-gradient(to top, yellow, { undefined })","attributes":[]},{"prop":"fontSize","selector":"body .Label_rJbhievmZ.Label-highlighted_H1l-hixDXW_rJbhievmZ","template":"calc({ undefined } + 12px)","attributes":[]}],"base":"span"}};
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