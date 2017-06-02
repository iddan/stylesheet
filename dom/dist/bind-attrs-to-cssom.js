'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _domLoad = require('./dom-load');

var _domLoad2 = _interopRequireDefault(_domLoad);

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
    firstStyleSheet.insertRule('.' + className + ' {}', cssRuleIndex);
    var cssRule = firstStyleSheet.cssRules[cssRuleIndex];
    return _extends({}, attr, { className: className, cssRule: cssRule });
  });
  _domLoad2.default.then(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaW5kLWF0dHJzLXRvLWNzc29tLmpzIl0sIm5hbWVzIjpbImdldEZpcnN0U3R5bGVTaGVldCIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJmaXJzdFN0eWxlU2hlZXQiLCJzdHlsZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2hlZXQiLCJpbnNlcnRDU1NSdWxlIiwic2VsZWN0b3IiLCJydWxlIiwiY3NzU3R5bGVzaGVldCIsImkiLCJjc3NSdWxlcyIsImxlbmd0aCIsImNzc1J1bGUiLCJzZWxlY3RvclRleHQiLCJpbmNsdWRlcyIsImluc2VydFJ1bGUiLCJydWxlcyIsIkVycm9yIiwiYmluZEF0dHJzVG9DU1NPTSIsImJvdW5kQXR0cnMiLCJhdHRycyIsIm1hcCIsImNsYXNzTmFtZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiY3NzUnVsZUluZGV4IiwiYXR0ciIsInRoZW4iLCJpbmRleE9mIiwicmVtb3ZlUnVsZSIsImNzc1RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxTQUFTQSxrQkFBVCxHQUE4QjtBQUFBLDZDQUNGQyxTQUFTQyxXQURQO0FBQUEsTUFDckJDLGVBRHFCOztBQUU1QixNQUFJQSxlQUFKLEVBQXFCO0FBQ25CLFdBQU9BLGVBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNQyxlQUFlSCxTQUFTSSxhQUFULENBQXVCLE9BQXZCLENBQXJCO0FBQ0FELGlCQUFhRSxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLFVBQWxDO0FBQ0FMLGFBQVNNLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosWUFBMUI7QUFDQSxXQUFPQSxhQUFhSyxLQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3JDLHlCQUE0QlgsU0FBU0MsV0FBckMsOEhBQWtEO0FBQUEsVUFBdkNXLGFBQXVDOztBQUNoRCxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsY0FBY0UsUUFBZCxDQUF1QkMsTUFBM0MsRUFBbURGLEdBQW5ELEVBQXdEO0FBQ3RELFlBQU1HLFVBQVVKLGNBQWNFLFFBQWQsQ0FBdUJELENBQXZCLENBQWhCO0FBQ0EsWUFBSUcsUUFBUUMsWUFBUixJQUF3QkQsUUFBUUMsWUFBUixDQUFxQkMsUUFBckIsQ0FBOEJSLFFBQTlCLENBQTVCLEVBQXFFO0FBQ25FRSx3QkFBY08sVUFBZCxDQUF5QlIsSUFBekIsRUFBK0JFLElBQUksQ0FBbkM7QUFDQSxpQkFBT0QsY0FBY1EsS0FBZCxDQUFvQlAsSUFBSSxDQUF4QixDQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBVG9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXJDLFFBQU0sSUFBSVEsS0FBSixDQUNKLDBHQURJLENBQU47QUFHRDs7QUFFRCxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixRQUFTO0FBQ2hDLE1BQU1wQixrQkFBa0JILG9CQUF4QjtBQUNBLE1BQU13QixhQUFhQyxNQUFNQyxHQUFOLENBQVUsZ0JBQVE7QUFDbkMsUUFBTUMsWUFBWSxNQUFNQyxLQUFLQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLEtBQTNCLENBQWlDLENBQWpDLENBQXhCO0FBQ0EsUUFBTUMsZUFBZTdCLGdCQUFnQlksUUFBaEIsQ0FBeUJDLE1BQTlDO0FBQ0FiLG9CQUFnQmlCLFVBQWhCLE9BQWdDTyxTQUFoQyxVQUFpREssWUFBakQ7QUFDQSxRQUFNZixVQUFVZCxnQkFBZ0JZLFFBQWhCLENBQXlCaUIsWUFBekIsQ0FBaEI7QUFDQSx3QkFBWUMsSUFBWixJQUFrQk4sb0JBQWxCLEVBQTZCVixnQkFBN0I7QUFDRCxHQU5rQixDQUFuQjtBQU9BLG9CQUFRaUIsSUFBUixDQUFhLFlBQU07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDakIsNEJBQW1CVixVQUFuQixtSUFBK0I7QUFBQSxZQUFwQlMsSUFBb0I7O0FBQzdCLFlBQU1ELGVBQWUsNkJBQUk3QixnQkFBZ0JZLFFBQXBCLEdBQThCb0IsT0FBOUIsQ0FBc0NGLEtBQUtoQixPQUEzQyxDQUFyQjtBQUNBZCx3QkFBZ0JpQyxVQUFoQixDQUEyQkosWUFBM0I7QUFDQUMsYUFBS2hCLE9BQUwsR0FBZVAsY0FBY3VCLEtBQUt0QixRQUFuQixFQUE2QnNCLEtBQUtoQixPQUFMLENBQWFvQixPQUExQyxDQUFmO0FBQ0Q7QUFMZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1sQixHQU5EO0FBT0EsU0FBT2IsVUFBUDtBQUNELENBakJEOztrQkFtQmVELGdCIiwiZmlsZSI6ImJpbmQtYXR0cnMtdG8tY3Nzb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRE9NTG9hZCBmcm9tICcuL2RvbS1sb2FkJztcblxuZnVuY3Rpb24gZ2V0Rmlyc3RTdHlsZVNoZWV0KCkge1xuICBjb25zdCBbZmlyc3RTdHlsZVNoZWV0XSA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICBpZiAoZmlyc3RTdHlsZVNoZWV0KSB7XG4gICAgcmV0dXJuIGZpcnN0U3R5bGVTaGVldDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudC5zaGVldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRDU1NSdWxlKHNlbGVjdG9yLCBydWxlKSB7XG4gIGZvciAoY29uc3QgY3NzU3R5bGVzaGVldCBvZiBkb2N1bWVudC5zdHlsZVNoZWV0cykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3NzU3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3NzUnVsZSA9IGNzc1N0eWxlc2hlZXQuY3NzUnVsZXNbaV07XG4gICAgICBpZiAoY3NzUnVsZS5zZWxlY3RvclRleHQgJiYgY3NzUnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNzc1N0eWxlc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpICsgMSk7XG4gICAgICAgIHJldHVybiBjc3NTdHlsZXNoZWV0LnJ1bGVzW2kgKyAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdBIENTUyBydWxlIHVzZWQgYnkgYSBTdHlsZXNoZWV0IGNvbXBvbmVudCB3YXMgbm90IGZvdW5kLiBNYWtlIHN1cmUgeW91IGltcG9ydGVkIHRoZSBzb3VyY2UgQ1NTIGNvcnJlY3RseSdcbiAgKTtcbn1cblxuY29uc3QgYmluZEF0dHJzVG9DU1NPTSA9IGF0dHJzID0+IHtcbiAgY29uc3QgZmlyc3RTdHlsZVNoZWV0ID0gZ2V0Rmlyc3RTdHlsZVNoZWV0KCk7XG4gIGNvbnN0IGJvdW5kQXR0cnMgPSBhdHRycy5tYXAoYXR0ciA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ2EnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoNik7XG4gICAgY29uc3QgY3NzUnVsZUluZGV4ID0gZmlyc3RTdHlsZVNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICBmaXJzdFN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7IGNsYXNzTmFtZSB9IHt9YCwgY3NzUnVsZUluZGV4KTtcbiAgICBjb25zdCBjc3NSdWxlID0gZmlyc3RTdHlsZVNoZWV0LmNzc1J1bGVzW2Nzc1J1bGVJbmRleF07XG4gICAgcmV0dXJuIHsgLi4uYXR0ciwgY2xhc3NOYW1lLCBjc3NSdWxlIH07XG4gIH0pO1xuICBET01Mb2FkLnRoZW4oKCkgPT4ge1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBib3VuZEF0dHJzKSB7XG4gICAgICBjb25zdCBjc3NSdWxlSW5kZXggPSBbLi4uZmlyc3RTdHlsZVNoZWV0LmNzc1J1bGVzXS5pbmRleE9mKGF0dHIuY3NzUnVsZSk7XG4gICAgICBmaXJzdFN0eWxlU2hlZXQucmVtb3ZlUnVsZShjc3NSdWxlSW5kZXgpO1xuICAgICAgYXR0ci5jc3NSdWxlID0gaW5zZXJ0Q1NTUnVsZShhdHRyLnNlbGVjdG9yLCBhdHRyLmNzc1J1bGUuY3NzVGV4dCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGJvdW5kQXR0cnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiaW5kQXR0cnNUb0NTU09NO1xuIl19