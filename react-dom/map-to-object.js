const _ = require('lodash/fp');

const mapToObject = _.curry((iteratee, array) => _.zipObject(_.map(iteratee, array), array));

module.exports = mapToObject;
