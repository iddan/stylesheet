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