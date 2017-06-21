import { createComponentPath, preprocess } from '../../vanilla-dom';

test('createComponentPath navigates to a component constructor', () => {
  const createComponent = require(createComponentPath);
  const component = createComponent(
    preprocess({
      selector: '.A',
      className: '.A',
      base: 'li',
    })
  );
  expect(component).toBeInstanceOf(Function);
});

test('Preprocess normalizes types', () => {
  expect(
    preprocess({
      selector: '.A',
      className: '.A',
      base: 'li',
    })
  ).toEqual({
    selector: '.A',
    className: '.A',
    attributes: [],
    attrs: [],
    base: 'li',
  });
});
