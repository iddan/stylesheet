import { createElement, PureComponent } from 'react';
import classnames from 'classnames';
import postfixAttrValue from './utils/postfix-attr-value';
import insertCSS from 'insert-css';

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

// lodash functions

const omitBy = (object, filter) => {
  const newObj = {};
  for (let key of Object.keys(object)) {
    const value = object[key];
    if (!filter(value, key)) {
      newObj[key] = value; 
    }
  }
  return newObj;
};

const mapObject = (object, transformer) => {
  const array = [];
  for (let key of Object.keys(object)) {
    array.push(transformer(object[key], key));
  }
  return array;
}