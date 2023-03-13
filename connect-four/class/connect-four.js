const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    Screen.addCommand('up', 'Move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'Move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('right', 'Move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('left', 'Move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('p', 'Place down marker to current position', this.placeVal.bind(this));

    Screen.render();
    this.cursor.setBackgroundColor();
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

      for (let jdx = 0; jdx < currRow.length; jdx+=1) {
        let endIdx = jdx + 3;
        if (endIdx < currRow.length) {
          let hasWon = currRow.slice(jdx, endIdx + 1).every(el => el === player);
          if (hasWon) {
            return true;
          }
        }
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

      for (let cdx = 0; cdx < currCol.length; cdx += 1) {
        let endIdx = cdx + 3;
        if (endIdx < currCol.length) {
          let hasWon = currCol.slice(cdx, endIdx + 1).every(el => el === player);
          if (hasWon) {
            return true;
          }
        }
      }
    }

    return false;
  }

  static checkDiagonal(grid, player) {
    // let diagonals = [];

    for (let idx = 0; idx < grid.length; idx += 1) {
      let newRow = idx;
      let diagonal = []
      for (let jdx = 0; jdx < grid[0].length; jdx += 1) {
        try {
          // console.log(newRow, jdx, "value: ", grid[newRow][jdx])
          diagonal.push(grid[newRow][jdx]);
          newRow += 1;
        } catch {
          continue;
        }
      }

      newRow = idx;
      let diagonal2 = [];
      for (let jdx2 = grid[0].length - 1; jdx2 > 0; jdx2 -= 1) {
        try {
          // console.log(newRow, jdx2, "value: ", grid[newRow][jdx2])
          diagonal2.push(grid[newRow][jdx2]);
          newRow += 1;
        } catch {
          continue;
        }
      }

      console.log(diagonal2)

      for (let ddx = 0; ddx < diagonal.length; ddx+=1) {
        let endIdx = ddx + 3;
        if (endIdx < diagonal.length) {
          let hasWon = diagonal.slice(ddx, endIdx + 1).every(el => el === player);
          if (hasWon) {
            return true;
          }
        }
      }

      for (let ddx2 = 0; ddx2 < diagonal2.length; ddx2+=1) {
        let endIdx = ddx2 + 3;
        if (endIdx < diagonal2.length) {
          let hasWon = diagonal2.slice(ddx2, endIdx + 1).every(el => el === player);
          if (hasWon) {
            return true;
          }
        }
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
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

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

module.exports = ConnectFour;
