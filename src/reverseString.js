export default function reverseString(string) {
  if (!string) throw new TypeError('no argument passed');
  if (typeof string !== 'string')
    throw new TypeError('argument must be type of string');
  return string.split('').reverse().join('');
}
