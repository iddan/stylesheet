const { getOptions } = require('loader-utils');
const parse = require('../core/parse');
const reactWrap = require('../react/wrap');

module.exports = function(content) {
  const { bindings } = getOptions(this);
  const { locals } = this.exec(content, this.resource);
  const [[, string]] = this.exec(content, this.resource);
  const { css, scope } = parse(string, locals);
  switch (bindings) {
    case 'react': {
      return reactWrap(css, scope);
    }
  }
};