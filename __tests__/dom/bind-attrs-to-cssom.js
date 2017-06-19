import onDOMLoad from '../../dom/src/on-dom-load';
import bindAttrsToCSSOM from '../../dom/src/bind-attrs-to-cssom';

const style = Object.assign(document.createElement('style'), {
  type: 'text/css',
  innerHTML: `
      .A .B {
        color: attr(color color);
      }
    `,
});

document.head.appendChild(style);

const boundAttrs = bindAttrsToCSSOM([
  {
    prop: 'color',
    selector: '.A .B',
    template: '{ color }',
    attributes: ['color'],
  },
]);

const [{ cssRule: boundCSSRule }] = boundAttrs;

test('Binds attrs to CSSOM rules', () => {
  expect(boundAttrs).toEqual([
    expect.objectContaining({
      prop: 'color',
      selector: '.A .B',
      template: '{ color }',
      attributes: ['color'],
      className: expect.any(String),
      cssRule: expect.objectContaining({
        selectorText: expect.stringContaining('.A .B'),
      }),
    }),
  ]);
});

test('Replaces the CSSOM rules after DOM load', () => {
  onDOMLoad(() => {
    setTimeout(() => {
      expect(boundAttrs[0].cssRule).not.toBe(boundCSSRule);
    });
  });
});
