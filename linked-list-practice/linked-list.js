class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    if (this.head === null) this.head = new LinkedListNode(val);
    let tempHead = this.head;
    this.head = new LinkedListNode(val);
    this.head.next = tempHead;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    if (this.head === null) {
      this.head = new LinkedListNode(val)
    } else {
      let currNode = this.head;

      while(currNode) {
        if (currNode.next === null) {
          currNode.next = new LinkedListNode(val);
          break;
        } else {
          currNode = currNode.next;
        }
      }
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
