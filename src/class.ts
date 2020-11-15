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

export class Students {
	public name: string;
	private nim: string;
	protected age: number;

	constructor(name: string, nim: string, age: number) {
		this.name = name;
		this.nim = nim;
		this.age = age;
	}

	public getNim(): void {
		console.log(this.nim);
	}
}

const mathius2 = new Students('Mathius', '102939', 18);
console.log(mathius2);
mathius2.getNim();

