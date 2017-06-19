import deepMerge from '../../loader/deep-merge';

test('Shallowly merges two objects', () => {
  expect(deepMerge({ numberOfStudentsInClassroom: 1 }, { numberOfStudents: 2 })).toEqual({
    numberOfStudentsInClassroom: 1,
    numberOfStudents: 2,
  });
});

test('Shallowly merges two array', () => {
  expect(deepMerge(['Dan'], ['Ron'])).toEqual(['Dan', 'Ron']);
});

test('Deeply merges two objects', () => {
  expect(
    deepMerge({ numberOfStudents: { inClassroom: 1 }}, { numberOfStudents: { inGeneral: 2 }})
  ).toEqual({ numberOfStudents: { inClassroom: 1, inGeneral: 2 }});
});

test('Merges an array within an object', () => {
  expect(deepMerge({ students: ['Dan'] }, { students: ['Ron'] })).toEqual({
    students: ['Dan', 'Ron'],
  });
});
