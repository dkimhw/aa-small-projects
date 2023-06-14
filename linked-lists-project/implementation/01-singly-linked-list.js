// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // O(1)
    addToHead(val) {
      if (this.head === null) this.head = new SinglyLinkedNode(val);
      let tempHead = this.head;
      this.head = new SinglyLinkedNode(val);
      this.head.next = tempHead;
      this.length++;
    }

    // O(n)
    addToTail(val) {
      if (this.head === null) {
        this.head = new SinglyLinkedNode(val)
      } else {
        let currNode = this.head;

        while(currNode) {
          if (currNode.next === null) {
            currNode.next = new SinglyLinkedNode(val);
            break;
          } else {
            currNode = currNode.next;
          }
        }
      }

      this.length++;
    }

    // O(1)
    removeFromHead() {
      // guard clause - if null, nothing to remove
      if (this.head === null) return;

      let tempHead = this.head.next;
      this.head = tempHead;
      this.length--;
    }

    // O(n)
    removeFromTail() {
      if (this.head === null) {
        return;
      } else {
        let currNode = this.head;

        while(currNode) {
          if (currNode.next.next === null) {
            currNode.next = null;
            break;
          } else {
            currNode = currNode.next;
          }
        }
      }

      this.length--;
    }

    // O(1)
    peekAtHead() {
      return this.head;
    }

    print() {
      let current = this.head;

      while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
      }

      console.log("NULL");
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
