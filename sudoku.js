"use strict"

class Sudoku {
  constructor(board_string) {
    this.board = board_string.split("");
  }
  create(){
    let big_board = [];
    for (let j = 0;j < 9; j++ ){
      var column = [];
      for (let i = 0; i < 9; i++){
        column[i] = this.board[i];
      }
      big_board.push(column);
      this.board = this.board.slice(9)
    }
    console.log(big_board);
  }

  solve() {

  }

  // Returns a string representing the current state of the board
  board() {

  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
const fs = require('fs')
let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()
//
// console.log(game.board())

//Tester
game.create();
