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
export default function createCSSComponent({ displayName, className, props: propsMap, attrs, invalidProps }, cssRules) {
  for (let attr of Object.values(attrs)) {
    for (let cssRule of cssRules) {
      if (cssRule.selectorText === '.' + attr.className) {
        attr.cssStyleDeclaration = cssRule.style;
      }
    }
  }
  class CSSComponent extends PureComponent {
    render() {
      const { props } = this;
      for (let property of Object.keys(attrs)) {
        const { name, type, cssStyleDeclaration } = attrs[property];
        cssStyleDeclaration[property] = postfixAttrValue(props[name], type);
      }
      return createElement('div', Object.assign(
        {},
        omitBy(props, (value, key) => invalidProps[key]),
        { className: classnames(className, this.id, Object.keys(props).map(key => propsMap[key])) }
      ));
    }
  }
  CSSComponent.displayName = displayName;
  return CSSComponent;
}