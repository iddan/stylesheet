/**
 * @typedef {string} Template
 */

/**
 * @param {Template} template
 * @param {Object<string|number|bool>} values
 */
export const format = (template, values) =>
  template.replace(
    /\{\s*(.+?)(?:\s*=\s*"(.+?)")?\s*\}/g,
    (match, name, defaultValue) => values[name] || defaultValue || ''
  );
