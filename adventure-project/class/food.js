
// FILL THIS OUT
const Item = require('./item.js').Item;

class Food extends Item {
  constructor(name, description) {
    super(name, description);
  }
}

module.exports = {
  Food,
};
