"use strict";
class User {
    constructor(username) {
        this.getName = () => {
            return this.username;
        };
        this.username = username;
    }
    setName(username) {
        this.username = username;
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.write = true;
        this.read = true;
    }
    getRole() {
        return {
            write: this.write,
            read: this.read
        };
    }
}
const admin = new Admin('Mathius');
console.log(admin.getName());
admin.setName('Machi');
console.log(admin.getName());
console.log(admin.getRole());
