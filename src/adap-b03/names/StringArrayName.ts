import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(other: string[], delimiter?: string) {
<<<<<<< HEAD
        super(delimiter);
        this.components = other
    }

    getNoComponents(): number {
        return this.components.length
    }

    getComponent(i: number): string {
        if (i === undefined || null) 
            throw new Error("index is undefined or null");
        return this.components[i]
    }
    setComponent(i: number, c: string) {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components[i] = c
    }

    insert(i: number, c: string) {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i, 0, c)
    }
    append(c: string) {
        this.components.push(c);
    }
    remove(i: number) {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i,1)
    }

    create_newInstance(other: string, delimiter: string): Name {
        let other_array: string[] = other.split(delimiter)
        return new StringArrayName(other_array, delimiter)
=======
        super();
        throw new Error("needs implementation or deletion");
    }

    public clone(): Name {
        throw new Error("needs implementation or deletion");
    }

    public asString(delimiter: string = this.delimiter): string {
        throw new Error("needs implementation or deletion");
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
    }

    public getNoComponents(): number {
        throw new Error("needs implementation or deletion");
    }

    public getComponent(i: number): string {
        throw new Error("needs implementation or deletion");
    }

    public setComponent(i: number, c: string) {
        throw new Error("needs implementation or deletion");
    }

    public insert(i: number, c: string) {
        throw new Error("needs implementation or deletion");
    }

    public append(c: string) {
        throw new Error("needs implementation or deletion");
    }

    public remove(i: number) {
        throw new Error("needs implementation or deletion");
    }

    public concat(other: Name): void {
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
}