import Decimal from 'decimal.js';

export default function analyzeArray(array) {
  if (!(array instanceof Array))
    throw new TypeError('argument must be type array');
  if (array === null || array === undefined)
    throw new ReferenceError('no argument passed');
  if (array.length === 0) throw new Error('array is empty');
  return {
    average: +Decimal.div(
      array.reduce((prev, curr) => prev + curr, 0),
      array.length
    ),
    min: array.toSorted((a, b) => a - b)[0],
    max: array.toSorted((a, b) => a - b)[array.length - 1],
    length: array.length,
  };
}
