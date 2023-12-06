import reverseString from '../reverseString';

test('reverse string', () => {
  expect(reverseString('thoriq farras')).toMatch('sarraf qiroht');
});

test('reverse empty string', () => {
  expect(() => reverseString('')).toThrow(TypeError);
});

test('reverse non-string value', () => {
  expect(() => reverseString(false)).toThrow(TypeError);
});
