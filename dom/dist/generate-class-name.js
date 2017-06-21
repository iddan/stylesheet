'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _matchAttribute = require('../../core/match-attribute');

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