import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";

export abstract class AbstractName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;

    constructor(delimiter: string = DEFAULT_DELIMITER) {
<<<<<<< HEAD
        this.delimiter = delimiter
    }

    public asString(delimiter: string = this.delimiter): string {
        let res: string = this.getComponent(0)
        for(let i: number = 1; i< this.getNoComponents(); i++) {
            let component_no_es = this.getComponent(i).split(ESCAPE_CHARACTER).join("")
            res += delimiter + component_no_es
        }
        return res
    }

    public toString(): string {
        return this.asString()
    }

    public asDataString(): string {
        let res: string = this.getComponent(0)
        for(let i: number = 1; i< this.getNoComponents(); i++) {
            res += this.delimiter + this.getComponent(i)
        }
        return res
    }

    public isEqual(other: Name): boolean {
        return this.asDataString() === other.asDataString()
    }

    public getHashCode(): number {
        const s: string = this.asDataString();
        var hash: number = 0;
        for (var i = 0; i < s.length; i++) {
            var code : number = s.charCodeAt(i);
            hash = ((hash<<5)-hash)+code;
            hash = hash & hash;
        }
        return hash;
    }

    public clone(): Name {
       return this.create_newInstance(this.asDataString(), this.delimiter)
    }

    public isEmpty(): boolean {
        return this.getNoComponents() == 0
    }

    public getDelimiterCharacter(): string {
        return this.delimiter
=======
        throw new Error("needs implementation or deletion");
    }

    public clone(): Name {
        throw new Error("needs implementation or deletion");
    }

    public asString(delimiter: string = this.delimiter): string {
        throw new Error("needs implementation or deletion");
    }

    public toString(): string {
        return this.asDataString();
    }

    public asDataString(): string {
        throw new Error("needs implementation or deletion");
    }

    public isEqual(other: Name): boolean {
        throw new Error("needs implementation or deletion");
    }

    public getHashCode(): number {
        throw new Error("needs implementation or deletion");
    }

    public isEmpty(): boolean {
        throw new Error("needs implementation or deletion");
    }

    public getDelimiterCharacter(): string {
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

    abstract getNoComponents(): number;

    abstract getComponent(i: number): string;
    abstract setComponent(i: number, c: string): void;

    abstract insert(i: number, c: string): void;
    abstract append(c: string): void;
    abstract remove(i: number): void;
    abstract create_newInstance(other: string, delimiter: string): Name;

    public concat(other: Name): void {
<<<<<<< HEAD
        for(let i: number = 0;other.getNoComponents(); i++) {
            this.append(other.getComponent(i))
        }
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

}