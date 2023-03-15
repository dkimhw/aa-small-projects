function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') {
    throw new Error('Need a number as input');
  }
  return number % 2 !== 0
}

function myRange(min, max, step = 1) {
  // Your code here
  let arr = []
  for (let idx = min; idx <= max; idx += step) {
    arr.push(idx);
  }

  return arr;
}


module.exports = { isFive, isOdd, myRange };
