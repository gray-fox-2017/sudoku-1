"use strict"

class Sudoku {
  constructor(board_string) {
    this._board = board_string;
  }

  checkRow(board,col,num){
    for(let row=0; row<9; row++)
      if(board[row][col]===num)
        return false;

    return true;
  }

  checkCol(board,row,num){
    for(let col=0; col<9; col++)
      if(board[row][col]===num)
        return false;

    return true;
  }

  check3x3(board,row,col,num){
    let startRow=row-row%3;
    let startCol=col-col%3;

    for(let row=0; row<3; row++)
      for(let col=0; col<3; col++)
        if(board[row+startRow][col+startCol]===num)
          return false;

    return true;
  }

  isAvailable(cell,row,col,num){
    let board=this._board
    if(cell===0){
      let available =(this.checkCol(board,row,num)&&this.checkRow(board,col,num)&&this.check3x3(board,row,col,num))?true:false;
      return available;
    }
    else return false;
  }

  solve(board=this._board) {
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        for(let num=1;num<=9;num++){
          if(this.isAvailable(board[i][j],i,j,num)){
            board[i][j]=num;
          }
        }
      }
    }

    this._board=board;
  }

  sudokuBoard() {
    let arrSplit = this._board.split('');
    let res=[];
    for(let i=0; i<arrSplit.length;i+=9){
      let arr=[];
      for(let j=i; j<i+9; j++)
      arr.push(+arrSplit[j]);
      res.push(arr)
    }

    return this._board=res;
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
console.log('\n')
console.log('unsolved');
console.log(game.sudokuBoard())
game.solve()
console.log('\n')
console.log('solved');
console.log(game._board);
