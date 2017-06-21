import { createElement, Component } from 'react';
import { format } from '../../core/template';
import matchAttribute from '../../core/match-attribute';
import bindAttrsToCSSOM from '../../dom/dist/bind-attrs-to-cssom';
import generateClassName from '../../dom/dist/generate-class-name';
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

    attrs = bindAttrsToCSSOM(attrs);
    generateClassName = generateClassName({ className, attributes, attrs: this.attrs });

    constructor(props) {
      super(props);
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
      return createElement(this.base, {
        ref: props.innerRef,
        ...omitBy(props, this.shouldOmitProp),
        className: this.generateClassName(this.props),
      });
    }
  };
};

const getClassName = ({ className }) => className;
