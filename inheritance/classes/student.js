const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, grade) {
    super(firstName, lastName);
    this.GPA = grade;
    this.major = major;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student1.GPA < student2.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}


let student2 = new Student("sarah", "smith", "basket-weaving", 3.7);
let student1 = new Student("billy", "johnson", "software-development", 3.2);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
