import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";

export class StringArrayName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;
    protected components: string[] = [];

    constructor(other: string[], delimiter?: string) {
<<<<<<< HEAD
        this.components = other
        this.delimiter = (delimiter !== undefined && delimiter !== null) ? delimiter: this.delimiter
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype conversion-method (Query method)
    public asString(delimiter: string = this.delimiter): string {
<<<<<<< HEAD
        let str: string = this.components.join(delimiter)
        return str
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype conversion-method (Query method)
    public asDataString(): string {
<<<<<<< HEAD
        return this.components.join(this.delimiter)
    }
    // @methodtype assertion-method (Helper method)
    public isEmpty(): boolean {
        if(this.components.length < 1) return true
        else return false
=======
        throw new Error("needs implementation or deletion");
    }

    public getDelimiterCharacter(): string {
        throw new Error("needs implementation or deletion");
    }

    public isEmpty(): boolean {
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype get-method (Query method)
    public getDelimiterCharacter(): string {
        return this.delimiter
    }
    // @methodtype get-method (Query method)
    public getNoComponents(): number {
<<<<<<< HEAD
        return this.components.length
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype get-method (Query method)
    public getComponent(i: number): string {
<<<<<<< HEAD
        if (i === undefined || null) 
            throw new Error("index is undefined or null");
        return this.components[i]
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype set-method (Mutation method)
    public setComponent(i: number, c: string): void {
<<<<<<< HEAD
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components[i] = c
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype command-method (Query method)
    public insert(i: number, c: string): void {
<<<<<<< HEAD
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i, 0, c)
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype command-method (Query method)
    public append(c: string): void {
<<<<<<< HEAD
        this.components.push(c);
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype command-method (Query method)
    public remove(i: number): void {
<<<<<<< HEAD
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i,1)
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype command-method (Query method)
    public concat(other: Name): void {
<<<<<<< HEAD
        for(let i=0;i < other.getNoComponents();i++) {
            this.components.concat(other.getComponent(i))
        }
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
}