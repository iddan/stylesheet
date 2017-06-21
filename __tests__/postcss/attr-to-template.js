import attrToTemplate from '../../postcss/attr-to-template';

test('Transforms basic attr() declaration', () => {
  expect(attrToTemplate('attr(color color)')).toEqual(
    expect.objectContaining({
      template: '{ color }',
      attributes: ['color'],
    })
  );
});

test('Transforms complex attr() declaration', () => {
  expect(attrToTemplate('1px solid attr(color color)')).toEqual(
    expect.objectContaining({
      template: '1px solid { color }',
      attributes: ['color'],
    })
  );
});

test('Transforms attr() with unit', () => {
  expect(attrToTemplate('attr(height %)')).toEqual(
    expect.objectContaining({
      template: '{ height }%',
      attributes: ['height'],
    })
  );
});
