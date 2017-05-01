"use strict"

class Sudoku {
  constructor(board_string) {
    this.sudokuArray = this.sudokuArray(board_string);
    this.sudokuZeroIndex = this.getZeroIndex();
    this.sudokuGuess = [1,2,3,4,5,6,7,8,9];

  }
  // return 2D array of sudoku
  sudokuArray(sudokuStr) {
    // Make 2D array from string
    let regx = /\d{9}/g;
    let arr = sudokuStr.match(regx)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("")
    }
    return arr;

  }

  // return array of zero index
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

  // return horizontal array of checked value
  horizontalArr(row) {
    let horizontalArr = [];
    for (let i = 0; i < this.sudokuArray.length; i++) {
      horizontalArr.push(this.sudokuArray[row][i]);
    }
    return horizontalArr;
  }

  //return vertical array of checked value
  verticalArr(column) {
    let vertikalArr = [];
    for (let i = 0; i < this.sudokuArray.length; i++) {
      vertikalArr.push(this.sudokuArray[i][column]);
    }
    return vertikalArr;
  }

  // return box array of checked value
  boxArr(x, y) {
    let boxCheckArr = [];
    let borderBox = this.boxGroup(x, y);
    let xMin = borderBox[0];
    let xMax = borderBox[1];
    let yMin = borderBox[2];
    let yMax = borderBox[3];
    for (let i = xMin; i < xMax; i++) {
      for (let j = yMin; j < yMax; j++) {
        boxCheckArr.push(this.sudokuArray[i][j]);
      }
    }
    return boxCheckArr;
  }

  // return box's border index [Xmin, Xmax, Ymin, Ymax]
  boxGroup(x, y) {
    if (x < 3 && y < 3) {
      return [0,3,0,3];
    } else if (x < 6 && y < 3) {
      return [3,6,0,3];
    } else if (x < 9 && y < 3) {
      return [6,9,0,3];
    } else if (x < 3 && y < 6) {
      return [0,3,3,6];
    } else if (x < 6 && y < 6) {
      return [3,6,3,6];
    } else if (x < 9 && y < 6) {
      return [6,9,3,6];
    } else if (x < 3 && y < 9) {
      return [0,3,6,9];
    } else if (x < 6 && y < 9) {
      return [3,6,6,9];
    } else if (x < 9 && y < 9) {
      return [6,9,6,9];
    }
  }

  // >> loop based on sudokuZeros.length
  // 1. make a guess array. >> array from [1,...,9]
  // 2. get the index of zero >> get the x and y coodinate
  // 3. check all the condition the vertikal, horizonal, and box of zero koordinate
  //    compare it with guess array >> true/false
  // 4. if true, it means the guessArrays value not founded yet, >> go to step 6
  // 5. if false, guessArray value is already there, continue
  // 6. update the value of zeroArray[i][j] to guesArray from first index guessArray.
  // 7. back to first step, until the loop complete
  // 8. display the solved board.
  solve() {
    for (let i = 0; i < this.sudokuZeroIndex.length; i++) {
      let xZero = this.sudokuZeroIndex[i][0];
      let yZero = this.sudokuZeroIndex[i][1];
      let rowArr = this.horizontalArr(xZero);
      console.log("-------row arrr ---------");
      console.log(rowArr);
      let columnArr = this.verticalArr(yZero);
      console.log("-------column arrr ---------");
      console.log(columnArr);
      let boxArr = this.boxArr(xZero, yZero);
      for (let j = 0; j < this.sudokuGuess.length; j++) {
        if (this.sudokuGuess[j] != rowArr[j] && this.sudokuGuess[j] == 0) {
          console.log("-------- row-------------");
          this.sudokuArray[xZero][yZero] = this.sudokuGuess[j];
        } else if (this.sudokuGuess[j] != columnArr[j] && this.sudokuGuess[j] == 0) {
          console.log("-------- horizontal-------------");
          this.sudokuArray[xZero][yZero] = this.sudokuGuess[j];
        } else if (this.sudokuGuess[j] != boxArr[j] && this.sudokuGuess[j] == 0) {
          console.log("--------box-------------");
          this.sudokuArray[xZero][yZero] = this.sudokuGuess[j];
        } else {
          continue;
        }
      }
    }
    return this.sudokuArray
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
console.log(game.solve());


//

// Remember: this will just fill out what it can and not "guess"
// game.solve()
//
// console.log(game.board())
