/*
	===== Belajar Class Abstract =====
  
  Abstract Class adalah sebuah class yang
  tidak bisa di instansiasi. Jadi untuk 
  menginstansiasi class abstract kita
  harus menginstansiasi parent classnya.
  Abstract class juga harus memiliki
  setidaknya satu method abstract yang
  akan di implementasikan di child classnya.

  rumus :
  abstract class NamaClass {
	 visibility abstract namaProperty: dataType;
	 visibility abstract namaMethod(): dataType;
	}
*/

abstract class People {
	public abstract  nama: string;
	public abstract getNama(): string;
}

class Matthew extends People {
	public nama: string = 'Mathius';

	public getNama(): string {
		return this.nama;
	}

	public hello(): void {
	 console.log(`Mina-san konnichiwa watashi wa ${this.nama} desu.`);
	}
}

const mat = new Matthew();
console.log(mat.getNama());
mat.hello();
