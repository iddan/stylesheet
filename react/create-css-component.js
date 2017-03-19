import { createElement, PureComponent } from 'react';
import classnames from 'classnames';
import insertCSS from 'insert-css';
import postfixAttrValue from '../core/utils/postfix-attr-value';
import { omitBy, mapObject } from './utils.js';

/**
 * @param {string} displayName 
 * @param {string} className 
 * @param {Object} propsMap 
 * @param {string[]} attrs 
 */
export default function createCSSComponent({ displayName, className, props: propsMap, attrs, invalidProps }) {
  class CSSComponent extends PureComponent {
    render() {
      const { props } = this;
      this.styleElement = insertCSS(
        mapObject(attrs, ({ name, type, defaultValue, className }, property) => `
          .${classnames(className)} {
            ${property}: ${postfixAttrValue(props[name], type)}
          }
        `).join('\n')
      );
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
