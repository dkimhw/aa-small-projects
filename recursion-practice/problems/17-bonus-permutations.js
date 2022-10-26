// Got it correctly but worht reviewing

/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
const permutations = (arr) => {
  let results = [];
  const permutationsRecurse = (arr, currPerm, currIdx, results) => {
    if (currPerm.length === arr.length) {
      results.push(currPerm.slice());
      return;
    }

    for (let idx = 0; idx < arr.length; idx += 1) {
      if (!currIdx.includes(idx)) {
        currPerm.push(arr[idx]);
        currIdx.push(idx);
        permutationsRecurse(arr, currPerm, currIdx, results);
        currPerm.pop();
        currIdx.pop();
      }

    }
  }

  permutationsRecurse(arr, [], [], results);
  return results
}

// let a = permutations([1, 2]) // [[1, 2], [2, 1]]

// console.log(a);

let b = permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
console.log(b);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
