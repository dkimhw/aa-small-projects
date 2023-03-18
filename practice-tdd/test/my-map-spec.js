// Your code here
const chai = require("chai");
const myMap = require("../problems/my-map");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

describe("myMap", function() {
  beforeEach(() => {
    testArr = new Array(1, 2, 3, 4, 5);
    cb = function (el) {
      el * 2
    };
  });

  it ("should not mutate input array", function() {
    myMap(testArr, cb);
    expect(testArr).to.eql([1, 2, 3, 4, 5])
  });

  it ("should not use built-in method Array.map", function() {
    let spy = chai.spy.on(testArr, 'map');
    myMap(testArr, cb);
    expect(spy).to.not.have.been.called.exactly(1);
  });

  it ("should call cb on each element", function() {
    let spy = chai.spy(cb);
    myMap(testArr, spy);
    expect(spy).to.have.been.called.exactly(testArr.length);
  })
})
