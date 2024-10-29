import { Name, DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "./Name";

export class StringName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;

    protected name: string = "";
    protected length: number = 0; // Number of components in Name instance

    constructor(other: string, delimiter?: string) {
        this.name = other
        this.delimiter = (delimiter !== undefined && delimiter !== null) ? delimiter: this.delimiter
        this.length = other.split(this.delimiter).length
        
    }

    public asNameString(delimiter: string = this.delimiter): string {
        return this.name
    }

    public isEmpty(): boolean {
        if(this.name.length < 1) 
            return false 
        else 
            return true
    }

    public getNoComponents(): number {
        return this.length
    }

    public getComponent(x: number): string {
        return this.name.split(this.delimiter)[x];
    }

    public setComponent(n: number, c: string): void {
        let split_name : string[] = this.name.split(this.delimiter)
        split_name[n] = c
        this.name = split_name.join(this.delimiter)
    }

    public insert(n: number, c: string): void {
        let split_name : string[] = this.name.split(this.delimiter)
        split_name.splice(n, 0, c)
        this.name = split_name.join(this.delimiter)
        this.length++;
    }

    public append(c: string): void {
        this.name = this.name + this.delimiter + c
        this.length++;
    }

    public remove(n: number): void {
        let split_name : string[] = this.name.split(this.delimiter)
        delete split_name[n]
        this.name = split_name.join(this.delimiter)
        this.length--;
    }

    public concat(other: Name): void {
        this.name = this.name + this.delimiter + other.asNameString
        this.length = this.length + other.getNoComponents();
    }

}