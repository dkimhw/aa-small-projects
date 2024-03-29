// Your code here
const chai = require("chai");
const Person = require("../problems/person");
const expect = chai.expect;


describe('Person', function() {
  beforeEach(() => {
    testPerson = new Person('David', 33);
    otherPerson = new Person('Patri', 36)
  });

  it('should create an instance of a Person', function() {
    expect(testPerson).to.be.an.instanceof(Person);
  });

  it('should have properties age and name', function() {
    expect(testPerson).to.have.property('age', 33);
    expect(testPerson).to.have.property('name', 'David');
  });

  it('should return a welcome message with name', function() {
    expect(testPerson.sayHello()).to.equal('Welcome David');
  });

  it('should return a visited message', function() {
    expect(testPerson.visit(otherPerson)).to.equal('David visited Patri');
  });

  it('should return a other person\'s visited message', function() {
    expect(testPerson.switchVisit(otherPerson)).to.equal('Patri visited David');
  });

  it ('should update the name and age with given obj', function() {
    testPerson.update({ name: "lulu", age: 57 });
    expect(testPerson).to.have.property('age', 57);
    expect(testPerson).to.have.property('name', 'lulu');
  });

  it ('should throw an error', function () {
    expect(() => testPerson.update({ name: "lulu" })).to.throw(Error);
  });

  it ('should return true trying to update obj', function() {
    expect(testPerson.tryUpdate({ name: "lulu", age: 57 })).to.equal(true);
  });

  it ('should return false trying to update obj', function() {
    expect(testPerson.tryUpdate({ name: "lulu" })).to.equal(false);
  });

  it ('should return an array of welcome messages', function() {
    let david = new Person('David', 33);
    let patri = new Person('Patri', 36);
    let persons = [david, patri];
    let messages = Person.greetAll(persons);

    expect(messages).to.eql(['Welcome David', 'Welcome Patri']);
  });
});
