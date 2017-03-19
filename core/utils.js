const reduce = require('lodash/reduce');
const set = require('lodash/fp/set');

exports.reverseMap = object => reduce(object, (result, value, key) => set(value, key, result), {});