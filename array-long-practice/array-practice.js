const findMinimum = arr => {
  // Your code here
  let minEl = arr[0];

  for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx] < minEl) {
      minEl = arr[idx]
    }
  }

  return minEl;
};

const runningSum = arr => {
  // Your code here
  let results = [];
  let currSum = 0;

  for (let el of arr) {
    currSum += el;
    results.push(currSum);
  }

  return results;
};

const evenNumOfChars = arr => {
  // Your code here
  let result = 0;

  for (let el of arr) {
    if (el?.length % 2 === 0) result += 1;
  }

  return result;
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
