export var omitBy = function omitBy(object, filter) {
  var newObj = {};
  for (var key in object) {
    var value = object[key];
    if (!filter(value, key)) {
      newObj[key] = value;
    }
  }
  return newObj;
};