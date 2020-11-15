"use strict";
/*
    ===== Belajar Function =====

    A. Function with return statement

     function namaFunction(): dataType {
            return;
         }

    B. Function without return statement
     
     function namaFunction(): void {
            // statement
         }
*/
// Function with return statement
function sayHello() {
    return 'Mina-san konnichiwa watashi wa Machi desu.';
}
console.log(sayHello());
function sayAge() {
    return 18;
}
console.log('Watashi wa ' + sayAge() + ' desu');
// Function without return statement
function jikoshoukai() {
    console.log('Mina-san konnichiwa, watashi wa Machi soshite Indonesia jin desu');
}
jikoshoukai();
function multiply(x, y) {
    return x * y;
}
const result = multiply(2, 5);
console.log('Hasilnya adalah', result);
let sai = 18;
console.log(sai);
const add = (x, y) => {
    return x + y;
};
console.log(add(2, 8));
// Default Parameter
const printName = (nawa, kazoku = 'Uzumaki') => kazoku + ' ' + nawa;
console.log(printName('Naruto', 'Namikaze'));
// Optional Parameter
// Optional Parameter jgn digunakan untuk function yg mengembalikan number
const printText = (x, y) => {
    return x + ' ' + y;
};
console.log(printText('Mathius'));
