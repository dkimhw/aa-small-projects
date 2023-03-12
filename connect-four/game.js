const ConnectFour = require("./class/connect-four");

// connectFour = new ConnectFour();

let c = [
['X', 'X', 'X', 'X', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
];


let x = [
  ['O', 'X', 'X', 'X', ' ', ' ', ' '],
  ['O', ' ', ' ', ' ', ' ', ' ', ' '],
  ['O', ' ', ' ', ' ', ' ', ' ', ' '],
  ['O', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ];

console.log(ConnectFour.checkWin(c)); // X
console.log(ConnectFour.checkWin(x)); // O
