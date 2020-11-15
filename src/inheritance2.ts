/*
	==== Belajar Inheritance ====

 Inheritance atau pewarisan adalah
 sebuah konsep dalam OOP dimana suatu
 class (Child Class) itu mewarisi property-property &
 method-method dari class lain (Parent Class)
*/
class Users {
	
	public nama: string;
	protected usia: number;
	private menikah: boolean;

	constructor(nama: string, usia: number, menikah: boolean) {
		this.nama = nama;
		this.usia = usia;
		this.menikah = menikah;
	}

	public getName(): string {
		return this.nama;
	}

  public getUsia = (): number => this.usia;

}

class Adm extends Users {
	private read: boolean = true;
	private write: boolean = true;

	public getRole(): { read: boolean, write: boolean  } {
		return {
			read: this.read,
			write: this.write
		}
	}
}

const matthew = new Adm('Mathius', 18, true);
console.log(matthew.getName());
console.log(matthew.getUsia());
console.log(matthew.getRole());
