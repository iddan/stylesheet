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
      for (const attr of attrs) {
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
      for (const attr of attrs) {
        const { name, type, cssStyleDeclaration } = attr;
        if (cssStyleDeclaration && props[name]) {
          cssStyleDeclaration[name] = postfixAttrValue(props[name], type);
        }
      }
      return createElement('div', {
        ...omitBy(props, (value, key) => invalidProps[key]),
        className: [
          className,
          ...Object.keys(props)
            .filter(prop => propsMap[prop] && matchAttribute(propsMap[prop], props[prop]))
            .map(prop => propsMap[prop].className),
        ].join(' '),
      });
    }
  };
}
