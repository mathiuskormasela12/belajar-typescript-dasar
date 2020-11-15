class User {
	private username: string;

	constructor(username: string) {
		this.username = username;
	}

	public setName(username: string): void {
		this.username = username;
	}

	public getName = ():string => {
		return this.username;
	}
}

class Admin extends User {
	private write: boolean = true;
	private read: boolean = true;

	public getRole(): {write: boolean, read: boolean} {
		return {
			write: this.write,
			read: this.read
		}
	}
}

const admin = new Admin('Mathius');
console.log(admin.getName());
admin.setName('Machi');
console.log(admin.getName());
console.log(admin.getRole());
