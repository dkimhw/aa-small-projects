const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    let newNode = new SinglyLinkedNode(val);

    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this.length;
    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    if (this.length === 1) {
      let tmpVal = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;

      return tmpVal;
    } else if (this.head !== null) {
      let returnVal = this.head.value;
      let tmpNode = this.head.next;
      this.head = tmpNode;
      this.length--;

      return returnVal;
    }

    return null;

    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
