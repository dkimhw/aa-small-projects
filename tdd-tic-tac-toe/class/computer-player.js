
class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    /*
      Input: grid
      Output: list of objects [{row: 0, col: 2}]
        - list of valid moves (contains: row, col)

      Grid Data Structure:
        grid = [[' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']]

      Loop over each row adn for each col - check if it's ' ' and if so append to `validMoves`
    */
    let validMoves = [];
    for (let idx = 0; idx < grid.length; idx += 1) {
      for (let jdx = 0; jdx < grid[0].length; jdx += 1) {
        let currVal = grid[idx][jdx];
        if (currVal === ' ') validMoves.push({ row: idx, col: jdx});
      }
    }

    return validMoves;
  }

  static randomMove(grid) {
    // Your code here
    let validMoves = this.getValidMoves(grid);
    let randomIdx = Math.floor(Math.random() * validMoves.length);
    return validMoves[randomIdx];
  }

  static getLines(grid) {
    // Your code here
    /*
      Generate a series of lines where there are two of the same symbols in a row
        grid = [[' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']]

        [{symbol: 'X'}, 'X', ' ' ]
    */
    let lines = [];
    // row lines
    for (let idx = 0; idx < grid.length; idx++) {
      let row = []
      for (let jdx = 0; jdx < grid[0].length; jdx++) {
        row.push({ row: idx, col: jdx, symbol: grid[idx][jdx] });
      }

      lines.push(row);
    }

    // col lines
    for (let idx = 0; idx < grid[0].length; idx++) {
      let col = [];
      for (let jdx = 0; jdx < grid.length; jdx++) {
        col.push({ row: jdx, col: idx, symbol: grid[jdx][idx] });
      }

      lines.push(col);
    }

    // add diagonals
    lines.push([{ row: 0, col: 0, symbol: grid[0][0] }, { row: 1, col: 1, symbol: grid[1][1] }, { row: 2, col: 2, symbol: grid[2][2] }]);
    lines.push([{ row: 0, col: 2, symbol: grid[0][2] }, { row: 1, col: 1, symbol: grid[1][1] }, { row: 2, col: 0, symbol: grid[2][0] }]);

    return lines;
  }

  static getWinningMoves(grid, symbol) {
    let lines = this.getLines(grid);
    console.log("grid", grid)
    let winningLines = lines.filter(line => {
      let cnt = 0;
      for (let idx = 0; idx < line.length; idx++) {
        if (line[idx]['symbol'] === symbol) cnt += 1;
      }

      return cnt >= 2;
    });

    console.log("winning lines", winningLines);

    if (winningLines?.length > 0) {
      let findEmptyMove = winningLines[0].filter(move => {
        if (move['symbol'] === ' ') return true;
      });

      console.log("findEmptyMove", findEmptyMove);

      return { row: findEmptyMove[0].row, col: findEmptyMove[0].col }
    }

    return null;
  }

  static getSmartMove(grid, symbol) {
    // Your code here
    return this.getWinningMoves(grid, symbol);
  }

}

module.exports = ComputerPlayer;
