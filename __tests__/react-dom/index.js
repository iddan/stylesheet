import { Component } from 'react';
import { createComponentPath, preprocess } from '../../react-dom';

test('createComponentPath navigates to a component constructor', () => {
  const createComponent = require(createComponentPath);
  const component = createComponent(
    preprocess({
      selector: '.A',
      className: '.A',
      base: 'li',
    })
  );
  expect(new component()).toBeInstanceOf(Component);
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
    invalidProps: {},
  });
});

test('Preprocess defines invalidProps', () => {
  expect(
    preprocess({
      selector: '.A',
      className: '.A',
      base: 'li',
      attributes: [
        {
          name: 'highlighted',
        },
      ],
      attrs: [
        {
          prop: 'color',
          selector: '.A .B',
          template: '{ color }',
          attributes: ['color'],
        },
        {
          prop: 'background-color',
          selector: '.A .B',
          template: '{ bgColor }',
          attributes: ['bgColor'],
        },
      ],
    })
  ).toEqual({
    selector: '.A',
    className: '.A',
    base: 'li',
    attributes: [
      {
        name: 'highlighted',
      },
    ],
    attrs: [
      {
        prop: 'color',
        selector: '.A .B',
        template: '{ color }',
        attributes: ['color'],
      },
      {
        prop: 'background-color',
        selector: '.A .B',
        template: '{ bgColor }',
        attributes: ['bgColor'],
      },
    ],
    invalidProps: {
      bgColor: true,
      color: false,
      highlighted: true,
    },
  });
});
