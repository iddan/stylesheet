const { reduce } = require('lodash');
const { set } = require('lodash/fp');

module.exports = object => reduce(object, (result, value, key) => set(value, key, result), {});