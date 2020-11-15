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
function sayHello(): string {
	return 'Mina-san konnichiwa watashi wa Machi desu.';
}

console.log(sayHello());

function sayAge(): number {
	return 18;
}

console.log('Watashi wa ' +  sayAge() + ' desu');

// Function without return statement
function jikoshoukai(): void {
	console.log('Mina-san konnichiwa, watashi wa Machi soshite Indonesia jin desu');
}

jikoshoukai();

function multiply(x: number, y: number): number {
	return x * y;
}

const result = multiply(2, 5);
console.log('Hasilnya adalah', result);

// Function sebagai tipe data
type Usia = number;

let sai: Usia = 18;
console.log(sai);

type Tambah = (val1: number, val2: number) => number;

const add: Tambah = (x: number, y:number): number => {
	return x + y;
}
console.log(add(2, 8));

// Default Parameter
const printName = (nawa: string, kazoku: string = 'Uzumaki') => kazoku + ' ' + nawa;
console.log(printName('Naruto', 'Namikaze'));

// Optional Parameter
// Optional Parameter jgn digunakan untuk function yg mengembalikan number
const printText = (x: string, y?: string): string => {
	return x + ' ' + y;
}

console.log(printText('Mathius'));
