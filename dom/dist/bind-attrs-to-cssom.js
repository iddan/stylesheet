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
          return cssStylesheet.rules[i + 1];
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
        firstStyleSheet.removeRule(cssRuleIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaW5kLWF0dHJzLXRvLWNzc29tLmpzIl0sIm5hbWVzIjpbImdldEZpcnN0U3R5bGVTaGVldCIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJmaXJzdFN0eWxlU2hlZXQiLCJzdHlsZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2hlZXQiLCJpbnNlcnRDU1NSdWxlIiwic2VsZWN0b3IiLCJydWxlIiwiY3NzU3R5bGVzaGVldCIsImkiLCJjc3NSdWxlcyIsImxlbmd0aCIsImNzc1J1bGUiLCJzZWxlY3RvclRleHQiLCJpbmNsdWRlcyIsImluc2VydFJ1bGUiLCJydWxlcyIsIkVycm9yIiwiYmluZEF0dHJzVG9DU1NPTSIsImJvdW5kQXR0cnMiLCJhdHRycyIsIm1hcCIsImNsYXNzTmFtZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiY3NzUnVsZUluZGV4IiwiYXR0ciIsImluZGV4T2YiLCJyZW1vdmVSdWxlIiwiY3NzVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLFNBQVNBLGtCQUFULEdBQThCO0FBQUEsNkNBQ0ZDLFNBQVNDLFdBRFA7QUFBQSxNQUNyQkMsZUFEcUI7O0FBRTVCLE1BQUlBLGVBQUosRUFBcUI7QUFDbkIsV0FBT0EsZUFBUDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1DLGVBQWVILFNBQVNJLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBckI7QUFDQUQsaUJBQWFFLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsVUFBbEM7QUFDQUwsYUFBU00sSUFBVCxDQUFjQyxXQUFkLENBQTBCSixZQUExQjtBQUNBLFdBQU9BLGFBQWFLLEtBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxhQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsSUFBakMsRUFBdUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDckMseUJBQTRCWCxTQUFTQyxXQUFyQyw4SEFBa0Q7QUFBQSxVQUF2Q1csYUFBdUM7O0FBQ2hELFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxjQUFjRSxRQUFkLENBQXVCQyxNQUEzQyxFQUFtREYsR0FBbkQsRUFBd0Q7QUFDdEQsWUFBTUcsVUFBVUosY0FBY0UsUUFBZCxDQUF1QkQsQ0FBdkIsQ0FBaEI7QUFDQSxZQUFJRyxRQUFRQyxZQUFSLElBQXdCRCxRQUFRQyxZQUFSLENBQXFCQyxRQUFyQixDQUE4QlIsUUFBOUIsQ0FBNUIsRUFBcUU7QUFDbkVFLHdCQUFjTyxVQUFkLENBQXlCUixJQUF6QixFQUErQkUsSUFBSSxDQUFuQztBQUNBLGlCQUFPRCxjQUFjUSxLQUFkLENBQW9CUCxJQUFJLENBQXhCLENBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFUb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVckMsUUFBTSxJQUFJUSxLQUFKLENBQ0osMEdBREksQ0FBTjtBQUdEOztBQUVELElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLFFBQVM7QUFDaEMsTUFBTXBCLGtCQUFrQkgsb0JBQXhCO0FBQ0EsTUFBTXdCLGFBQWFDLE1BQU1DLEdBQU4sQ0FBVSxnQkFBUTtBQUNuQyxRQUFNQyxZQUFZLE1BQU1DLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBeEI7QUFDQSxRQUFNQyxlQUFlN0IsZ0JBQWdCWSxRQUFoQixDQUF5QkMsTUFBOUM7QUFDQWIsb0JBQWdCaUIsVUFBaEIsQ0FBK0JhLEtBQUt0QixRQUFwQyxTQUFrRGdCLFNBQWxELFVBQW1FSyxZQUFuRTtBQUNBLFFBQU1mLFVBQVVkLGdCQUFnQlksUUFBaEIsQ0FBeUJpQixZQUF6QixDQUFoQjtBQUNBLHdCQUFZQyxJQUFaLElBQWtCTixvQkFBbEIsRUFBNkJWLGdCQUE3QjtBQUNELEdBTmtCLENBQW5CO0FBT0EsMkJBQVUsWUFBTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNkLDRCQUFtQk8sVUFBbkIsbUlBQStCO0FBQUEsWUFBcEJTLElBQW9COztBQUM3QixZQUFNRCxlQUFlLDZCQUFJN0IsZ0JBQWdCWSxRQUFwQixHQUE4Qm1CLE9BQTlCLENBQXNDRCxLQUFLaEIsT0FBM0MsQ0FBckI7QUFDQWQsd0JBQWdCZ0MsVUFBaEIsQ0FBMkJILFlBQTNCO0FBQ0FDLGFBQUtoQixPQUFMLEdBQWVQLGNBQWN1QixLQUFLdEIsUUFBbkIsRUFBNkJzQixLQUFLaEIsT0FBTCxDQUFhbUIsT0FBMUMsQ0FBZjtBQUNEO0FBTGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1mLEdBTkQ7QUFPQSxTQUFPWixVQUFQO0FBQ0QsQ0FqQkQ7O2tCQW1CZUQsZ0IiLCJmaWxlIjoiYmluZC1hdHRycy10by1jc3NvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbkRPTUxvYWQgZnJvbSAnLi9vbi1kb20tbG9hZCc7XG5cbmZ1bmN0aW9uIGdldEZpcnN0U3R5bGVTaGVldCgpIHtcbiAgY29uc3QgW2ZpcnN0U3R5bGVTaGVldF0gPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgaWYgKGZpcnN0U3R5bGVTaGVldCkge1xuICAgIHJldHVybiBmaXJzdFN0eWxlU2hlZXQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQuc2hlZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0Q1NTUnVsZShzZWxlY3RvciwgcnVsZSkge1xuICBmb3IgKGNvbnN0IGNzc1N0eWxlc2hlZXQgb2YgZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc1N0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNzc1J1bGUgPSBjc3NTdHlsZXNoZWV0LmNzc1J1bGVzW2ldO1xuICAgICAgaWYgKGNzc1J1bGUuc2VsZWN0b3JUZXh0ICYmIGNzc1J1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjc3NTdHlsZXNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaSArIDEpO1xuICAgICAgICByZXR1cm4gY3NzU3R5bGVzaGVldC5ydWxlc1tpICsgMV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnQSBDU1MgcnVsZSB1c2VkIGJ5IGEgU3R5bGVzaGVldCBjb21wb25lbnQgd2FzIG5vdCBmb3VuZC4gTWFrZSBzdXJlIHlvdSBpbXBvcnRlZCB0aGUgc291cmNlIENTUyBjb3JyZWN0bHknXG4gICk7XG59XG5cbmNvbnN0IGJpbmRBdHRyc1RvQ1NTT00gPSBhdHRycyA9PiB7XG4gIGNvbnN0IGZpcnN0U3R5bGVTaGVldCA9IGdldEZpcnN0U3R5bGVTaGVldCgpO1xuICBjb25zdCBib3VuZEF0dHJzID0gYXR0cnMubWFwKGF0dHIgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICdhJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDYpO1xuICAgIGNvbnN0IGNzc1J1bGVJbmRleCA9IGZpcnN0U3R5bGVTaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgZmlyc3RTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYCR7IGF0dHIuc2VsZWN0b3IgfS4keyBjbGFzc05hbWUgfSB7fWAsIGNzc1J1bGVJbmRleCk7XG4gICAgY29uc3QgY3NzUnVsZSA9IGZpcnN0U3R5bGVTaGVldC5jc3NSdWxlc1tjc3NSdWxlSW5kZXhdO1xuICAgIHJldHVybiB7IC4uLmF0dHIsIGNsYXNzTmFtZSwgY3NzUnVsZSB9O1xuICB9KTtcbiAgb25ET01Mb2FkKCgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGF0dHIgb2YgYm91bmRBdHRycykge1xuICAgICAgY29uc3QgY3NzUnVsZUluZGV4ID0gWy4uLmZpcnN0U3R5bGVTaGVldC5jc3NSdWxlc10uaW5kZXhPZihhdHRyLmNzc1J1bGUpO1xuICAgICAgZmlyc3RTdHlsZVNoZWV0LnJlbW92ZVJ1bGUoY3NzUnVsZUluZGV4KTtcbiAgICAgIGF0dHIuY3NzUnVsZSA9IGluc2VydENTU1J1bGUoYXR0ci5zZWxlY3RvciwgYXR0ci5jc3NSdWxlLmNzc1RleHQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBib3VuZEF0dHJzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmluZEF0dHJzVG9DU1NPTTtcbiJdfQ==