import { format } from '../../core/template';
import matchAttribute from '../../core/match-attribute';
import bindAttrsToCSSOM from '../../dom/dist/bind-attrs-to-cssom';
import generateClassName from '../../dom/dist/generate-class-name';

const getAttributeClassNames = attributes => props =>
  attributes
    .filter(attribute => matchAttribute(attribute, props[attribute.name]))
    .map(attribute => attribute.className);

class CSSComponent {
  willUpdate = false;

  constructor(element, attrs, props = {}) {
    this.element = element;
    this.attrs = attrs;
    this.props = props;
  }

  observe(properties) {
    Object.defineProperties(
      this.element,
      properties.reduce(
        (acc, property) => ({
          ...acc,
          [property]: {
            get: () => {
              return this.props[property];
            },
            set: value => {
              this.update({ ...this.props, [property]: value });
              return value;
            },
          },
        }),
        {}
      )
    );
  }

  update(nextProps) {
    const prevProps = this.props;
    this.props = nextProps;
    if (!this.willUpdate) {
      this.willUpdate = true;
      setTimeout(() => {
        this.element.dispatchEvent(
          Object.assign(new Event('willUpdateStyle'), {
            props: prevProps,
            nextProps: this.props,
          })
        );
        this.willUpdate = false;
        requestAnimationFrame(() => {
          this.render();
          this.element.dispatchEvent(
            Object.assign(new Event('didUpdateStyle'), { prevProps, props: this.props })
          );
        });
      });
    }
  }

  render() {
    const { props } = this;
    this.element.className = this.className;
    for (const attr of this.attrs) {
      if (attr.cssRule) {
        attr.cssRule.style[attr.prop] = format(attr.template, props);
      }
    }
  }
}

const createComponent = ({ className, attributes, attrs, base = 'div' }) => class
  extends CSSComponent {
    static getAttributeClassNames = getAttributeClassNames(attributes);

    static create(initialAttributes) {
      const instance = new this(initialAttributes);
      return instance.element;
    }

    static propKeys = [
      ...attributes.map(attribute => attribute.name),
      ...attrs.reduce((acc, attr) => acc.concat(attr.attributes), []),
    ];

    static className = className;
    static attributes = attributes;
    static attrs = attrs;
    static base = base;

    constructor(props) {
      super(document.createElement(base), bindAttrsToCSSOM(attrs), props);
      this.observe(this.constructor.propKeys);
      this.render();
    }

    generateClassName = generateClassName({ className, attributes, attrs: this.attrs });

    get className() {
      return this.generateClassName(this.props);
    }
};

module.exports = createComponent;
