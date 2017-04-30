"use strict"

class Sudoku {
  constructor(board_string) {
    this.sudokuBoard = 9;
    this.number = [1,2,3,4,5,6,7,8,9];
    this.boards = this.toMatrix(board_string);
  }

  toMatrix(board_string) {
    let matrix = [];
    for (let i=0, num = 0; i<this.sudokuBoard; i++) {
      matrix.push([]);
      for (let j = 0; j < this.sudokuBoard; j++, num++) {
        if (board_string[num] != undefined) {
          matrix[i].push(parseInt(board_string[num]));
        } else {
          matrix[i].push(0);
        }
      }
    }
    return matrix;
  }

  checkColumn(value, i, j) {
    //true jika kolom tidak ada yang sama
    for (let k = 0; k < this.sudokuBoard; k++) {
      if (value == this.boards[j][k]) {
        return false;
      }
    }
    return true;
  }

  checkRow (value, i,j) {
    //true jika row tidak ada yang sama
    for  (let k=0; k < this.sudokuBoard; k++) {
      if (value == this.boards[i][k]) {
        return false;
      }
    }
    return true;
  }

  solve() {
    for (let i=0; i< this.sudokuBoard; i++) {
      for (let j=0; j<this.sudokuBoard; j++) {
          if (this.boards[i][j] ==0) {
            for (let k=0; k<this.number.length; k++) {
              if(this.checkRow(this.number[k],i,j) && this.checkColumn(this.number[k], i, j)) {
                this.boards[i][j] = this.number[k];
                break;
              }
            }
          }
      }
    }
    return this;
  }

  // Returns a string representing the current state of the board
  board() {
    let str = "------------------------------------------\n";
    for (let i=0; i < this.sudokuBoard; i++) {
      for (let j=0; j<this.sudokuBoard; j++) {
        if (j == 8 ) {
          str += this.boards[i] [j] + "\n";
        } else if (j == 2 || j == 5) {
            str += this.boards[i][j] + "   |   ";
        } else {
          str += this.boards[i][j] + "   ";
        }
      }
      if ( i==2 | i==5 | i == 8) {
        str += "\n------------------------------------------\n"
      } else {
        str += "\n"
      }
    }
    return str;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)
// console.log("board :" +board_string);

console.log("BOARD BEFORE SOLVED");
console.log(game.board());

// Remember: this will just fill out what it can and not "guess"
console.log("BOARD AFTER SOLVED");
game.solve()
console.log(game.board())
