/*
	===== Belajar Object =====

 Object pada TypeScript bersifat immutable
 maksudnya setiap kita sudah  mendeklarasikan
 sebuah object, maka kita tidak akan dapat
 mengisi ulang objectnya dengan property yang
 berbeda ataupun jumlahnya kurang.
*/
let mhs = {
	name: 'Mathius Kormasela',
	age: 18
};

/*mhs = {
	age: 18,
	name: 'Matthew Kormasela'
}*/

type Mahasiswa = {
	name: string,
	age: number
};

let mathius: Mahasiswa = {
	name: 'Matthew',
	age: 19
}

mathius.name = 'Machi';

console.log(mathius);
