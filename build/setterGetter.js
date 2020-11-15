"use strict";
/*
    ===== Belajar Setter & Getter =====

 A. Setter
    Setter berfungsi untuk mengubah atau
      memberi nilai sebuah property di dalam
    sebuah class. Dengan setter kita juga
      tidak hanya bisa memberi nilai atau mengubah
      nilai property tapi juga kita dapat melakukan
      validasi ketika kita ingin memberi atau mengubah
      nilai suatu propety.

      rumus :
      set namafunction() {
            statement;
        }
      
      ket :
      setter tidak boleh ada keyword
      return dan functionnya tidak boleh
      memiliki tipe data, yang boleh
      memiliki tipe data adalah
      hanya parameternya saja.
    
 B. Getter
    Getter berfungsi untuk mengambil
      nilai dari sebuah property.
      
      rumus :
      get namaFunction(): dataType {
       statement;
        }
*/
class Latihan {
    constructor(email) {
        this.email = email;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        if (email.split('@')[1].includes('gmail'))
            this.email = email;
        else
            console.log('Email harus gmail');
    }
}
const belajar = new Latihan('samdicova@gmail.com');
console.log(belajar.getEmail);
belajar.setEmail = 'mathiuskormasela12rpl@yahoo.com';
console.log(belajar.getEmail);
