import { createElement, PureComponent } from 'react';
import classnames from 'classnames';
import postfixAttrValue from '../core/postfix-attr-value';
import { omitBy } from './utils.js';

/**
 * @param {string} displayName 
 * @param {string} className 
 * @param {Object} propsMap 
 * @param {string[]} attrs 
 */
export default function createCSSComponent({ displayName, selector, localClassName, props: propsMap, attrs, invalidProps }, cssRules) {
  console.log(attrs);
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
          className: classnames(
            localClassName,
            ...Object.keys(props)
            .filter((prop) => props[prop] && propsMap[prop])
            .map((prop) => propsMap[prop].localClassName)
          ),
        }
      ));
    }
  }
  CSSComponent.displayName = displayName;
  return CSSComponent;
}