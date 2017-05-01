"use strict"

class Sudoku {
  constructor(board_string) {
    this.sudokuArray = this.sudokuArray(board_string);

  }
  sudokuArray(sudokuStr) {
    // Make 2D array from string
    let regx = /\d{9}/g;
    let arr = sudokuStr.match(regx)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("")
    }
    return arr;

  }
  verticalCheck(column) {
    // check vertikal
    let vertikalArr = [];
    for (let i = 0; i < this.sudokuArray.length; i++) {
      vertikal.push(this.sudokuArray[i][column]);
    }
    return vertikalArr;
  }
  horizontalCheck(row) {
    // check horizontal
    let horizontalArr = [];
    for (let i = 0; i < this.sudokuArray.length; i++) {
      vertikalArr.push(this.sudokuArray[row][i]);
    }
    return vertikalArr;
  }
  getIndex() {
    // make 2D array of index values of zero
    let indexArr = []
    for (let i = 0; i < this.sudokuArray.length; i++) {
      for (let j = 0; j < this.sudokuArray.length; j++) {
        let tempIndex = [];
        if (this.sudokuArray[i][j] == 0) {
          tempIndex.push(i);
          tempIndex.push(j);
          indexArr.push(tempIndex);
        }
      }
      // indexArr.push(tempIndex);
    }
    return indexArr;
  }
  boxCheck() {
    // check in box
    let boxCheck = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 6; j++) {
        boxCheck.push(arr[i][j]);
      }
    }
    console.log(boxCheck);
  }
  solve() {}

  // Returns a string representing the current state of the board
  board() {}
}

// TEST !
// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
.toString()
.split("\n")[0]

console.log(board_string);

var game = new Sudoku(board_string)
console.log(game);
console.log(game.getIndex());


//

// Remember: this will just fill out what it can and not "guess"
// game.solve()
//
// console.log(game.board())
