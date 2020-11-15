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
	protected frontend: string[] = [];
	protected backend: string[] = [];

	constructor(frontend: string[], backend: string[]) {
		frontend.forEach(item => {
			this.frontend.push(item);
		});

		backend.forEach(item => this.backend.push(item));
	}

	public getFrontend(): string[] {
		return this.frontend;
	}
}

class Backend extends BelajarCoding {
	private frameworks: string[] = [];

	constructor(frameworks: string[], frontend: string[], backend: string[]) {
		super(frontend, backend);
		this.frameworks = frameworks;
	}

	public getFrameworks(): string[] {
		return this.frameworks;
	}

	public getFrontend(): any {
		this.frontend.forEach(item => console.log(item));
		return super.getFrontend();
	}
}

const mulai = new Backend(['Express Js', 'React Js', 'Styled Components'], ['HTML', 'CSS', 'Javascript'], ['Node js', 'MySQL']);
console.log(mulai.getFrontend());
console.log(mulai.getFrameworks());
