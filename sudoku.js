"use strict"

class Sudoku {
  constructor(board_string) {
    this.board = board_string.split("");
    this.big_board = [];
    this.column = []
    this.solved = [];
  }
  create(){
    // let big_board = [];
    for (let j = 0;j < 9; j++ ){
      this.column = [];
      for (let i = 0; i < 9; i++){
        this.column[i] = parseInt(this.board[i]);
      }
      this.big_board.push(this.column);
      this.board = this.board.slice(9)
    }
    console.log("Before Solve");
    console.log(this.big_board);
  }

  solve() {
    this.solved = this.big_board;
    //Check and Fill Horizontally Randomly
    // for (let m = 0; m < this.solved.length; m++){
    //   for (let n = 0; n < this.solved[m].length; n++){
    //     // console.log(solving[m][n]);
    //     if (this.solved[m][n] === 0){
    //       this.solved[m][n] = Math.ceil(Math.random()*9);
    //     }
    //   }
    // }
    //Check Horizontally
    for (let h = 0; h < this.solved.length; h++){
      for(let j = 0; j < this.solved[h].length; j++){
        let tmp_2 = this.solved[h][j];
        for (let p = 0; p < this.solved[h].length - 1; p++){
          if (tmp_2 === this.solved[h][p + 1]){
            this.solved[h][p + 1] = Math.ceil(Math.random()*9);
            debugger;
          }
          debugger;
        }
        debugger;
      }
      debugger;
    }
    debugger;
    //Check and Fill Vertically
    //Check and Fill by Small-Board
    console.log(this.solved);
  }

  // Returns a string representing the current state of the board
  board() {
    console.log("Before Solve");
    console.log(this.big_board);
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
game.solve();
