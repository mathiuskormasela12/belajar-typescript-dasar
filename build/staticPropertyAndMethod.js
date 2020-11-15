"use strict";
/*
    ===== Belajar Static Property & Method =====

  A. Static Property
     Static property adalah sebuah property
         di dalam class yang dapat diakses
         tanpa perlu menginstansiasi classnya.
         
         rumus :
         visibility static namaProperty: dataType = value;

    B. Static Method
     Static method adalah sebuah method
         di dalam class yang dapat diakses
         tanpa perlu menginstansiasi classnya.
         
         rumus :
         visibility static namaMethod(): dataType {
            statement;
         }
*/
class BelajarStatic {
    static getNama() {
        return this.nama;
    }
}
BelajarStatic.nama = 'Mathius';
console.log(BelajarStatic.nama);
console.log(BelajarStatic.getNama());
