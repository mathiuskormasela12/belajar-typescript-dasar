"use strict";
/*
    ==== Belajar Inheritance ====

 Inheritance atau pewarisan adalah
 sebuah konsep dalam OOP dimana suatu
 class (Child Class) itu mewarisi property-property &
 method-method dari class lain (Parent Class)
*/
class Users {
    constructor(nama, usia, menikah) {
        this.getUsia = () => this.usia;
        this.nama = nama;
        this.usia = usia;
        this.menikah = menikah;
    }
    getName() {
        return this.nama;
    }
}
class Adm extends Users {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
}
const matthew = new Adm('Mathius', 18, true);
console.log(matthew.getName());
console.log(matthew.getUsia());
console.log(matthew.getRole());
