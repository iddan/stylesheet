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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJvbWl0QnkiLCJvYmplY3QiLCJmaWx0ZXIiLCJuZXdPYmoiLCJrZXkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSwwQkFBUyxTQUFUQSxNQUFTLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUN4QyxNQUFNQyxTQUFTLEVBQWY7QUFDQSxPQUFLLElBQU1DLEdBQVgsSUFBa0JILE1BQWxCLEVBQTBCO0FBQ3hCLFFBQU1JLFFBQVFKLE9BQU9HLEdBQVAsQ0FBZDtBQUNBLFFBQUksQ0FBQ0YsT0FBT0csS0FBUCxFQUFjRCxHQUFkLENBQUwsRUFBeUI7QUFDdkJELGFBQU9DLEdBQVAsSUFBY0MsS0FBZDtBQUNEO0FBQ0Y7QUFDRCxTQUFPRixNQUFQO0FBQ0QsQ0FUTSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBvbWl0QnkgPSAob2JqZWN0LCBmaWx0ZXIpID0+IHtcbiAgY29uc3QgbmV3T2JqID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgaWYgKCFmaWx0ZXIodmFsdWUsIGtleSkpIHtcbiAgICAgIG5ld09ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdPYmo7XG59O1xuIl19