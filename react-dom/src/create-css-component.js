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

    attrs = [];

    displayName = displayName;

    handleDOMLoad = () => {
      const attrClassNames = [];
      removeEventListener('load', this.handleDOMLoad);
      for (const attr of attrs) {
        const attrClassName = 'a' + Math.random().toString(32).slice(6);
        attrClassNames.push(attrClassName);
        styleSheetsLoop: for (const cssStylesheet of document.styleSheets) {
          for (let i = 0; i < cssStylesheet.cssRules.length; i++) {
            const rule = cssStylesheet.cssRules[i];
            if (rule.selectorText && rule.selectorText.includes(attr.selector)) {
              cssStylesheet.insertRule(`.${ attrClassName } {}`, i + 1);
              this.attrs.push({
                ...attr,
                cssRule: cssStylesheet.cssRules[i + 1],
              });
              break styleSheetsLoop;
            }
          }
        }
        this.attrClassNames = attrClassNames.join(' ');
      }
      this.forceUpdate();
    };

    render() {
      const { props, attrClassNames } = this;
      for (const attr of this.attrs) {
        if (attr.cssRule) {
          attr.cssRule.style[attr.prop] = format(attr.template, props);
        }
      }
      return createElement(base, {
        ...omitBy(props, (value, key) => invalidProps[key]),
        className: [
          className,
          attrClassNames,
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
