import analyzeArray from '../analyzeArray';

test('general', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('empty array', () => {
  expect(() => analyzeArray([])).toThrow(Error);
});

test('non-array', () => {
  expect(() => analyzeArray('1234')).toThrow(TypeError);
});
