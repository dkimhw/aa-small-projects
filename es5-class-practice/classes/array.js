// Your code here

Array.prototype.isEqual = function(arr)  {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] !== this[idx]) return false;
  }

  return true;
}
