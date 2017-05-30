const postcss = require('postcss');
const parser = require('postcss-selector-parser');
const _ = require('lodash/fp');
const shortid = require('shortid');

/**
 * @param {Object} options
 * @param {function} options.onComponent
 * @param {function} options.onProp
 * @param {function} options.onAttr
 */
module.exports = postcss.plugin('extract-components', ({
  onComponent,
  onAttribute,
  onAttr,
  onApply,
  id,
}) => {
  return (root, result) =>
    result.root.walkRules(/\b[A-Z]/, rule => {
      const components = [];
      rule.selector = parser(selectorRoot => {
        // TODO check for walkSelectors
        for (const selector of selectorRoot.nodes) {
          const tagIndex = _.findLastIndex({ type: 'tag' }, selector.nodes);
          const tag = selector.nodes[tagIndex];
          if (!tag || !isComponentElement(tag)) {
            continue;
          }
          const { value: componentName } = tag;
          const componentClassName = `${ componentName }_${ id }`;
          onComponent(componentName, componentClassName);
          components.push(componentName);
          for (let i = tagIndex; i < selector.nodes.length; i++) {
            const node = selector.nodes[i];
            switch (node.type) {
              case 'attribute': {
                const { operator, attribute, raws: { unquoted, insensitive }} = node;
                const attributeClassName = `${ componentName }-${ attribute }_${ shortid.generate() }_${ id }`;
                onAttribute(
                  componentName,
                  { operator, name: attribute, value: unquoted, insensitive },
                  attributeClassName
                );
                node.replaceWith(parser.className({ value: attributeClassName }));
                break;
              }
            }
          }
          tag.replaceWith(parser.className({ value: componentClassName }));
        }
        if (components.length) {
          rule.walkDecls(decl => {
            const { prop, value } = decl;
            if (isAttr(value)) {
              for (const component of components) {
                onAttr(rule.selector, component, prop, value);
              }
              decl.remove();
            }
            rule.walkAtRules('apply', atRule => {
              for (const component of components) {
                onApply(component, atRule.params);
                atRule.remove();
              }
            });
          });
        }
      }).process(rule.selector).result;
    });
});

const isComponentElement = ({ value }) => value.search(/\b[A-Z]/) > -1;
const isAttr = value => value.search(/^attr\(.+?\)$/) !== -1;
