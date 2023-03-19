class Person {
  // Your code here
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Welcome ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object') {
      throw new TypeError('Must be an object');
    }

    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('age')) {

      console.log("hello")
      throw new TypeError('Must contain name and age properties');
    }

    this.name = obj.name;
    this.age = obj.age;

    return this;
  }
}

module.exports = Person;
