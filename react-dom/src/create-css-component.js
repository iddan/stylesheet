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

    componentWillUpdate(nextProps) {
      this.applyAttrs(nextProps);
    }

    applyAttrs = props => {
      for (const attr of this.attrs) {
        attr.cssRule.style[attr.prop] = format(attr.template, props);
      }
    };

    shouldOmitProp = (value, key) => {
      return this.invalidProps[key] || key === 'innerRef';
    };

    matchAttributeToProp = attribute => {
      return matchAttribute(attribute, this.props[attribute.name]);
    };

    render() {
      const { props } = this;
      console.log(this.attributes, props);
      return createElement(this.base, {
        ref: props.innerRef,
        ...omitBy(props, this.shouldOmitProp),
        className: [
          this.className,
          ...this.attrs.map(getClassName),
          ...this.attributes.filter(this.matchAttributeToProp).map(getClassName),
        ].join(' '),
      });
    }
  };
};

const getClassName = ({ className }) => className;
