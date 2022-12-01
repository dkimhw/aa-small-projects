
const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, salary, title, manager, employees) {
    super(name, salary, title, manager);
    this.employees = employees || [];
  }

  addEmployee (employee) {
    this.employees.push(employee);
  }

  _totalSubSalary (manager) {
    let sum = 0;
    manager.employees.forEach(employee => {
      sum += employee.salary;
      if (employee instanceof Manager) {
        sum += this._totalSubSalary(employee);
      }
    });
    return sum;
  }

  calculateBonus (multiplier) {
    return (this.salary + this._totalSubSalary(this)) * multiplier;
  }
}


const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
