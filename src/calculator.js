const Calculator = {
  add: function add(a, b) {
    if (!a || !b) throw new TypeError('missing argument(s)');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new TypeError('arguments need to be a number');
    return a + b;
  },
  subtract: function subtract(a, b) {
    if (!a || !b) throw new TypeError('missing argument(s)');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new TypeError('arguments need to be a number');
    return a - b;
  },
  multiply: function multiply(a, b) {
    if (!a || !b) throw new TypeError('missing argument(s)');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new TypeError('arguments need to be a number');
    return a * b;
  },
  divide: function divide(a, b) {
    if (!a || !b) throw new TypeError('missing argument(s)');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new TypeError('arguments need to be a number');
    return a / b;
  },
};

export default Calculator;
