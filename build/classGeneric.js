"use strict";
/*
    ===== Belajar Class Generic =====
*/
class List {
    constructor(...elements) {
        this.data = elements;
    }
    addSingle(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
/*const language = new List<string>('Java', 'Python', 'Pascal');
language.addSingle('C++');
language.addMultiple('PHP', 'Javascript', 'Typescript');
console.log(language.getAll());*/
const random = new List('Mathius', 12, true);
random.addSingle(18);
random.addMultiple(false, 10, 'oak');
console.log(random.getAll());
