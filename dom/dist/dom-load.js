'use strict';

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