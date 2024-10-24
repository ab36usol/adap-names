export class Name {

    public readonly DEFAULT_DELIMITER: string = '.';
    private readonly ESCAPE_CHARACTER = '\\';

    private components: string[] = [];
    private delimiter: string = this.DEFAULT_DELIMITER;

    constructor(other: string[], delimiter?: string) {
        this.components = other
        this.delimiter = (delimiter !== undefined && delimiter !== null) ? delimiter: this.delimiter
        //throw new Error("needs implementation");
    }

    /** Returns human-readable representation of Name instance */
    public asNameString(delimiter: string = this.delimiter): string {
        let nameString: string = ""
        for(let i=0;i<this.components.length;i++) {
            nameString += this.components[i]
            if(i<this.components.length-1) 
                nameString += this.delimiter
        }
        return nameString
        //throw new Error("needs implementation");
    }

    public getComponent(i: number): string {
        if (i === undefined || null) 
            throw new Error("i is undefined or null");
        return this.components[i]
        //throw new Error("needs implementation");
    }

    public setComponent(i: number, c: string): void {
        this.components[i] = c
        //throw new Error("needs implementation");
    }

    public getNoComponents(): number {
        return this.components.length
        //throw new Error("needs implementation");
    }

    public insert(i: number, c: string): void {
        
        this.components.splice(i, 0, c)
        //throw new Error("needs implementation");
    }

    public append(c: string): void {
        this.components.push(c);
        //throw new Error("needs implementation");
    }

    public remove(i: number): void {
        delete this.components[i]
        //throw new Error("needs implementation");
    }

}