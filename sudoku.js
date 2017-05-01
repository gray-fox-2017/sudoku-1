"use strict";

class Sudoku {
  constructor(str) {
    this.str = str.split('');
    this.board = [];
    this.line = this.str.map( x => x + ' ');
  }

  solve() {

    var perbaris = []

    for (let i=0; i<this.line.length; i=+9) {
      perbaris.push(this.line.slice(i,i+9));
    }

    var perkolom = [];

    for (let i=0; i<9; i++) {
      perkolom.push(this.line[i]);
    }

    for (let i=9; i<=this.line.length;i+=9) {
      for (let a=1;a<=9;i++) {
        perkolom[i].push(this.line(i+a));
      }
    }

    function definite(line) {
      for (i=0;i<line.length;i++) {
        if (i === '0') {
          for (i=1;i<=9;i++) {

          }
        }
      }
    }
    return perkolom;
  }

  // Returns a string representing the current state of the board
  print_board() {

    for (let i=0; i<this.line.length; i+=9) {
      this.board.push(this.line.slice(i, i+9));
    }

    for (let i=0;i<this.board.length;i++) {
      this.board[i].splice(3,0,'| ');
      this.board[i].splice(7,0,'| ');
      var sejenak = this.board[i].join('');
      this.board[i]=sejenak;
    }

    for (let i = 3; i<this.board.length; i+=4) {
      this.board.splice(i,0,'------|-------|------')
    }

    return this.board.join('\n');
  }

}
 //The file has newlines at the end of each line,
 //so we call split to remove it (\n)
 var fs = require('fs');
 var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
   .toString()
   .split("\n")[0];

var game = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900');

// Remember: this will just fill out what it can and not "guess"
console.log(game.solve());
