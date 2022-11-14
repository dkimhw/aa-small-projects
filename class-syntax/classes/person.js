// Your code here

class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce () {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${String(this.age)} years old.`);
  }

  static introducePeople (people) {
    if (!Array.isArray(people)) {
      throw new Error("introducePeople only takes an array as an argument.");
      // throw Error;
    }

    for (let person of people) {
      if (!(person instanceof Person)) {
        throw new Error( "All items in array must be Person class instances.");
      } else {
        person.introduce();
      }
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
