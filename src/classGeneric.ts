/*
	===== Belajar Class Generic =====
*/
class List<T> {
	private data: T[];

	constructor(...elements: T[]) {
		this.data = elements;
	}

	public addSingle(element: T): void {
		this.data.push(element);
	}

	public addMultiple(...elements: T[]): void {
		this.data.push(...elements);
	}

	public getAll(): T[] {
		return this.data;
	}
}

/*const language = new List<string>('Java', 'Python', 'Pascal');
language.addSingle('C++');
language.addMultiple('PHP', 'Javascript', 'Typescript');
console.log(language.getAll());*/

const random = new List<string | boolean | number>('Mathius', 12, true);
random.addSingle(18);
random.addMultiple(false, 10, 'oak');
console.log(random.getAll());
