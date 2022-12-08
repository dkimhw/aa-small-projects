const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    // Fill this in
    let directions = ['n', 's', 'e', 'w']
    let valid_directions = []

    for (let direction of directions) {
      let room_direction = this.currentRoom.getRoomInDirection(direction);
      if (room_direction) {
        valid_directions.push(room_direction);
      }
    }

    let randomIdx = Math.floor(Math.random() * valid_directions.length);
    let nextRoom = valid_directions[randomIdx];

    if (nextRoom) {
      this.currentRoom = nextRoom;
      this.cooldown = 3000;
    } else {
      console.log("Enemy cannot move anywhere!");
    }
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    if (this.attackTarget) {
      this.attackTarget.applyDamage(this.strength);
      this.cooldown = 3000;
    }
  }

  applyDamage(amount) {
    // Fill this in
    super.applyDamage(amount);
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }
}

const { Room } = require('./room');
const { Item } = require('./item');

let room =  new Room("Test Room", "A test room");
let item = new Item("rock", "just a simple rock");
let westRoom = new Room("West Room", "A room to the west of testRoom");
room.connectRooms('w', westRoom);
let enemy = new Enemy('enemy', 'an ordinary character', room);
enemy.randomMove();
let newRoom = enemy.currentRoom
console.log(newRoom == westRoom);


module.exports = {
  Enemy,
};
