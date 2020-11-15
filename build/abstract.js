"use strict";
/*
    ===== Belajar Class Abstract =====
  
  Abstract Class adalah sebuah class yang
  tidak bisa di instansiasi. Jadi untuk
  menginstansiasi class abstract kita
  harus menginstansiasi parent classnya.
  Abstract class juga harus memiliki
  setidaknya satu method abstract yang
  akan di implementasikan di child classnya.

  rumus :
  abstract class NamaClass {
     visibility abstract namaProperty: dataType;
     visibility abstract namaMethod(): dataType;
    }
*/
class People {
}
class Matthew extends People {
    constructor() {
        super(...arguments);
        this.nama = 'Mathius';
    }
    getNama() {
        return this.nama;
    }
    hello() {
        console.log(`Mina-san konnichiwa watashi wa ${this.nama} desu.`);
    }
}
const mat = new Matthew();
console.log(mat.getNama());
mat.hello();
