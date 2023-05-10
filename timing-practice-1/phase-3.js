const [addNums, addManyNums] = require("./phase-1");


function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  let results = [];
  for (let idx = increment; idx <= increment * 10; idx += increment) {
    let startTime = Date.now();
    results.push(addNums(idx));
    let endTime = Date.now();
    console.log(`${endTime - startTime}ms`);
  }

  return results;
  // Then, add timing code

  // Your code here

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
let results = [];
for (let idx = increment; idx <= increment * 10; idx += increment) {
  let startTime = Date.now();
  results.push(addManyNums(idx));
  let endTime = Date.now();
  console.log(`${endTime - startTime}ms`);
}

return results;
// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
