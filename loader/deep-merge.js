/**
 * @param {Object[]} objects array of plain objects
 */
const deepMerge = (...objects) => objects.reduce(
  (acc, object) => {
    if (typeof object !== 'object') {
      return object;
    }
    return Object.keys(object).reduce(
      (acc2, key) => Object.assign({}, acc2, { [key]: deepMerge(acc2[key], object[key]) }),
      acc || {}
    );
  },
  {}
);

module.exports = deepMerge;
