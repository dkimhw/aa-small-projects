
class Employee {
  constructor(name, salary, title, manager) {
    this.name = name;
    this.salary = salary;
    this.title = title;

    // If a manger is passed in, add this employee to the manager's list of employees
    if (manager) {
      manager.addEmployee(this);
    }

    this.manager = manager;
  }
}

module.exports = Employee;
