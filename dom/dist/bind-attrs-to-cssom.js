'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _domLoad = require('./dom-load');

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