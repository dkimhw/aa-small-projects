class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  unshift(val) {
    // Your code here
    if (this.length + 1 >= this.capacity) {
      // Increase capacity
      this.capacity++;
      this.data.length += 1;
    }

    // Shift values by one
    for (let idx = this.data.length - 1; idx >= 0; idx--) {
      if (idx - 1 !== -1) {
        let tempVal = this.data[idx - 1];
        this.data[idx - 1] = this.data[idx];
        this.data[idx] = tempVal;
      }
    }


    // Add the val
    this.data[0] = val;
    console.log(this.data)

    this.length++;

  }

}


module.exports = DynamicArray;
