"use strict";
/*
    ===== Belajar Class =====

 Class merupakan sebuah template
 untuk membuat object.

 rumus :
    export class NamaClass {
        public namaProperty: dataType;
      protected namaProperty2: dataType;
      private namaProperty3: dataType;

     constructor(namaProperty: dataType, namaProperty2: dataType, namaProperty3: dataType) {
        this.namaProperty = namaProperty;
      this.namaProperty2 = namaProperty2;
      this.namaProperty3 = namaProperty3;
     }

    }

  const namaObject = new NamaClass('property', 'property2', 'property3')
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
class Students {
    constructor(name, nim, age) {
        this.name = name;
        this.nim = nim;
        this.age = age;
    }
    getNim() {
        console.log(this.nim);
    }
}
exports.Students = Students;
const mathius2 = new Students('Mathius', '102939', 18);
console.log(mathius2);
mathius2.getNim();
