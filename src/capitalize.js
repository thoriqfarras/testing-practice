export default function capitalize(string) {
  if (!string) throw new TypeError('no argument passed');
  if (typeof string !== 'string')
    throw new TypeError('argument must be type of string');
  return `${string.substring(0, 1).toUpperCase()}${string.substring(1)}`;
}
