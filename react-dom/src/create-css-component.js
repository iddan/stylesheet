import { createElement, Component } from 'react';
import { format } from '../../core/template';
import matchAttribute from '../../core/match-attribute';
import bindAttrsToCSSOM from '../../dom/dist/bind-attrs-to-cssom';
import generateClassName from '../../dom/dist/generate-class-name';
import Stylesheet from '../hot';
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
    static className = className;
    static attributes = attributes;
    static attrs = attrs;
    static base = base;
    static invalidProps = invalidProps;

    constructor(props) {
      super(props);
      this.init();
      Stylesheet.register(this);
    }

    init() {
      this.attrs = bindAttrsToCSSOM(this.constructor.attrs);
      this.generateClassName = generateClassName({
        className: this.constructor.className,
        attributes: this.constructor.attributes,
        attrs: this.attrs,
      });
      this.applyAttrs(this.props);
    }

    componentWillUpdate(nextProps) {
      this.applyAttrs(nextProps);
    }

    componentWillUnmount() {
      Stylesheet.unregister(this);
    }

    applyAttrs = props => {
      for (const attr of this.attrs) {
        attr.cssRule.style[attr.prop] = format(attr.template, props);
      }
    };

    shouldOmitProp = (value, key) => {
      return this.constructor.invalidProps[key] || key === 'innerRef';
    };

    matchAttributeToProp = attribute => {
      return matchAttribute(attribute, this.props[attribute.name]);
    };

    render() {
      const { props } = this;
      return createElement(this.constructor.base, {
        ref: props.innerRef,
        ...omitBy(props, this.shouldOmitProp),
        className: this.generateClassName(this.props),
      });
    }
  };
};
