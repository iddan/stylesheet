import { omitBy } from '../../react-dom/dist/utils';

test('Omits every name starts with D', () => {
  expect(
    omitBy(
      {
        frontEndEngineer: 'Dan',
        architect: 'Doron',
        CEO: 'Ron',
        CTO: 'Lior',
        backEndEngineer: 'Tupac',
      },
      value => value.startsWith('D')
    )
  ).toEqual({ CEO: 'Ron', CTO: 'Lior', backEndEngineer: 'Tupac' });
});
