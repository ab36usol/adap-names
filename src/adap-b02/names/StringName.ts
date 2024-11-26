import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";

export class StringName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;
    protected name: string = "";
    protected noComponents: number = 0;


    constructor(other: string, delimiter?: string) {
<<<<<<< HEAD
        this.name = other
        this.delimiter = (delimiter !== undefined && delimiter !== null) ? delimiter: this.delimiter
        this.noComponents = this.splitNotMaskedDelimiter(other, false).length
        
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype conversion-method (Query method)
    public asString(delimiter: string = this.delimiter): string {
<<<<<<< HEAD
        let human_representation = this.splitNotMaskedDelimiter(this.name, true)
        return human_representation.join(delimiter)
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype conversion-method (Query method)
    public asDataString(): string {
<<<<<<< HEAD
        return this.name
    }
    // @methodtype assertion-method (Helper method)
    public isEmpty(): boolean {
        if(this.name.length < 1) 
            return false 
        else 
            return true
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
        return this.noComponents
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype get-method (Query method)
    public getComponent(x: number): string {
<<<<<<< HEAD
        return this.name.split(this.delimiter)[x];
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype set-method (Mutation method)
    public setComponent(n: number, c: string): void {
<<<<<<< HEAD
        let split_name : string[] = this.name.split(this.delimiter)
        split_name[n] = c
        this.name = split_name.join(this.delimiter)
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype command-method (Query method)
    public insert(n: number, c: string): void {
<<<<<<< HEAD
        let split_name : string[] = this.name.split(this.delimiter)
        split_name.splice(n, 0, c)
        this.name = split_name.join(this.delimiter)
        this.noComponents++;
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype command-method (Query method)
    public append(c: string): void {
<<<<<<< HEAD
        this.name = this.name + this.delimiter + c
        this.noComponents++;
=======
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }
    // @methodtype command-method (Query method)
    public remove(n: number): void {
<<<<<<< HEAD
        let split_name : string[] = this.name.split(this.delimiter)
        split_name.splice(n,1)
        this.name = split_name.join(this.delimiter)
        this.noComponents--;
    }
    // @methodtype command-method (Query method)
    public concat(other: Name): void {
        this.name = this.name + this.delimiter + other.asString()
        this.noComponents = this.noComponents + other.getNoComponents();
    }

    // @methodtype Helper Method
    private splitNotMaskedDelimiter(str: string, deleteEscapeCharacters: boolean ,delimiter: string = this.delimiter): string[] {
        let components: string[] = [""]
        let component_index: number = 0   
        for(let i=0;i<str.length;i++) {
            if(str[i] === ESCAPE_CHARACTER) {
                if(!deleteEscapeCharacters) {
                    components[component_index] += str[i]
                }
                if(i+1<str.length) {
                    i++;
                    components[component_index] += str[i]
                    continue
                }
                break
            }
            if(str[i] === delimiter){
                components.push("")
                component_index++;
                continue
            }
            components[component_index] += str[i]
        }
        return components
=======
        throw new Error("needs implementation or deletion");
    }

    public concat(other: Name): void {
        throw new Error("needs implementation or deletion");
>>>>>>> fefc96f07ed0a1b5cea5fc6a8ff1987776dd5f6d
    }

}