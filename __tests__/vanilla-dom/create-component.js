import { preprocess } from '../../vanilla-dom';
import createComponent from '../../vanilla-dom/src/create-component';

test('component shape', () => {
  const Component = createComponent(
    preprocess({
      selector: '.A',
      className: 'A',
      base: 'li',
    })
  );
  const instance = new Component();
  expect(instance).toEqual(
    expect.objectContaining({
      element: expect.any(HTMLElement),
    })
  );
  expect(Component.create()).toBeInstanceOf(HTMLElement);
});

test('element listens to changes and dispatches render events', done => {
  const Component = createComponent(
    preprocess({
      selector: '.A',
      className: 'A',
      base: 'li',
      attributes: [
        {
          name: 'highlighted',
          className: '.A-highlighted',
        },
      ],
      attrs: [
        {
          prop: 'color',
          selector: '.A',
          template: '{ color }',
          attributes: ['color'],
        },
        {
          prop: 'background-color',
          selector: '.A',
          template: '{ bgColor }',
          attributes: ['bgColor'],
        },
      ],
    })
  );
  const element = Component.create();
  element.addEventListener('willUpdateStyle', e => {
    try {
      expect(e).toEqual(
        expect.objectContaining({
          props: {},
          nextProps: { highlighted: true, color: 'white', bgColor: 'blue' },
        })
      );
    } catch (err) {
      done.fail(err);
    }
  });
  element.addEventListener('didUpdateStyle', e => {
    try {
      expect(e).toEqual(
        expect.objectContaining({
          prevProps: {},
          props: { highlighted: true, color: 'white', bgColor: 'blue' },
        })
      );
    } catch (err) {
      done.fail(err);
    }
    done();
  });
  element.highlighted = true;
  element.color = 'white';
  element.bgColor = 'blue';
});

test("element's class is updated according to props", done => {
  const Component = createComponent(
    preprocess({
      selector: '.A',
      className: 'A',
      base: 'li',
      attributes: [
        {
          name: 'highlighted',
          className: '.A-highlighted',
        },
      ],
    })
  );
  const element = Component.create();
  expect(element.className).not.toEqual(expect.stringContaining('.A-highlighted'));
  element.highlighted = true;
  element.addEventListener('didUpdateStyle', () => {
    try {
      expect(element.className).toEqual(expect.stringContaining('.A-highlighted'));
    } catch (err) {
      done.fail(err);
    }
    done();
  });
});

test("element's style is updating according to props", done => {
  const Component = createComponent(
    preprocess({
      selector: '.A',
      className: 'A',
      base: 'li',
      attrs: [
        {
          prop: 'color',
          selector: '.A',
          template: '{ color = "yellow" }',
          attributes: ['color'],
        },
      ],
    })
  );
  const instance = new Component();
  const { element } = instance;
  for (const attr of instance.attrs) {
    expect(element.matches(attr.cssRule.selectorText)).toBeTruthy();
  }
  element.addEventListener('didUpdateStyle', () => {
    try {
      expect(instance.attrs[0].cssRule.style.color).toBe('blue');
    } catch (err) {
      done.fail(err);
    }
    done();
  });
  element.color = 'blue';
});
