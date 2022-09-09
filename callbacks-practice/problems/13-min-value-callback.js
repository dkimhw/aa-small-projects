/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {
  let minVal = Number.POSITIVE_INFINITY;

  if (cb) {
    for (let el of arr) {
      if (cb(el) < minVal) {
        minVal = cb(el);
      }
    }
  } else {
    for (let el of arr) {
      if (el < minVal) {
        minVal = el;
      }
    }
  }

  return minVal;
};
// console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
