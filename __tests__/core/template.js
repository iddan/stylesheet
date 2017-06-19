import * as template from '../../core/template';

test('Format inserts values', () => {
  expect(
    template.format('Hello world! My name is { name } and I like to { hobby }.', {
      name: 'Christoph',
      hobby: 'code',
    })
  ).toEqual('Hello world! My name is Christoph and I like to code.');
});

test('Format inserts default values', () => {
  expect(
    template.format(
      'Hello world! My name is { name = "Christoph" } and I like to { hobby = "code" }.',
      {}
    )
  ).toEqual('Hello world! My name is Christoph and I like to code.');
});

test("Format doesn't inserts default values when values are defined", () => {
  expect(
    template.format(
      'Hello world! My name is { name = "Christoph" } and I like to { hobby = "code" }.',
      {
        name: 'Steve',
        hobby: 'design',
      }
    )
  ).toEqual('Hello world! My name is Steve and I like to design.');
});

test('Format works without spaces', () => {
  expect(
    template.format('Hello world! My name is {name} and I like to {hobby="code"}.', {
      name: 'Christoph',
    }),
    {}
  ).toEqual('Hello world! My name is Christoph and I like to code.');
});
