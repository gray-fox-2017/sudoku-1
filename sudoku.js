"use strict"

class Sudoku {
  constructor(board_string) {
    this.puzzle = board_string;
    this.awal = [];
  }

  solve() {
    let array = this.awal;

    let kosong = [];
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length; j++) {
        if(array[i][j] == '0') kosong.push([i, j])
      }
    }

    // let kandidat = [];
    for(let i = 0; i < kosong.length; i++) {
      let listAngka = '123456789'
      for(let j = 0; j < array.length; j++) {
        listAngka = listAngka.replace(array[kosong[i][0]][j], '');
        listAngka = listAngka.replace(array[j][kosong[i][1]], '');
        if(j < 3) {
          for(let k = 0; k < 3; k++) {
            if(0 <= kosong[i][0] && kosong[i][0] <= 2) {
              if(0 <= kosong[i][1] && kosong[i][1] <= 2) {
                listAngka = listAngka.replace(array[j][k], '')
              }
              if(3 <= kosong[i][1] && kosong[i][1] <= 5) {
                listAngka = listAngka.replace(array[j][k + 3], '')
              }
              if(6 <= kosong[i][1] && kosong[i][1] <= 8) {
                listAngka = listAngka.replace(array[j][k + 6], '')
              }
            }
            if(3 <= kosong[i][0] && kosong[i][0] <= 5) {
              if(0 <= kosong[i][1] && kosong[i][1] <= 2) {
                listAngka = listAngka.replace(array[j + 3][k], '')
              }
              if(3 <= kosong[i][1] && kosong[i][1] <= 5) {
                listAngka = listAngka.replace(array[j + 3][k + 3], '')
              }
              if(6 <= kosong[i][1] && kosong[i][1] <= 8) {
                listAngka = listAngka.replace(array[j + 3][k + 6], '')
              }
            }
            if(6 <= kosong[i][0] && kosong[i][0] <= 8) {
              if(0 <= kosong[i][1] && kosong[i][1] <= 2) {
                listAngka = listAngka.replace(array[j + 6][k], '')
              }
              if(3 <= kosong[i][1] && kosong[i][1] <= 5) {
                listAngka = listAngka.replace(array[j + 6][k + 3], '')
              }
              if(6 <= kosong[i][1] && kosong[i][1] <= 8) {
                listAngka = listAngka.replace(array[j + 6][k + 6], '')
              }
            }
          }
        }
      }
      kandidat[i] = listAngka.split('');
      if(listAngka !== '') {
        array[kosong[i][0]][kosong[i][1]] = kandidat[i].splice(0, 1);
      }
    }

    this.random();
    return this.awal;
  }

  plain() {
    this.awal = [];
    for(let i = 0; i < 9; i++) {
      this.awal[i] = this.puzzle.slice(9 * i, (9 * (i + 1)))
      this.awal[i] = this.awal[i].split('')
    }
    return this.awal;
  }

  random() {
    let array = this.awal;

    let kosong = [];
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length; j++) {
        if(array[i][j] == '0') kosong.push([i, j])
      }
    }

    for(let i = 0; i < kosong.length; i++) {
      array[kosong[i][0]][kosong[i][1]] = Math.ceil(Math.random() * 9);
    }
    return this.awal;
  }
  // Returns a string representing the current state of the board
  board() {
    let row = this.awal;
    for(let i = 0; i < 9; i++) {
      row[i].splice(3, 0, '|');
      row[i].splice(7, 0, '|');
      row[i] = row[i].join(' ');
    }
    let pembatas = [];
    for(let i = 0; i < row[0].length; i++) {
      pembatas.push('-')
    }
    pembatas = pembatas.join('')
    for(let i = 0; i < 4; i++) {
      row.splice(i*4, 0, pembatas)
    }
    return row.join('\n');
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)
var game2 = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900')

// Remember: this will just fill out what it can and not "guess"
// game.plain()
// game.solve()
// console.log(game.board())
game2.plain()
console.log(game2.board())
game2.plain()
game2.solve()
console.log(game2.board())