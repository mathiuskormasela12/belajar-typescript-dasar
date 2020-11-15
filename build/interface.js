"use strict";
/*
    ===== Belajar Interface =====
  
  Interface adalah sebuah template
  untuk membuat sebuah class. Interface
  ini mirip seperti class abstract
  namun interface ini semua method dan
  propertynya harus abstract dan akan
  di implementasi di child class nya.
  
  rumus membuat interface :
  
  interface namaInterface {
        namaProperty: dataType;
      namaMethod(): dataType;
    }

  rumus implement interface
  
  class NamaClass implements NamaInterface {
   visibility namaPropertyDiInterface: dataType = value;
     visibility namaMethodDiInterface(): dataType {
      statements;
     }
    }
  
*/
class Asus {
    constructor(nama, isGaming) {
        this.nama = nama;
        this.isGaming = isGaming;
    }
    on() {
        console.log('Nyalakan Laptop Asus');
    }
    off() {
        console.log('Matikan Laptop Asus');
    }
}
const asus = new Asus('Asus A456UR', true);
console.log(asus.on());
