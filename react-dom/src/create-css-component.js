import { createElement, Component } from 'react';
import { format } from '../../core/template';
import matchAttribute from '../../core/match-attribute';
import bindAttrsToCSSOM from '../../dom/dist/bind-attrs-to-cssom';
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
  className,
  attributes,
  attrs,
  base = 'div',
  invalidProps,
}) {
  return class CSSComponent extends Component {
    static displayName = `Styled(${ displayName })`;

    className = className;
    attributes = attributes;
    base = base;
    invalidProps = invalidProps;

    constructor(props) {
      super(props);
      this.attrs = bindAttrsToCSSOM(attrs);
      this.applyAttrs(props);
    }

    applyAttrs = props => {
      for (const attr of this.attrs) {
        attr.cssRule.style[attr.prop] = format(attr.template, props);
      }
    };

    componentWillUpdate(nextProps) {
      this.applyAttrs(nextProps);
    }

    render() {
      const { props } = this;
      return createElement(this.base, {
        ...omitBy(props, (value, key) => this.invalidProps[key]),
        className: [
          this.className,
          ...this.attrs.map(attr => attr.className),
          ...this.attributes
            .filter(
              attribute => props[attribute.name] && matchAttribute(attribute, props[attribute.name])
            )
            .map(attribute => attribute.className),
        ].join(' '),
      });
    }
  };
};
