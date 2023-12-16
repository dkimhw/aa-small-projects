// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
      this.value = val;
      this.next = null;
      this.prev = null;
    }
}

// npm test implementation/test/02-doubly-linked-list-specs.js
class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    addToHead(val) {
      // There are bugs in this method! Fix them!!!
      // Write your hypothesis on the time complexity of this method here

      // Add node of val to head of linked list
      let newNode = new DoublyLinkedNode(val);

      if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }

      this.length++;
    }

    addToTail(val) {
      // Add node of val to tail of linked list
      let newNode = new DoublyLinkedNode(val);

      if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }

      this.length++;
      // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
      // Remove node at head
      let tmpNode = this.head;
      if (this.length === 0) return undefined;

      // if only head
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.length--;

      return tmpNode.value;
      // Write your hypothesis on the time complexity of this method here
      // O(1)
    }

    removeFromTail() {
      // Remove node at tail
      let tmpNode = this.tail;
      if (this.length == 0) return undefined;

      if (this.length == 1) {
        this.tail = null;
        this.head = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.length--;

      return tmpNode.value;

      // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
      // Return value of head node
      // 1) Should return undefined for an empty list
      // 2) Should return the value of the head for a non-empty list
      return this.head ? this.head.value : undefined;

      // Write your hypothesis on the time complexity of this method here
      // O(1)
    }

    peekAtTail() {
      // Return value of tail node
      return this.tail ? this.tail.value : undefined;

      // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
