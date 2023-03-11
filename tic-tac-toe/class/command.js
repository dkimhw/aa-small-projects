class Command {

  constructor(key, description, action) {
    this.key = key;
    this.description = description;
    this.action = action;
  }

  execute() {
    console.log(this);
    console.log(this.action)
    this.action();
  }

}


module.exports = Command;
