/*
	===== Belajar Generic =====
  
  Generic merupakan sintaks atau expression
  yang berfungsi untuk membuat sebuah function
  dalam typescript akan mereturn tipe datanya
  sesuai dengan tipe data dari parameternya.
  
  rumus generic :
  a. function biasa
     function namaFunction<T>(parameter: T) {
			return parameter;
		 }
	b. arrow function
     const namaFunction = <T>(parameter: T) => {
			return parameter;
		 }

  catatan :
  <T> atau T nya dapat diubah
  menjadi huruf apapun, tapi biasanya
  kita menggunkan huruf T (sudah menjadi standar).
  
  ketika kita menggunakan jsx penulisan functionnya
  seperti dibawah :
  a. Function Biasa
     function namaFunction<T extends {}>(value: T) {
			return value;
		 }
	b. Arrow Function
     const namaFunction = <T extends {}>(value: T) => {
			return value;
		 }
*/
/*function getData(value: any) {
	return value;
}*/


/*function getData<T>(value: T) {
	return value;
}*/

const getData = <T>(value: T) => {
	return value;
}

console.log(getData('Typescript').length);
console.log(getData(123));


