import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";

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
        // Precondition
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        return this.components[i]
    }

    public setComponent(i: number, c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        // Precondition
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        this.components[i] = c
    }

    public insert(i: number, c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        // Precondition
        if (i < 0 || i >= this.components.length) throw new RangeError("invalid index");
        this.components.splice(i, 0, c)
    }

    public append(c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        this.components.push(c);
    }

    public remove(i: number) {
        // Precondition
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        this.components.splice(i,1)
    }

    create_newInstance(other: string, delimiter: string): Name {
        IllegalArgumentException.assertIsNotNullOrUndefined(other)
        IllegalArgumentException.assertIsNotNullOrUndefined(delimiter)
        let other_array: string[] = other.split(delimiter)
        return new StringArrayName(other_array, delimiter)
    }
}