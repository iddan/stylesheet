import mapToObject from '../../react-dom/map-to-object';

test('Maps array items to object', () => {
  expect(mapToObject(item => item.toLowerCase() + '-is-cool', ['Dan', 'Ron'])).toEqual({
    Dan: 'dan-is-cool',
    Ron: 'ron-is-cool',
  });
});
