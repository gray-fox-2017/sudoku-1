"use strict"

class Sudoku {
  constructor(board_string) {
    this.tmp = board_string;
    this.BoardPertama = this.CreateBoard(board_string);
    this.UnsolveBoard = this.CreateBoard(board_string);
    this.ZeroIndex = this.FindZeroIndex();
    this.Expect = "123456789".split("");
  }

  CreateBoard() {
      this.tmp = board_string.split("");
      let BoardCointainerUnsolve = [];
      for (let i = 0;i < 9; i++ ){
          var column = [];
          for (let j = 0; j < 9; j++){
              column[j] = this.tmp[j];
          }
          BoardCointainerUnsolve.push(column);
          this.tmp = this.tmp.slice(9)
      }
      return BoardCointainerUnsolve;
  }
    //return Horizontal array of checked value

    HolizontalRow(row) {
        let ArrHolizontal = [];
        for (let i = 0; i < this.UnsolveBoard.length; i++) {
            ArrHolizontal.push(this.UnsolveBoard[row][i]);
        }
        return ArrHolizontal;
    }
    //column
    VerticalRow(column) {
        let ArrVertikal = [];
        for (let i = 0; i < this.UnsolveBoard.length; i++) {
            ArrVertikal.push(this.UnsolveBoard[i][column]);
        }
        return ArrVertikal;
    }

    FindZeroIndex() {
        let indexArr = []
        for (let i = 0; i < this.UnsolveBoard.length; i++) {
            for (let j = 0; j < this.UnsolveBoard.length; j++) {
                let tempIndex = [];
                if (this.UnsolveBoard[i][j] == 0) {
                    tempIndex.push(i);
                    tempIndex.push(j);
                    indexArr.push(tempIndex);
                }
            }
        }
        return indexArr;
    }

    boxArr(x, y) {
        let boxCheckArr = [];
        let borderBox = this.boxGroup(x, y);
        let xMin = borderBox[0];
        let xMax = borderBox[1];
        let yMin = borderBox[2];
        let yMax = borderBox[3];
        for (let i = xMin; i < xMax; i++) {
            for (let j = yMin; j < yMax; j++) {
                boxCheckArr.push(this.UnsolveBoard[i][j]);
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

    solve() {
        for (let i = 0; i < this.ZeroIndex.length; i++) {
            let xZero = this.ZeroIndex[i][0];
            let yZero = this.ZeroIndex[i][1];
            let rowArr = this.HolizontalRow(xZero);
            let columnArr = this.VerticalRow(yZero);
            let boxArr = this.boxArr(xZero, yZero);
            for (let j = 0; j < this.Expect.length; j++) {
                if (columnArr.indexOf(this.Expect[j]) == -1 && boxArr.indexOf(this.Expect[j]) == -1 && rowArr.indexOf(this.Expect[j]) == -1) {
                    this.UnsolveBoard[xZero][yZero] = this.Expect[j];
                }
            }
        }
        return this.UnsolveBoard;
    }

  // Returns a string representing the current state of the board
  board() {
      return this.BoardPertama;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string);
console.log("--Unsolved Board--");
console.log(game.board());
console.log("\n");
console.log("--Solved Board--");
console.log(game.solve());

// Remember: this will just fill out what it can and not "guess"
game.CreateBoard();
