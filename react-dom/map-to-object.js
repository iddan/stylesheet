const _ = require('lodash/fp');

const mapToObject = _.curry((iteratee, array) => _.zipObject(array, _.map(iteratee, array)));

module.exports = mapToObject;
