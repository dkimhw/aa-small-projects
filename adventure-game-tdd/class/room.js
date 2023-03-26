class Room {

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }

  getEnemies() {
    const { World } = require('./world');
    return World.getEnemiesInRoom(this);
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");
    if (this.getEnemies().length > 0) {
      console.log(`Enemies: ${this.getEnemies().map(enemy => enemy.name).join(", ")}`);
    }
    if (this.items.length > 0) {
      console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
    }
    console.log(this.getExitsString());
    console.log("");
  }

  getExits() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExits().join(", ")}`
  }

  connectRooms(direction, connectingRoom) {

    // Check if the direction and connecting room are valid
    if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
      throw new Error("Error: Invalid room connection");
    }

    this.exits[direction] = connectingRoom;
  }

  getRoomInDirection(direction) {
    return this.exits[direction];
  }

  getItemByName(name) {
    let itemIdx = this.items.findIndex(item => item.name === name);
    let retrievedItem = this.items[itemIdx];
    this.items.splice(itemIdx, 1)
    return retrievedItem;
  }

  checkItem(name) {
    let itemIdx = this.items.findIndex(item => item.name === name);
    return itemIdx === -1 ? false : true;
  }

  getEnemyByName(name) {
   // Fill this in
   let enemies = this.getEnemies()
   return enemies.find(enemy => enemy.name === name);
  }
}

class DarkRoom extends Room {
  constructor(name, description) {
    super(name, description);
    this.canSee = false;
    this.exits = {};
    this.items = [];
  }

  isLightAvailable() {
    // Check if light is in room
    let light = this.getItemByName('light');
    if (light?.name === 'light') {
      return true
    } else {
      return false
    };
  }

  printRoom() {
    console.clear();

    this.canSee = this.checkItem('light');

    if (this.canSee) {
      console.log("");
      console.log(this.name);
      console.log("");
      console.log(this.description);
      console.log("");
      if (this.getEnemies().length > 0) {
        console.log(`Enemies: ${this.getEnemies().map(enemy => enemy.name).join(", ")}`);
      }
      if (this.items.length > 0) {
        console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
      }
      console.log(this.getExitsString());
      console.log("");
    } else {
      console.log("The room is pitch dark. You cannot see anything\n");
    }
  }

}

module.exports = {
  Room,
  DarkRoom
};
