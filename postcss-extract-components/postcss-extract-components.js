const postcss = require('postcss');
const parser = require('postcss-selector-parser');
const _ = require('lodash/fp');
const shortid = require('shortid');
const attrToTemplate = require('../core/attr-to-template');

/**
 * @param {Object} options
 * @param {function} options.onComponent
 * @param {function} options.onProp
 * @param {function} options.onAttr
 */
module.exports = postcss.plugin('extract-_components', ({
  onComponents,
  id,
}) => {
  return (root, result) => {
    let components = {};
    result.root.walkRules(/\b[A-Z]/, rule => {
      const _components = [];
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
          components = _.set([componentName, 'className'], componentClassName, components);
          _components.push(componentName);
          for (let i = tagIndex; i < selector.nodes.length; i++) {
            const node = selector.nodes[i];
            switch (node.type) {
              case 'attribute': {
                const { operator, attribute, raws: { unquoted, insensitive }} = node;
                const attributeClassName = `${ componentName }-${ attribute }_${ shortid.generate() }_${ id }`;
                components = _.update(
                  [componentName, 'attributes'],
                  (attributes = []) => [
                    ...attributes,
                    {
                      operator,
                      name: attribute,
                      value: unquoted,
                      insensitive,
                      className: attributeClassName,
                    },
                  ],
                  components
                );
                node.replaceWith(parser.className({ value: attributeClassName }));
                break;
              }
            }
          }
          tag.replaceWith(parser.className({ value: componentClassName }));
        }
      }).process(rule.selector).result;
      if (_components.length) {
        rule.walkDecls(decl => {
          const { prop, value } = decl;
          if (isAttr(value)) {
            for (const component of _components) {
              components = _.update(
                [component, 'attrs'],
                (attrs = []) => {
                  const { template, attributes } = attrToTemplate(value);
                  return [
                    ...attrs,
                    {
                      prop: _.camelCase(prop),
                      selector: rule.selector,
                      template,
                      attributes,
                    },
                  ];
                },
                components
              );
            }
            decl.remove();
          }
          rule.walkAtRules('apply', atRule => {
            for (const component of _components) {
              components = _.set([component, 'base'], atRule.params, components);
              atRule.remove();
            }
          });
        });
      }
    });
    onComponents(components);
  };
});

const isComponentElement = ({ value }) => value.search(/\b[A-Z]/) > -1;
const isAttr = value => value.search(/attr\(.+?\)/) !== -1;
