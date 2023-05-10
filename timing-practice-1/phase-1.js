// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let result = 0;
  for (let idx = 1; idx <= n; idx++) {
    result += idx;
  }

  return result;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let result = 0;
  for (let idx = 1; idx <= n; idx++) {
    result += addNums(idx);
  }

  return result;
}



module.exports = [addNums, addManyNums];
