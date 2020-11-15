"use strict";
/*
    ==== Belajar Variable ====

 Typescript merupakan sebuah bahasa pemrograman
 yang static type, maksudnya ketika kita sudah
 assign sebua variable dengan tipe data tertentu
 maka kita tidak bisa assign ulang dengan tipe
 data lain.
 
 rumus membuat varible:
 let namaVariable = value;
 let namaVariable: dataType = value;
*/
// tipe data string
// variable nama tidak bisa di assing ulang dengan tipe data lain selain string
let nama = 'Mathius';
nama = "Matthew";
console.log('Hello', nama);
// tipe data number
let usia = 18;
usia = 20;
console.log('Saya berusia ' + usia + ' tahun');
// tipe data boolean
let javascriptDev = true;
console.log(javascriptDev);
// tipe data any
// bisa di isi oleh tipe data apapun
// dan bisa di reassign dengan tipe data yg berbeda
let x = 10;
x = '10';
x = true;
console.log(x);
/*
    ===== Belajar Tipe Data Union =====
 Type Data Union berfungsi untuk membuat
 sebuah variable boleh memiliki lebih
 dari satu tipe data.
*/
let phone;
phone = 62837482;
phone = '08238383';
console.log(phone);
