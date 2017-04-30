const postcss = require('postcss');

/**
 * TODO:
 * handle URL imports
 * handle media queries
 */
module.exports = postcss.plugin('extract-imports', ({ onImport }) => (root, result) => {
  root.walkAtRules(/import/, (rule) => {
    onImport(rule.params.replace(/['"]/g, ''), '');
  });
});
