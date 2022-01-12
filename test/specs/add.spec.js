/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe(`add positive scenarios for add`, function () {
  let sumOfNumbers;
  beforeEach(function () {
    sumOfNumbers = new Calculator();
  });
  afterEach(function () {
    sumOfNumbers = null;
  });
  it(`should return 9.5 when called add with numbers 4 and 5.5`, function () {
    expect(sumOfNumbers.add(4, 5.5)).to.be.equal(9.5);
  });
  it(`should return 4 when called add with numbers 4 and 0`, function () {
    expect(sumOfNumbers.add(4, 0)).to.be.equal(4);
  });
  it(`should return 9 when called add with numbers 4 and 5`, function () {
    expect(sumOfNumbers.add(4, 5)).to.be.equal(9);
  });
  it(`should throw an error if a is not of type "Number"`, function () {
    const callWithError = () => Calculator.add(bla, 5);
    expect(callWithError).to.throw(`variable is not of type "Number"`);
  });
});
