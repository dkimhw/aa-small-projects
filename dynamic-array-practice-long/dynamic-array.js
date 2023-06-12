class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    this.length++
    this.resize();
    this.data[this.length - 1] = val;
  }


  pop() {

    // Your code here
    let lastVal = this.data[this.length - 1];
    if (this.length > 0) this.length--;

    return lastVal;
  }

  shift() {

    // Your code here
    let firstVal = this.data[0];
    this.data = this.data.slice(1);
    if (this.length > 0) this.length--;
    return firstVal;
  }

  unshift(val) {

    // Your code here
    this.resize();
    let newArr = new Array(this.capacity);
    newArr[0] = val;
    for (let idx = 0; idx < this.data.length; idx++) {
      if (idx + 1 < this.data.length) newArr[idx + 1] = this.data[idx];
    }
    this.data = newArr;
    this.length++;

  }

  indexOf(val) {

    // Your code here
    for (let item of Object.entries(this.data)) {
      if (item[1] === val) return Number(item[0]);
    }

    return -1;
  }

  resize() {

    // Your code here
    if (this.length === this.capacity) {
      this.capacity *= 2;
      let newArr = new Array(this.capacity);
      for (let idx = 0; idx < this.data.length; idx++) {
        newArr[idx] = this.data[idx];
      }

      this.data = newArr;
    }
  }

}


module.exports = DynamicArray;
