import { createElement, PureComponent } from 'react';
import postfixAttrValue from '../core/postfix-attr-value';
import { omitBy } from './utils.js';

/**
 * @param {string} displayName 
 * @param {string} selector 
 * @param {string} localClassName 
 * @param {Object} props
 * @param {string[]} attrs 
 * @param {Object} invalidProps
 */
export default function createCSSComponent({ displayName, selector, localClassName, props: propsMap, attrs, invalidProps }, cssRules) {
  for (let attr of attrs) {
    for (const cssRule of cssRules) {
      if (cssRule.selectorText === attr.selector) {
        attr.cssStyleDeclaration = cssRule.style;
      }
    }
  }
  class CSSComponent extends PureComponent {
    render() {
      const { props } = this;
      for (const { property, name, type, cssStyleDeclaration } of attrs) {
        if (props[name]) {
          cssStyleDeclaration[property] = postfixAttrValue(props[name], type);
        }
      }
      return createElement('div', Object.assign(
        {},
        omitBy(props, (value, key) => invalidProps[key]),
        {
          className: [
            localClassName,
            ...Object.keys(props)
            .filter((prop) => props[prop] && propsMap[prop])
            .map((prop) => propsMap[prop].localClassName)
          ].join(' '),
        }
      ));
    }
  }
  CSSComponent.displayName = displayName;
  return CSSComponent;
}