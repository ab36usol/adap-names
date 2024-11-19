import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(other: string[], delimiter?: string) {
        super(delimiter);
        this.components = other
    }

    public getNoComponents(): number {
        return this.components.length
    }

    public getComponent(i: number): string {
        if (i === undefined || i === null) 
            throw new Error("index is undefined or null");
        return this.components[i]
    }

    public setComponent(i: number, c: string) {
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        this.components[i] = c
    }

    public insert(i: number, c: string) {
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        this.components.splice(i, 0, c)
    }

    public append(c: string) {
        this.components.push(c);
    }

    public remove(i: number) {
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        this.components.splice(i,1)
    }

    create_newInstance(other: string, delimiter: string): Name {
        if(delimiter === null || delimiter === undefined) throw new Error("invalid delimiter")
        if(other === null || other === undefined) throw new Error("invalid string")
        let other_array: string[] = other.split(delimiter)
        return new StringArrayName(other_array, delimiter)
    }
}