'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _onDomLoad = require('./on-dom-load');

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