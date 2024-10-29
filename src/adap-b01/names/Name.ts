export class Name {

    public readonly DEFAULT_DELIMITER: string = '.';
    private readonly ESCAPE_CHARACTER = '\\';

    private components: string[] = [];
    private delimiter: string = this.DEFAULT_DELIMITER;

    constructor(other: string[], delimiter?: string) {
        this.components = other
        this.delimiter = (delimiter !== undefined && delimiter !== null) ? delimiter: this.delimiter
    }

    /** Returns human-readable representation of Name instance */
    // @methodtype conversion-method (Query method)
    public asNameString(delimiter: string = this.delimiter): string {
        let nameString: string = ""
        for(let i=0;i<this.components.length;i++) {
            nameString += this.components[i]
            if(i<this.components.length-1) 
                nameString += this.delimiter
        }
        return nameString
    }

    // @methodtype get-method (Query method)
    public getComponent(i: number): string {
        if (i === undefined || null) 
            throw new Error("index is undefined or null");
        return this.components[i]
    }

    // @methodtype set-method (mutation-method)
    public setComponent(i: number, c: string): void {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components[i] = c
    }

    // @methodtype get-method (Query method)
    public getNoComponents(): number {
        return this.components.length
    }

    // @methodtype set-method (mutation-method)
    public insert(i: number, c: string): void {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i, 0, c)
    }

    // @methodtype set-method (mutation-method)
    public append(c: string): void {
        this.components.push(c);
    }

    // @methodtype set-method (mutation-method)
    public remove(i: number): void {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        delete this.components[i]
    }

}