import { format } from '../../core/template';
import matchAttribute from '../../core/match-attribute';
import bindAttrsToCSSOM from '../../dom/bind-attrs-to-cssom';
import StylesheetEvent from './event';

const getAttributeClassNames = attributes => props =>
  attributes
    .filter(attribute => matchAttribute(attribute, props[attribute.name]))
    .map(attribute => attribute.className);

const createComponent = ({
  displayName,
  selector,
  className,
  attributes,
  attrs,
  base = 'div',
  invalidProps,
}) => class CSSComponent {
  static create(initialAttributes) {
    const instance = new CSSComponent(initialAttributes);
    return instance.element;
  }

  static getAttributeClassNames = getAttributeClassNames(attributes);

  element = document.createElement(base);
  willUpdate = false;
  attrs = [];

  get props() {
    return attributes.reduce(
      (props, attribute) => ({
        ...props,
        [attribute.name]: this[`__${ attribute.name }__`],
      }),
      {}
    );
  }

  constructor(initialAttributes) {
    bindAttrsToCSSOM(attrs).then(boundAttrs => {
      this.attrs = boundAttrs;
    });
    for (const attribute of attributes) {
      const key = `__${ attribute.name }__`;
      Object.defineProperty(this.element, attribute.name, {
        get() {
          return this[key];
        },
        set(value) {
          this[key] = value;
          if (!this.willUpdate) {
            this.willUpdate = true;

            this.render();
          }
          return value;
        },
      });
    }
  }

  render = () => {
    requestAnimationFrame(() => {
      const { props } = this;
      this.element.dispatchEvent(new StylesheetEvent('componentWillUpdate', props));
      this.element.className = [className]
        .concat(CSSComponent.getAttributeClassNames(props))
        .join(' ');
      for (const attr of this.attrs) {
        if (attr.cssRule) {
          attr.cssRule.style[attr.prop] = format(attr.template, props);
        }
      }
      this.element.dispatchEvent(new StylesheetEvent('componentDidUpdate', props));
      this.willUpdate = false;
    });
  };
};

export default createComponent;
