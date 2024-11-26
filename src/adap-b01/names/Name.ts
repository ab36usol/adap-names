export const DEFAULT_DELIMITER: string = '.';
export const ESCAPE_CHARACTER = '\\';

/**
 * A name is a sequence of string components separated by a delimiter character.
 * Special characters within the string may need masking, if they are to appear verbatim.
 * There are only two special characters, the delimiter character and the escape character.
 * The escape character can't be set, the delimiter character can.
 * 
 * Homogenous name examples
 * 
 * "oss.cs.fau.de" is a name with four name components and the delimiter character '.'.
 * "///" is a name with four empty components and the delimiter character '/'.
 * "Oh\.\.\." is a name with one component, if the delimiter character is '.'.
 */
export class Name {

    private delimiter: string = DEFAULT_DELIMITER;
    private components: string[] = [];

    /** Expects that all Name components are properly masked */
    constructor(other: string[], delimiter?: string) {
<<<<<<< HEAD
        this.components = other
        this.delimiter = (delimiter !== undefined && delimiter !== null) ? delimiter: this.delimiter
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

    /**
     * Returns a human-readable representation of the Name instance using user-set control characters
     * Control characters are not escaped (creating a human-readable string)
     * Users can vary the delimiter character to be used
     */
    public asString(delimiter: string = this.delimiter): string {
<<<<<<< HEAD
        let nameString: string = ""
        for(let i=0;i<this.components.length;i++) {
            nameString += this.components[i]
            if(i<this.components.length-1) 
                nameString += this.delimiter
        }
        return nameString
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

    /** 
     * Returns a machine-readable representation of Name instance using default control characters
     * Machine-readable means that from a data string, a Name can be parsed back in
     * The control characters in the data string are the default characters
     */
    public asDataString(): string {
<<<<<<< HEAD
        let nameString: string = ""
        for(let i=0;i<this.components.length;i++) {
            nameString += this.components[i]
            if(i<this.components.length-1) 
                nameString += this.delimiter
        }
        return nameString
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

    /** Expects that new Name component c is properly masked */
    public setComponent(i: number, c: string): void {
<<<<<<< HEAD
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components[i] = c
    }

    // @methodtype get-method (Query method)
    public getNoComponents(): number {
        return this.components.length
=======
        throw new Error("needs implementation or deletion");
    }

     /** Returns number of components in Name instance */
     public getNoComponents(): number {
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

    // @methodtype set-method (mutation-method)
    /** Expects that new Name component c is properly masked */
    public insert(i: number, c: string): void {
<<<<<<< HEAD
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i, 0, c)
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

    // @methodtype set-method (mutation-method)
    /** Expects that new Name component c is properly masked */
    public append(c: string): void {
<<<<<<< HEAD
        this.components.push(c);
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

    // @methodtype set-method (mutation-method)
    public remove(i: number): void {
<<<<<<< HEAD
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        delete this.components[i]
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

}