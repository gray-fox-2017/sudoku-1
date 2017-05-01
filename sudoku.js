"use strict"

class Sudoku {
  constructor(board_string) {
    this.sudokuArray = this.sudokuArray(board_string);
    this.sudokuZeros = this.getZeroIndex();

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

  getZeroIndex() {
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
    }
    return indexArr;
  }

  checkAll() {}

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

  boxCheck(koordinatArr) {
    // check in box
    let boxCheckArr = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 6; j++) {
        boxCheck.push(arr[i][j]);
      }
    }
    return boxCheckArr;
  }

  // return border index
  boxGroup(x, y) {
    if (x < 3 && y < 3) {
      return [3,3];
    } else if (x < 6 && y < 3) {
      return [6,3];
    } else if (x < 9 && y < 3) {
      return [9,3];
    } else if (x < 3 && y < 6) {
      return [3,6];
    } else if (x < 6 && y < 6) {
      return [6,6];
    } else if (x < 9 && y < 6) {
      return [9,6];
    } else if (x < 3 && y < 9) {
      return [3,9];
    } else if (x < 6 && y < 9) {
      return [6,9];
    } else if (x < 9 && y < 9) {
      return [9,9];
    }
  }

  solve() {
    // >> loop based on sudokuZeros.length
    // 1. get the index of zero >> get the x and y coodinate
    // 2. make a guess array. >> array from [1,...,9]
    // 3. check all the condition the vertikal, horizonal, and box from zero koordinat
    // with the guess array >> true/false
    // 4. if true, it means the guessArrays value not founded yet, >> go to step 6
    // 5. if false, guessArray value is already there, continue
    // 6. update the value of zeroArray[i][j] to guesArray from first index guessArray.
    // 7. back to first step, until the loop complete
    // 8. display the solved board.

  }

  // Returns a string representing the current state of the board
  board() {

  }
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
console.log(game.boxGrup(6, 2));


//

// Remember: this will just fill out what it can and not "guess"
// game.solve()
//
// console.log(game.board())
