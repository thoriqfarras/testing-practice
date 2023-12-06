import caesarCipher from '../caesarCipher';

test('general', () => {
  expect(caesarCipher('thoriq', 1)).toMatch('UIPSJR');
  expect(caesarCipher('123nfl?', 0)).toMatch('123NFL?');
});

test('factor >= 25', () => {
  expect(caesarCipher('thoriq', 25)).toMatch('D6?B7A');
  expect(caesarCipher('thoriq', 26)).toMatch('E7!C8B');
});

test('factor < 0', () => {
  expect(caesarCipher('thoriq', -3)).toMatch('QELOFN');
  expect(caesarCipher('reynard', -26)).toMatch('6T?2P6S');
});

test('punctuation', () => {
  expect(caesarCipher('1235fsd,.', 3)).toMatch('4568IVGA!');
  expect(caesarCipher('.?!,999zzz', -17)).toMatch('UWXVSSSIII');
});

test('missing arguments', () => {
  expect(() => caesarCipher('thoriq')).toThrow(ReferenceError);
  expect(() => caesarCipher('', 0)).toThrow(Error);
});
