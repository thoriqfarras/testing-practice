import Calculator from '../calculator';

test('integer operations', () => {
  expect(Calculator.add(1, 3)).toBe(4);
  expect(Calculator.subtract(7, 2)).toBe(5);
  expect(Calculator.multiply(8, 1)).toBe(8);
  expect(Calculator.divide(72, 6)).toBe(12);
});

test('floating point operations', () => {
  expect(Calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(Calculator.subtract(7.1, 2.7)).toBeCloseTo(4.4);
  expect(Calculator.multiply(8.5, 2)).toBeCloseTo(17);
  expect(Calculator.divide(8.8, 11)).toBeCloseTo(0.8);
});

test('missing/no arguments', () => {
  expect(() => Calculator.add(3)).toThrow(TypeError);
  expect(() => Calculator.subtract(2)).toThrow(TypeError);
  expect(() => Calculator.multiply()).toThrow(TypeError);
  expect(() => Calculator.divide()).toThrow(TypeError);
});

test('non-number arguments', () => {
  expect(() => Calculator.add('1', 'asd')).toThrow(TypeError);
  expect(() => Calculator.subtract(true, false)).toThrow(TypeError);
  expect(() => Calculator.multiply(Object, 1)).toThrow(TypeError);
  expect(() => Calculator.divide('hello', 'world')).toThrow(TypeError);
});
