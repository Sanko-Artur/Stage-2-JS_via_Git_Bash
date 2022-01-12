/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe(`add positive scenarios for multiply`, function () {
  let multiplicationOfNumbers;
  beforeEach(function () {
    multiplicationOfNumbers = new Calculator();
  });
  afterEach(function () {
    multiplicationOfNumbers = null;
  });
  it(`should return 24 when called multiply with numbers 4 and 6`, function () {
    expect(multiplicationOfNumbers.multiply(4, 6)).to.be.equal(24);
  });
  it(`should return 26 when called multiply with numbers 4 and 6.5`, function () {
    expect(multiplicationOfNumbers.multiply(4, 6.5)).to.be.equal(26);
  });
  it(`should return 0 when called multiply with numbers 4 and 0`, function () {
    expect(multiplicationOfNumbers.multiply(4, 0)).to.be.equal(0);
  });
  it(`should throw an error if a or b is not of type "Number"`, function () {
    const callWithError = () => Calculator.add(bla, 5);
    expect(callWithError).to.throw(`variable is not of type "Number"`);
  });
});
