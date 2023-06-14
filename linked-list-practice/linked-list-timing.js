const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
const startLinkedList = Date.now();

let linkedList = new LinkedList();

linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToHead(3);
linkedList.addToHead(4);
linkedList.addToHead(10);
linkedList.addToHead(12);
linkedList.addToHead(15);
linkedList.addToHead(17);
linkedList.addToHead(20);
linkedList.addToHead(25);
linkedList.addToTail(4);
linkedList.addToTail(5);

const endLinkedList = Date.now();

console.log(`Execution time: ${endLinkedList - startLinkedList} ms`);


const startDoublyLinkedList = Date.now();

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.addToHead(1);
doublyLinkedList.addToHead(2);
doublyLinkedList.addToHead(3);
doublyLinkedList.addToHead(4);
doublyLinkedList.addToHead(10);
doublyLinkedList.addToHead(12);
doublyLinkedList.addToHead(15);
doublyLinkedList.addToHead(17);
doublyLinkedList.addToHead(20);
doublyLinkedList.addToHead(25);
doublyLinkedList.addToTail(4);
doublyLinkedList.addToTail(5);

const endDoublyLinkedList = Date.now();

console.log(`Execution time: ${endDoublyLinkedList - startDoublyLinkedList} ms`);
