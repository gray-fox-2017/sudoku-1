"use strict"

class Sudoku {
  constructor(board_string) {
    this.boardLength = 9 ;
    this.content = this.matrix(board_string);
  }

  matrix(str) {
    let board = [];
    for (var i = 0, idx = 0; i < this.boardLength; i++) {
      let arr = [];
      board.push(arr);
      for (var j = 0; j < this.boardLength; j++, idx++) {
        if (str[idx] != undefined) {
          board[i].push(parseInt(str[idx]))
        } else {
          board[i].push(0)
        }
      }
    }
    return board;
  }

  checkColoumn(checker, i, j) {

    for (var c = 0; c < this.boardLength; c++) {
      if(checker == this.content[c][j]) {
        return false
      }
    }
    return true;
  }

  checkRow(checker, i, j) {

    for (var r = 0; r < this.boardLength; r++) {
      if(checker == this.content[i][r]) {
        return false
      }
    }
    return true;
  }

  checkBlock(checker, i, j) {

    let rowStart = Math.floor(i / 3) * 3;
    let coloumnStart = Math.floor(j / 3) * 3;
    for (var k = rowStart; k < Math.sqrt(this.boardLength) + rowStart ; k++) {
      for (var l = coloumnStart; l < Math.sqrt(this.boardLength) + coloumnStart ; l++) {
        if (checker == this.content[k][l]) {
          return false;
        }
      }
    }
    return true;
  }

  solve() {
    for (var i = 0; i < this.boardLength; i++) {
      for (var j = 0; j < this.boardLength; j++) {
        if (this.content[i][j] == 0) {

          for (var k = 1; k < 10; k++) {
            if (this.checkColoumn(k, i, j) && this.checkRow(k, i, j) && this.checkBlock(k, i, j)) {
              this.content[i][j] = k ;
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
    let layout = "+++++++++++++++++++++++\n";
    for (var i = 0; i < this.boardLength ; i++) {
      for (var j = 0; j < this.boardLength; j++) {
        if (j == 8) {
          layout += this.content[i][j] + " + ";
        } else if (j == 2 || j == 5) {
          layout += this.content[i][j] + " | ";
        } else {
          layout += this.content[i][j] + " ";
        }
      }

      if (i == 2 | i == 5 | i == 8) {
        layout += "\n+++++++++++++++++++++++\n";
      } else {
        layout += "\n"
      }
    }
    return layout;
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
console.log("Sudoku before solve");


console.log(game.board())

console.log("Sudoku after solve");
game.solve()
console.log(game.board())
// console.log(game.content)
