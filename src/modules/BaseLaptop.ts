import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";
import { b  } from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
	public name: string;
  public type: T;
  public withNumeric: boolean;
	public withTouchButton: boolean;

  constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
		this.name = name;
		this.type = type;
		this.withNumeric = numeric;
		this.withTouchButton = touchButton;
	}

	public a(): void {
		console.log(Keyboard.a());
	}

	public b(): void {
		console.log(b());
	}
}

export default BaseLaptop;
