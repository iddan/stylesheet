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
  selector,
  className,
  attributes,
  attrs,
  base = 'div',
  invalidProps,
}) {
  return class CSSComponent extends Component {
    static displayName = displayName;

    state = {
      attrs: [],
    };

    constructor(props) {
      super(props);
      bindAttrsToCSSOM(attrs).then(boundAttrs => this.setState({ attrs: boundAttrs }));
    }

    componentWillUpdate(nextProps, nextState) {
      for (const attr of nextState.attrs) {
        if (attr.cssRule) {
          attr.cssRule.style[attr.prop] = format(attr.template, nextProps);
        }
      }
    }

    render() {
      const { props, state } = this;
      return createElement(base, {
        ...omitBy(props, (value, key) => invalidProps[key]),
        className: [
          className,
          ...state.attrs.map(attr => attr.className),
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
