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
      let newLinkedNode = new SinglyLinkedNode(val);
      if (this.head === null) {
        this.head = newLinkedNode;
      } else {
        let tempHead = this.head;
        this.head = newLinkedNode;
        this.head.next = tempHead;
      }
      this.length++;

      return this;
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
      return this;
    }

    // O(1)
    removeFromHead() {
      // guard clause - if null, nothing to remove
      if (this.head === null) return;

      let currHead = this.head;
      let tempHead = this.head.next;
      this.head = tempHead;
      this.length--;

      return currHead;
    }

    // O(n)
    removeFromTail() {
      let removedTail = null;

      if (this.head === null) {
        return;
      } else if (this.head?.next === null) {
        this.head = null;
      } else {
        let currNode = this.head;

        while(currNode) {
          if (currNode.next.next === null) {
            removedTail = currNode.next;
            currNode.next = null;
            break;
          } else {
            currNode = currNode.next;
          }
        }
      }

      this.length--;
      return removedTail;
    }

    // O(1)
    peekAtHead() {
      if (this.head) {
        return this.head.value;
      } else {
        return undefined;
      }
    }

    print() {
      if (this.head === null) {
        return;
      }

      let current = this.head;

      while (current) {
        console.log(`${current.value}`);
        current = current.next;
      }

      console.log("NULL");
    }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode
}
