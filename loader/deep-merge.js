/* eslint-disable prefer-object-spread/prefer-object-spread */
/**
 * @param {Object[]} objects array of plain objects
 */
const deepMerge = (...objects) =>
  objects.reduce((acc, object) => {
    if (!acc || typeof object !== 'object') {
      return object;
    }
    if (!Array.isArray(acc) && Array.isArray(object)) {
      return object;
    }
    if (Array.isArray(acc) && Array.isArray(object)) {
      return [...acc, ...object];
    }
    return Object.keys(object).reduce(
      (acc2, key) => Object.assign({}, acc2, { [key]: deepMerge(acc2[key], object[key]) }),
      acc || {}
    );
  }, {});

module.exports = deepMerge;
