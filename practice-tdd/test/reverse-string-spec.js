// Your code here
const chai = require("chai");
const reverseString = require("../problems/reverse-string")
const expect = chai.expect;

describe('reverseString', function () {
  it('should return nuf given fun', function () {
    expect(reverseString('fun')).to.equal("nuf");
  });
});
