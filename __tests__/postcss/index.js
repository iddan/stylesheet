import postcss from 'postcss';
import stylesheetPostcssPlugin from '../../postcss';

const process = async cssString => {
  let components;
  return {
    ...(await postcss([
      stylesheetPostcssPlugin({
        id: 'id',
        onComponents: receivedComponents => {
          components = receivedComponents;
        },
      }),
    ]).process(cssString)),
    components,
  };
};

test('Extracts component', async () => {
  const { components } = await process(
    `
Label {
  background: grey;
}
  `
  );
  return expect(components).toEqual(
    expect.objectContaining({
      Label: {
        attributes: [],
        attrs: [],
        base: undefined,
        className: 'Label_id',
      },
    })
  );
});

test('Extracts no operator attribute', async () => {
  const { components } = await process(
    `
Label[highlighted] {
  background: grey;
}
  `
  );
  return expect(components).toEqual(
    expect.objectContaining({
      Label: {
        attributes: [
          {
            className: expect.stringContaining('Label-highlighted'),
            name: 'highlighted',
            insensitive: undefined,
            operator: undefined,
            value: undefined,
          },
        ],
        attrs: [],
        base: undefined,
        className: 'Label_id',
      },
    })
  );
});

test('Extracts = operator attribute ', async () => {
  const { components } = await process(
    `
Person[name="Dan"] {
  background: grey;
}
  `
  );
  return expect(components).toEqual(
    expect.objectContaining({
      Person: {
        attributes: [
          {
            className: expect.stringContaining('Person-name'),
            name: 'name',
            insensitive: undefined,
            operator: '=',
            value: 'Dan',
          },
        ],
        attrs: [],
        base: undefined,
        className: 'Person_id',
      },
    })
  );
});

test('Extracts attr() declaration', async () => {
  const { components } = await process(
    `
Person {
  background: attr(bgColor color);
}
  `
  );
  return expect(components).toEqual(
    expect.objectContaining({
      Person: {
        attributes: [],
        attrs: [
          {
            attributes: ['bgColor'],
            prop: 'background',
            selector: '.Person_id',
            template: '{ bgColor }',
          },
        ],
        base: undefined,
        className: 'Person_id',
      },
    })
  );
});

test('Postfixes attr() declaration', async () => {
  const { components } = await process(
    `
Person {
  height: attr(height %);
}
  `
  );
  return expect(components).toEqual(
    expect.objectContaining({
      Person: {
        attributes: [],
        attrs: [
          {
            attributes: ['height'],
            prop: 'height',
            selector: '.Person_id',
            template: '{ height }%',
          },
        ],
        base: undefined,
        className: 'Person_id',
      },
    })
  );
});

test('Extracts @apply base rules', async () => {
  const { components } = await process(
    `
Person {
  @apply figure;
}
  `
  );
  return expect(components).toEqual(
    expect.objectContaining({
      Person: {
        attributes: [],
        attrs: [],
        base: 'figure',
        className: 'Person_id',
      },
    })
  );
});
