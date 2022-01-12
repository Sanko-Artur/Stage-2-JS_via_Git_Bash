/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/**
 *
 * A simple class containing method of calculator
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}

  /**
   *
   *
   * @param {A} a a the first number
   * @param {B} b b the second number
   * @return {*} sum of a and b
   * @memberof Calculator
   */
  add(a, b) {
    const typeOfA = typeof a;
    const typeOFB = typeof b;
    if (typeOfA !== 'number' || typeOFB !== 'number') {
      throw new Error(`variable is not of type "Number"`);
    } else {
      return a + b;
    }
  }

  /**
   *
   *
   * @param {A} a a the first number
   * @param {B} b b the second number
   * @return {*} multiplication of a and b
   * @memberof Calculator
   */
  multiply(a, b) {
    const typeOfA = typeof a;
    const typeOFB = typeof b;
    if (typeOfA !== 'number' || typeOFB !== 'number') {
      throw new Error(`variable is not of type "Number"`);
    } else {
      return a * b;
    }
  }
}

module.exports = Calculator;
