/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
const flatten = (arr) => {
  // stack works here
  let results = []
  const flattenRecursive = (results, arr) => {
    if (!Array.isArray(arr)) results.push(arr);
    if (arr.length === 0) return;

    for (let idx = 0; idx < arr.length; idx += 1) {
      flattenRecursive(results, arr[idx]);
    }
  }

  flattenRecursive(results, arr)
  return results;
}

console.log(flatten([1, [2, [3]]])); // [1, 2, 3])

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
