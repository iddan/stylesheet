import { format } from '../../core/template';
import matchAttribute from '../../core/match-attribute';
import bindAttrsToCSSOM from '../../dom/dist/bind-attrs-to-cssom';

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

  static propKeys = [
    ...attributes.map(attribute => attribute.name),
    ...attrs.reduce((acc, attr) => acc.concat(attr.attributes), []),
  ];

  element = document.createElement(base);

  willUpdate = false;

  attrs = [];

  observe(properties) {
    Object.defineProperties(
      this.element,
      properties.reduce((acc, property) => {
        return {
          ...acc,
          [property]: {
            get: () => {
              return this.props[property];
            },
            set: value => {
              this.props[property] = value;
              if (!this.willUpdate) {
                this.willUpdate = true;

                this.render();
              }
              return value;
            },
          },
        };
      }, {})
    );
  }

  constructor(props = {}) {
    this.props = props;
    this.observe(this.constructor.propKeys);
    this.render();
    bindAttrsToCSSOM(attrs).then(boundAttrs => {
      this.attrs = boundAttrs;
      this.render();
    });
  }

  render = () => {
    requestAnimationFrame(() => {
      const { props } = this;
      this.element.dispatchEvent(
        Object.assign(
          new Event('componentWillUpdate', {
            props,
          })
        )
      );
      this.element.className = [className]
        .concat(this.constructor.getAttributeClassNames(props))
        .concat(this.attrs.map(attr => attr.className))
        .join(' ');
      for (const attr of this.attrs) {
        if (attr.cssRule) {
          attr.cssRule.style[attr.prop] = format(attr.template, props);
        }
      }
      this.element.dispatchEvent(Object.assign(new Event('componentDidUpdate', { props })));
      this.willUpdate = false;
    });
  };
};

module.exports = createComponent;
