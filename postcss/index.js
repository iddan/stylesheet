const postcss = require('postcss');
const parser = require('postcss-selector-parser');
const _ = require('lodash/fp');
const parseAttributeNodes = require('./parse-attribute-nodes');
const appendAttr = require('./append-attr');

/**
 * @param {Object} options
 * @param {function} options.onComponent
 * @param {function} options.onProp
 * @param {function} options.onAttr
 */
module.exports = postcss.plugin('stylesheet', ({ onComponents, id }) => {
  return (root, result) => {
    let allComponents = {};
    result.root.walkRules(/\b[A-Z]/, rule => {
      const blockComponents = new Set();
      let components = {};
      const parseComponentTagsAndAttributesSelectors = selectorRoot => {
        for (const selector of selectorRoot.nodes) {
          for (const tag of selector.nodes.filter(matchComponentTags)) {
            const tagIndex = selector.nodes.indexOf(tag);
            const componentName = tag.value;
            const componentClassName = `${ componentName }_${ id }`;
            let nextCombinatorIndex = findNextCombinatorIndexFrom(tagIndex, selector.nodes);
            if (nextCombinatorIndex === -1) {
              nextCombinatorIndex = selector.nodes.length;
              blockComponents.add(componentName);
            }
            const attributeNodes = getAttributeNodes(tagIndex, nextCombinatorIndex, selector.nodes);
            components = _.update(
              componentName,
              _.flow([
                _.set('className', componentClassName),
                _.update('attributes', (attributes = []) => [
                  ...attributes,
                  ...parseAttributeNodes(id, componentName, attributeNodes),
                ]),
              ]),
              components
            );
            tag.replaceWith(parser.className({ value: componentClassName }));
          }
        }
      };
      try {
        rule.selector = parser(parseComponentTagsAndAttributesSelectors).process(
          rule.selector
        ).result;
      } catch (err) {
        if (err.message !== 'Expected pseudo-class or pseudo-element') {
          throw err;
        }
      }
      if (blockComponents.size) {
        rule.walkDecls(decl => {
          if (isAttr(decl.value)) {
            for (const component of blockComponents) {
              components = appendAttr(components, component, rule, decl);
            }
          }
        });
        rule.walkAtRules('apply', atRule => {
          if (isElementBase(atRule)) {
            for (const component of blockComponents) {
              components = _.set([component, 'base'], atRule.params, components);
              atRule.remove();
            }
          }
        });
      }
      for (const [componentName, component] of Object.entries(components)) {
        allComponents = _.update(
          componentName,
          _.flow([
            _.update('className', className => className || component.className),
            _.update('attributes', (attributes = []) => {
              if (!component.attributes) {
                return attributes;
              }
              return attributes.concat(component.attributes)
            }),
            _.update('attrs', (attrs = []) => {
              if (!component.attrs) {
                return attrs;
              }
              return attrs.concat(component.attrs)
            }),
            _.update('base', base => base || component.base),
          ]),
          allComponents
        );
      }
    });
    onComponents(allComponents);
  };
});

const and = _.curry((predicates, value) => _.every(predicate => predicate(value), predicates));

const isComponentElement = ({ value }) => value.search(/[A-Z]/) === 0;
const isAttr = value => value.search(/attr\(.+?\)/) !== -1;
const isElementBase = ({ params }) => params.search(/[A-z]/) === 0;

const matchComponentTags = and([_.matches({ type: 'tag' }), isComponentElement]);

const findNextCombinatorIndexFrom = _.findIndexFrom({ type: 'combinator' });

const getAttributeNodes = (tagIndex, nextCombinatorIndex, nodes) =>
  _.flow([_.slice(tagIndex, nextCombinatorIndex), _.filter({ type: 'attribute' })])(nodes);
