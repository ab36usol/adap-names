import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";

export class StringArrayName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;
    protected components: string[] = [];

    constructor(source: string[], delimiter?: string) {
        this.components = source
        this.delimiter = (delimiter !== undefined && delimiter !== null) ? delimiter: this.delimiter
    }
    // @methodtype conversion-method (Query method)
    public asString(delimiter: string = this.delimiter): string {
        let str: string = this.components.join(delimiter)
        return str
    }
    // @methodtype conversion-method (Query method)
    public asDataString(): string {
        return this.components.join(this.delimiter)
    }
    // @methodtype assertion-method (Helper method)
    public isEmpty(): boolean {
        if(this.components.length < 1) return true
        else return false
    }
    // @methodtype get-method (Query method)
    public getDelimiterCharacter(): string {
        return this.delimiter
    }
    // @methodtype get-method (Query method)
    public getNoComponents(): number {
        return this.components.length
    }
    // @methodtype get-method (Query method)
    public getComponent(i: number): string {
        if (i === undefined || null) 
            throw new Error("index is undefined or null");
        return this.components[i]
    }
    // @methodtype set-method (Mutation method)
    public setComponent(i: number, c: string): void {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components[i] = c
    }
    // @methodtype command-method (Query method)
    public insert(i: number, c: string): void {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i, 0, c)
    }
    // @methodtype command-method (Query method)
    public append(c: string): void {
        this.components.push(c);
    }
    // @methodtype command-method (Query method)
    public remove(i: number): void {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i,1)
    }
    // @methodtype command-method (Query method)
    public concat(other: Name): void {
        for(let i=0;i < other.getNoComponents();i++) {
            this.components.concat(other.getComponent(i))
        }
    }
}