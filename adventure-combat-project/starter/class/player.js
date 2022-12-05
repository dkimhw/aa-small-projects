const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let itemToPickUp = this.currentRoom.getItemByName(itemName);
    this.items.push(itemToPickUp);
  }

  dropItem(itemName) {
    let itemToDropIdx = this.items.findIndex(item => item === itemName);
    let droppedItem = this.items.splice(itemToDropIdx, 1)[0];
    this.currentRoom.items.push(droppedItem);
  }

  eatItem(itemName) {
    let itemToRetrieve = this.getItemByName(itemName);
    if (itemToRetrieve instanceof Food) {
      let foodEatenIdx = this.items.findIndex(item => item === itemName);
      this.items.splice(foodEatenIdx, 1);
    }
  }

  getItemByName(name) {
    let item = this.items.find(item => item.name === name);
    return item;
  }

  hit(name) {
    findEnemy = this.currentRoom.getEnemyByName();
    this.applyDamage(name);
  }

  die() {
    super.die();
    for (let item in this.items) {
      this.dropItem(item);
    }
    console.log(this.currentRoom);
    console.log(this.items);
    console.log("You are dead!");
    process.exit();
  }

}


module.exports = {
  Player,
};
