// Your code here
const chai = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");
const expect = chai.expect;

describe('returnsThree', function () {
  it('should return 3', function () {
    expect(returnsThree()).to.equal(3);
  });
});


describe("myRange(min, max, step)", () => {
  context("if n < 1 or n > 1000000", () => {
    it("should return a RangeError err", () => {

      expect(() => reciprocal(-1)).to.throw(Error);
    });
  });

  context("if valid input", () => {
    it("should return the reciprocal of n", () => {
      const n1 = 2
      const n2 = 4

      expect(reciprocal(n1)).to.eql(0.5);
      expect(reciprocal(n2)).to.eql(0.25);
    });
  });
});
