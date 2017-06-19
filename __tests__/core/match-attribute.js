import matchAttribute from '../../core/match-attribute';

test('[attribute]', () => {
  expect(matchAttribute({ name: 'highlighted' }, true)).toBeTruthy();
});

test('[attribute=true]', () => {
  expect(matchAttribute({ name: 'highlighted', operator: '=', value: true }, true)).toBeTruthy();
});

test('[attribute=value]', () => {
  expect(matchAttribute({ name: 'name', operator: '=', value: 'Dan' }, 'Dan')).toBeTruthy();
});

test('[attribute~=value]', () => {
  expect(matchAttribute({ name: 'name', operator: '~=', value: 'Dan' }, 'Dan Ron')).toBeTruthy();
});

test('[attribute|=value]', () => {
  expect(matchAttribute({ name: 'name', operator: '|=', value: 'Dan' }, 'Dan')).toBeTruthy();
});

test('[attribute|=value-other]', () => {
  expect(matchAttribute({ name: 'name', operator: '|=', value: 'Dan' }, 'Dan-Smith')).toBeTruthy();
});

test('[attribute^=value]', () => {
  expect(matchAttribute({ name: 'name', operator: '^=', value: 'Dan' }, 'DanSmith')).toBeTruthy();
});

test('[attribute$=value]', () => {
  expect(matchAttribute({ name: 'name', operator: '$=', value: 'Smith' }, 'DanSmith')).toBeTruthy();
});

test('[attribute*=value]', () => {
  expect(matchAttribute({ name: 'name', operator: '*=', value: 'Dan' }, 'SrDanSmith')).toBeTruthy();
});

test('[attribute=value i]', () => {
  expect(
    matchAttribute({ name: 'name', operator: '=', value: 'dan', insensitive: true }, 'Dan')
  ).toBeTruthy();
});
