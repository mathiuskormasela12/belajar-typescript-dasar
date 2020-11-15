"use strict";
/*
    ===== Belajar Overriding =====

 Overriding adalah sebuah konsep dalam
 OOP yang berfungsi untuk mengakses method
 yang berada di dalam Parent Class jika
 method pada parent class yang ingin dipanggil memiliki
 nama yang sama dengan method yang ada
 di dalam Child Class nya.

 Di Dalam Typescript kita menggunakan
 statement super() untuk melakukan overriding.
*/
class BelajarCoding {
    constructor(frontend, backend) {
        this.frontend = [];
        this.backend = [];
        frontend.forEach(item => {
            this.frontend.push(item);
        });
        backend.forEach(item => this.backend.push(item));
    }
    getFrontend() {
        return this.frontend;
    }
}
class Backend extends BelajarCoding {
    constructor(frameworks, frontend, backend) {
        super(frontend, backend);
        this.frameworks = [];
        this.frameworks = frameworks;
    }
    getFrameworks() {
        return this.frameworks;
    }
    getFrontend() {
        this.frontend.forEach(item => console.log(item));
        return super.getFrontend();
    }
}
const mulai = new Backend(['Express Js', 'React Js', 'Styled Components'], ['HTML', 'CSS', 'Javascript'], ['Node js', 'MySQL']);
console.log(mulai.getFrontend());
console.log(mulai.getFrameworks());
