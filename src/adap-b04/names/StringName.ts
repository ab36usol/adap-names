import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { MethodFailureException } from "../common/MethodFailureException";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;

    constructor(other: string, delimiter?: string) {
<<<<<<< HEAD
        IllegalArgumentException.assertIsNotNullOrUndefined(other)
        super(delimiter);
        this.noComponents = this.splitNotMaskedDelimiter(other, false).length
        this.name = other
    }
    public getNoComponents(): number {
        MethodFailureException.assertCondition(this.noComponents >=0 , "method getNoComponents failed");
        return this.noComponents
    }

    public getComponent(i: number): string {
        // Precondition
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        return this.splitNotMaskedDelimiter(this.name, false)[i];
    }

    public setComponent(i: number, c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        // Precondition
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name[i] = c
        this.name = split_name.join(this.delimiter)
        // Postcondition 
        MethodFailureException.assertCondition(this.getComponent(i) === c, "method setComponent failed")
    }

    public insert(i: number, c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        // Precondition
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let old_no_components: number = this.getNoComponents()
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name.splice(i, 0, c)
        this.name = split_name.join(this.delimiter)
        this.noComponents++;
        // Postcondition
        MethodFailureException.assertCondition(this.getComponent(i) === c && old_no_components+1 == this.getNoComponents() , "method insert failed")
    }

    public append(c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        let old_no_components: number = this.getNoComponents();
        this.name = this.name + this.delimiter + c
        this.noComponents++;
        // Postcondition 
        MethodFailureException.assertCondition(this.getComponent(old_no_components) === c && old_no_components+1 == this.getNoComponents() , "method append failed")
    }

    public remove(i: number) {
        // Precondition
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let old_no_components: number = this.getNoComponents();
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name.splice(i,1)
        this.name = split_name.join(this.delimiter)
        this.noComponents--;
        // Postcondition 
        MethodFailureException.assertCondition(old_no_components-1 == this.getNoComponents() , "method remove failed")
    }

    private splitNotMaskedDelimiter(str: string, deleteEscapeCharacters: boolean ,delimiter: string = this.delimiter): string[] {
        IllegalArgumentException.assertIsNotNullOrUndefined(str)
        IllegalArgumentException.assertIsNotNullOrUndefined(delimiter)
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

    create_newInstance(other: string, delimiter: string): Name {
        IllegalArgumentException.assertIsNotNullOrUndefined(other)
        IllegalArgumentException.assertIsNotNullOrUndefined(delimiter)
        return new StringName(other, delimiter)
    }
}