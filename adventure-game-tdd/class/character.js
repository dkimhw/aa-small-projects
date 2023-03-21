class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.health = 100;
    this.strength = 10;
    this.items = [];
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    for (let item of this.items) {
      this.currentRoom.items.push(item);
    }
    this.currentRoom = null;
    this.items = [];
  }

}

const { Room } = require('./room');
const { Item } = require('./item');

let room =  new Room("Test Room", "A test room");
let item = new Item("rock", "just a simple rock");
let character = new Character('Character', 'an ordinary character', room);
character.items.push(item);

character.die();
console.log(character.currentRoom);
console.log(character.items);


module.exports = {
  Character,
};
