const reduce = require('lodash/reduce');
const set = require('lodash/fp/set');

exports.reverseMap = object => reduce(object, (result, value, key) => set(value, key, result), {});

exports.getClassNames = function getClassNames({ nodes }, classnames = []) {
  for (let node of nodes) {
    if (node.nodes) {
      classnames = [...classnames, ...getClassNames(node)];
      continue;
    }
    if (node.type === 'class') {
      classnames = [...classnames, node.name];
    }
  }
  return classnames;
};