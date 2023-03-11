const Screen = require("./screen");
const Cursor = require("./cursor");
const { grid } = require("./screen");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);
    this.cursor.setBackgroundColor();


    // Replace this with real commands
    Screen.addCommand('up', 'Move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'Move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('right', 'Move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('left', 'Move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('p', 'Place down marker to current position', this.placeVal.bind(this));


    Screen.render();
  }

  placeVal() {
    console.log(this.grid);
    if (this.grid[this.cursor.row][this.cursor.col] === ' ') {
      this.grid[this.cursor.row][this.cursor.col] = this.playerTurn;
      Screen.setGrid(this.cursor.row, this.cursor.col,this.playerTurn )

      if (TTT.checkWin(this.grid)) {
        TTT.endGame(this.playerTurn);
      }

      if (this.playerTurn === 'O') {
        this.playerTurn = 'X'
      } else if (this.playerTurn === 'X') {
        this.playerTurn = 'O'
      }
      Screen.setTextColor(this.cursor.row, this.cursor.col, 'blue');
      Screen.render();
      console.log(this.grid);


    }



  }

  static checkRows(grid, player) {
    for (let idx = 0; idx < grid.length; idx += 1) {
      let currRow = grid[idx];
      console.log("grid: ", grid);
      console.log("player: ", player)
      let hasWon = currRow.every(el => el === player);
      if (hasWon) {
        return true;
      }
    }
    return false;
  };

  static checkCols(grid, player) {
    for (let idx = 0; idx < grid[0].length; idx += 1) {
      let currCol = [];
      for (let jdx = 0; jdx < grid.length; jdx += 1) {
        currCol.push(grid[jdx][idx]);
      }
      let hasWon = currCol.every(el => el === player);

      if (hasWon) {
        return true;
      }
    }

    return false;
  }

  static checkDiagonal(grid, player) {
    let diagonals = [[grid[0][0], grid[1][1], grid[2][2]], [grid[0][2], grid[1][1], grid[2][0]]];
    for (let idx = 0; idx < diagonals.length; idx += 1) {
      let hasWon = diagonals[idx].every(el => el === player);
      if (hasWon) {
        return true;
      }
    }

    return false;
  }

  static checkWinPlayer(grid, player) {
    let row = this.checkRows(grid, player);
    let col = this.checkCols(grid, player);
    let dig = this.checkDiagonal(grid, player);

    if (row || col || dig) {
      return true;
    } else {
      return false;
    }
  }

  static checkTie(grid) {
    for (let idx = 0; idx < grid.length; idx += 1) {
      for (let el of grid[idx]) {
        if (el === ' ') {
          return false;
        }
      }
    }

    return true;
  }

  static checkWin(grid) {

    // Return 'X' if player X wins
    let playerXWon = this.checkWinPlayer(grid, 'X');
    if (playerXWon) return 'X';

    // Return 'O' if player O wins
    let playerOWon = this.checkWinPlayer(grid, 'O');
    if (playerOWon) return 'O';
    // Return 'T' if the game is a tie
    let isTie = this.checkTie(grid);
    if (isTie) return 'T';

    // Return false if the game has not ended
    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
