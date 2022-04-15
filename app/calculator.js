/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
class Calculator {
  add(a, b) {
    this._validateVariable(a, b);
    return a + b;
  }

  multiply(a, b) {
    this._validateVariable(a, b);
    return a * b;
  }

  _validateVariable(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('variable is not of type "Number"');
    }
  }
}

module.exports = Calculator;
