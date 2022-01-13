/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe(`add positive scenarios for add`, function () {
  const calculator = new Calculator();

  const testData = [
    { a: 4, b: 5.5, result: 9.5 },
    { a: 4, b: -5.5, result: -1.5 },
    { a: 4, b: 0, result: 4 },
  ];

  testData.forEach(({ a, b, result }) => {
    it(`should return ${result} when called add with numbers ${a} and ${b}`, function () {
      expect(calculator.add(a, b)).to.be.equal(result);
    });
  });

  it(`should throw an error if a or b is not of type "Number"`, function () {
    const str = 'some value';
    const callWithError = () => calculator.add(str, 5);
    expect(callWithError).to.throw(`variable is not of type "Number"`);
  });
});
