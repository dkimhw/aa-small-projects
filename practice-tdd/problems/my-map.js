

function myMap(inputArray, callback) {
  // Your code here
  let result = []

  inputArray.forEach((input) => {
    const returnVal = callback(input);
    result.push(returnVal);
  });

  return result;

  // return inputArray.map(callback);
}

module.exports = myMap;
