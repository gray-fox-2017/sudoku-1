"use strict"

class Sudoku {
  constructor(board_string) {
    this.board = board_string;
  }

  CreateBoard() {
      this.board = board_string.split("");
      let BoardContainer = [];
      for (let i = 0;i < 9; i++ ){
          var column = [];
          for (let j = 0; j < 9; j++){
              column[j] = this.board[j];
          }
          BoardContainer.push(column);
          this.board = this.board.slice(9)
      }
      console.log(BoardContainer);
  }

  solve() {

  }

  // Returns a string representing the current state of the board
  board() {}
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.CreateBoard();
