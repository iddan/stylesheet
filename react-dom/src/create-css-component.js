import { createElement } from 'react';
import { format } from '../../core/template';
import matchAttribute from '../../core/match-attribute';
import { omitBy } from './utils.js';

/**
 * @param {string} displayName
 * @param {string} selector
 * @param {string} className
 * @param {Object} props
 * @param {Object} attrs
 * @param {Object} invalidProps
 */
module.exports = function createCSSComponent({
  displayName,
  selector,
  className,
  attributes,
  attrs,
  base = 'div',
  invalidProps,
}) {
  const CSSComponent = props =>
    createElement(base, {
      ...omitBy(props, (value, key) => invalidProps[key]),
      className: [
        className,
        ...attributes
          .filter(
            attribute => props[attribute.name] && matchAttribute(attribute, props[attribute.name])
          )
          .map(attribute => attribute.className),
      ].join(' '),
      style: {
        ...props.style,
        ...attrs.reduce(
          (acc, attr) => ({
            ...acc,
            [attr.prop]: console.log(format(attr.template, props)) || format(attr.template, props),
          }),
          {}
        ),
      },
    });
  CSSComponent.displayName = displayName;
  return CSSComponent;
};
