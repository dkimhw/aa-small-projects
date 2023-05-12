const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let results = [];
  for (let idx = increment; idx <= increment * 10; idx += increment) {
    results.push(addNums(idx));
  }

  return results;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let results = [];
  for (let idx = increment; idx <= increment * 10; idx += increment) {
    results.push(addManyNums(idx));
  }

  return results;
}

module.exports = [addNums10, addManyNums10];
