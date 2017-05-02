"use strict"

class Sudoku {
  constructor(board_string) {
    this.default_board = []
    this.str = board_string
    this.tes = Math.ceil((Math.random() * 9 )+ 1);
    this.str2 = board_string.replace(/0/gi, this.tes)
    this.test = []
  }
  default() {
    for (let i = 0; i<this.str.length; i+=9) {
      this.tamp = []
      for (let k = i; k<i+9; k++) {
        this.tamp.push(parseInt(this.str[k]))
      }
      this.default_board.push(this.tamp)
    }
    for (let j = 0; j<9; j++) {
      this.default_board[j].splice(3, 0, "|")
      this.default_board[j].splice(7, 0, "|")
    }
    for (let l= 0; l < 16; l+=4) {
      this.default_board.splice(l, 0, "--------------------------------------")
    }
    // console.log(this.real_board);
    //console.log("panjang board : "+this.default_board.length);
    return this.default_board
  }

  randomSolve() {
    for (let i = 0; i<this.str2.length; i+=9) {
      this.tamp = []
      for (let k = i; k<i+9; k++) {
        this.tamp.push(parseInt(this.str2[k]))
      }
      this.test.push(this.tamp)
    }
    for (let j = 0; j<9; j++) {
      this.test[j].splice(3, 0, "|")
      this.test[j].splice(7, 0, "|")
    }
    for (let l= 0; l < 16; l+=4) {
      this.test.splice(l, 0, "--------------------------------------")
    }
    // console.log(this.real_board);
    //return this.test
    console.log(this.test);
  }


  solve() {
    // this.test = this.default_board
    // let num = Math.ceil(Math.random()*9) + 1;
    // for (let i = 0; i<9; i++) {
    //   for (let j =0; j<9; j++) {
    //     if (this.default_board[i][[j]] === 0) {
    //       this.test[i][j] = num
    //     }
    //   }
    // }
    // console.log(this.test);
  }
  cekZone() {

  }


  // Returns a string representing the current state of the board
  board() {
    console.log(this.default());
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.board()
console.log("solve random : ");
game.randomSolve()

//console.log(game.board())
