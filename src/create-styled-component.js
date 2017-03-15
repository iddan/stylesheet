import { createElement, PureComponent } from 'react';
import classnames from 'classnames';
import { pickBy, mapValues } from 'lodash';
import reverseMap from './utils/reverse-map';
import validAttributes from './utils/validAttributes';

/**
 * @param {string} displayName 
 * @param {string} className 
 * @param {Object} propsMap 
 * @param {string[]} attrs 
 */
export default function createStyledComponent(displayName, className, propsMap, attrs) {
  class StyledComponent extends PureComponent {
    render() {
      const { props } = this;
      return createElement('div', Object.assign(
        {},
        pickBy(props, (value, key) => validAttributes(key)),
        {
          className: classnames(className, mapValues(reverseMap(propsMap), (propName) => props[propName])),
          style: Object.assign(
            {},
            props.style,
            mapValues(attrs, (value) => {
              const [, propName, type] = value.split(/attr\((.+?)\s+(.+?)\)/);
              const prop = props[propName];
              switch (type) {
                case 'em':
                case 'ex':
                case 'px':
                case 'rem':
                case 'vw':
                case 'vh':
                case 'vmin':
                case 'vmax':
                case 'mm':
                case 'cm':
                case 'in':
                case 'pt':
                case 'pc':
                case 'deg':
                case 'grad':
                case 'rad':
                case 's':
                case 'ms':
                case 'Hz':
                case 'kHz':
                case '%':
                  return `${prop}${type}`;
                default:
                  return prop;
              }
            })
          ),
        })
      );
    }
  }
  StyledComponent.displayName = displayName;
  return StyledComponent;
}