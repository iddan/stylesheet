import { createElement, Component } from 'react';
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
  return class CSSComponent extends Component {
    constructor(props) {
      super(props);
      if (document.readyState === 'complete') {
        this.handleDOMLoad();
      }
      addEventListener('load', this.handleDOMLoad);
    }

    attrClassNames = [];

    displayName = displayName;

    handleDOMLoad = () => {
      removeEventListener('load', this.handleDOMLoad);
      for (const attr of attrs) {
        const uniqueClassName = 'a' + Math.random().toString(32).slice(6);
        this.attrClassNames.push(uniqueClassName);
        styleSheetsLoop: for (const cssStylesheet of document.styleSheets) {
          for (let i = 0; i < cssStylesheet.cssRules.length; i++) {
            const rule = cssStylesheet.cssRules[i];
            if (rule.selectorText && rule.selectorText.includes(attr.selector)) {
              cssStylesheet.insertRule(`.${ uniqueClassName } {}`, i + 1);
              attr.cssRule = cssStylesheet.cssRules[i];
              break styleSheetsLoop;
            }
          }
        }
      }
      this.forceUpdate();
    };

    render() {
      const { props, attrClassNames } = this;
      for (const attr of attrs) {
        if (attr.cssRule) {
          attr.cssRule.style[attr.prop] = format(attr.template, props);
        }
      }
      return createElement(base, {
        ...omitBy(props, (value, key) => invalidProps[key]),
        className: [
          className,
          ...attrClassNames,
          ...attributes
            .filter(
              attribute => props[attribute.name] && matchAttribute(attribute, props[attribute.name])
            )
            .map(attribute => attribute.className),
        ].join(' '),
      });
    }
  };
};
