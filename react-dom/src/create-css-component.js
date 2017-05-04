import { createElement, PureComponent } from 'react';
import postfixAttrValue from '../../core/postfix-attr-value';
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
  displayName, selector, className, props: propsMap, attrs, invalidProps,
}) {
  return class CSSComponent extends PureComponent {

    static displayName = displayName;

    componentWillMount() {
      for (const property in attrs) {
        const attr = attrs[property];
        for (const sheet of document.styleSheets) {
          for (const cssRule of sheet.cssRules) {
            if (cssRule.selectorText === attr.selector) {
              attr.cssStyleDeclaration = cssRule.style;
            }
          }
        }
      }
    }

    render() {
      const { props } = this;
      for (const attribute in attrs) {
        const { type, cssStyleDeclaration } = attrs[attribute];
        if (cssStyleDeclaration && props[attribute]) {
          cssStyleDeclaration[attribute] = postfixAttrValue(props[attribute], type);
        }
      }
      return createElement('div', {
        ...omitBy(props, (value, key) => invalidProps[key]),
        className: [
          className,
          ...Object.keys(props)
            .filter(prop => propsMap[prop] && matchAttribute(propsMap[prop], prop, props[prop]))
            .map(prop => propsMap[prop].className),
        ].join(' '),
      });
    }
  };
}
