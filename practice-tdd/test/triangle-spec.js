// Your code here

const chai = require("chai");
const Triangle = require("../problems/triangle");
const expect = chai.expect;

describe('Triangle', function() {
  beforeEach(() => {
    t1 = new Triangle(4, 6, 8);
  });

  it('should create an instance of a triangle', function() {
    expect(t1).to.be.an.instanceOf(Triangle);
  });

  it('should have properties side1, side2, side3', function() {
    expect(t1).to.have.property('side1', 4);
    expect(t1).to.have.property('side2', 6);
    expect(t1).to.have.property('side3', 8);
  });

  it('should return 12', function() {
    expect(t1.getPerimeter()).to.be.equal(18);
  });

  it ('should return true - valid triangle', function() {
    expect(t1.hasValidSideLengths()).to.be.equal(true);
  });

  it ('should return false - invalid triangle', function() {
    let invalidTriangle = new Triangle(2, 2, 4);
    expect(invalidTriangle.hasValidSideLengths()).to.be.equal(false);
  });

  it('should have property isValid', function() {
    t1.validate();
    let t2 = new Triangle(2, 2, 4);
    t2.validate();
    expect(t1).to.have.property('isValid', true);
    expect(t2).to.have.property('isValid', false);
  });

  it('should return an array of valid triangles', function() {
    let t2 = new Triangle(2, 2, 4);
    let t3 = new Triangle(2, 5, 6);
    let trianglesArr = [t1, t2, t3];
    let validTriangles = Triangle.getValidTriangles(...trianglesArr);
    expect(validTriangles).to.eql([t1, t3]);
  });
})
