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
  let results = []
  for (let idx = 0; idx < arr.length; idx++) {
    let currCnt = 0;
    for (let jdx = 0; jdx < arr.length; jdx++) {
      if (idx !== jdx && arr[idx] > arr[jdx]) currCnt++;
    }

    results.push(currCnt);
  }

  return results;
};

const twoSum = (arr, target) => {
  let map = {};

  for (let idx = 0; idx < arr.length; idx++) {
    let diff = target - arr[idx];
    let currKey = arr[idx]

    if (currKey in map) {
      return true;
    } else {
      map[diff] = 1;
    }
  }

  return false;
};

// console.log(twoSum([4, 2, 3, 6, 9], 10)); // true

const secondLargest = arr => {
  // Your code here
  return arr.sort((a, b) => b - a)[1]
};

const shuffle = (arr) => {
  let shuffled = arr.slice().sort(() => Math.random() - 0.5);
  return shuffled;
};

shuffle([1,2,3,4])

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
