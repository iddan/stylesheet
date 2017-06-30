import { createElement, Component } from 'react';
import { format } from '../../core/template';
import bindAttrsToCSSOM from '../../dom/dist/bind-attrs-to-cssom';
import generateClassName from '../../dom/dist/generate-class-name';
import Stylesheet from '../hot';
import { omitBy } from './utils.js';

/**
 * @param {string} displayName to be displayed in the React Dev Tools wrapped with Styled()
 * @param {string} className to be used for basic styles bound to the component's tag name
 * @param {Array<Attribute>} attributes selectors the component can be bound to
 * @param {Array<Attr>} attrs in properties that the component can be bound to
 * @param {string} [base] tag the component uses by default
 * @param {Object} invalidProps to avoid passing to the component's DOM element
 * @returns {Class<React.Component>}
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
    /** Defined on the component so they can be redefined and be updated in instances later */
    static displayName = `Styled(${ displayName })`;
    static className = className;
    static attributes = attributes;
    static attrs = attrs;
    static base = base;
    static invalidProps = invalidProps;

    constructor(props) {
      super(props);
      this.init();
      /** Register the instance for hot updates */
      Stylesheet.register(this);
    }

    /**
     * Defined outside the constructor as it can be reused when the component's static properties change.
     * Currently used for HMR
     */
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

    /** Updates the element's CSS properties using attr() */
    applyAttrs = props => {
      for (const attr of this.attrs) {
        attr.cssRule.style[attr.prop] = format(attr.template, props);
      }
    };

    /**
     * @param {*} value of prop
     * @param {*} key of prop
     * @return {boolean}
     */
    shouldOmitProp = (value, key) => {
      return this.constructor.invalidProps[key] || key === 'innerRef';
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
