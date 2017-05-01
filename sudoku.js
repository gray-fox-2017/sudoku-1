"use strict";

class Sudoku {
  constructor(str) {
    this.str = str.split('');
    this.board = [];
    this.line = this.str.map( x => x + ' ');
    this.zero = []
    this.baris = []
    this.kolom = []
    this.kotak = []
  }

  daftar_zero() {
    for (let i=0;i<this.str.length;i++) {
      if (this.str[i] === '0') {
        this.zero.push(i);
      }
    }

    return this.zero
  }

  group_baris() {
    for (let i=0; i<this.str.length; i+=9) {
      this.baris.push(this.str.slice(i,i+9));
    }

    return this.baris
  }

  group_kolom() {

    var kolomSementara = []

    for (let i=0; i<9;i++) {
      for (let a=0; a<this.str.length; a+=9) {
        kolomSementara.push(this.str[a+i]);
      }
    }

    for (let i=0; i<kolomSementara.length; i+=9) {
      this.kolom.push(kolomSementara.slice(i, i+9))
    }
    return this.kolom;
  }

  group_kotak() {

    var kotakSementara = [];


    for (let i=0;i<this.str.length;i+=3) {
      kotakSementara.push((this.str.slice(i,i+3)).join(''))
    }

    return kotakSementara;

  }

  solve() {}

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
console.log(game.group_kotak());
