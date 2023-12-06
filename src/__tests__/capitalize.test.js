import capitalize from '../capitalize';

test('capitalize', () => {
  expect(capitalize('hello world!')).toMatch('Hello world!');
});

test('capitalize empty string', () => {
  expect(() => capitalize('')).toThrow(TypeError);
});

test('capitalize non-string value', () => {
  expect(() => capitalize(1234)).toThrow(TypeError);
});
