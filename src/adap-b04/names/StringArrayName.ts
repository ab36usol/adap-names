import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { MethodFailureException } from "../common/MethodFailureException";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(other: string[], delimiter?: string) {
<<<<<<< HEAD
        IllegalArgumentException.assertIsNotNullOrUndefined(other)
        super(delimiter);
        this.components = other
    }

    public getNoComponents(): number {
        let no_componets: number = this.components.length
        MethodFailureException.assertCondition(no_componets >=0 , "method getNoComponents failed");
        return no_componets
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
        // Postcondition 
        MethodFailureException.assertCondition(this.getComponent(i) === c, "method setComponent failed")
    }

    public insert(i: number, c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        let old_no_components: number = this.getNoComponents();
        // Precondition
        if (i < 0 || i >= this.components.length) throw new RangeError("invalid index");
        this.components.splice(i, 0, c)
        // Postcondition 
        MethodFailureException.assertCondition(this.getComponent(i) === c && old_no_components+1 == this.getNoComponents() , "method insert failed")
    }

    public append(c: string) {
        IllegalArgumentException.assertIsNotNullOrUndefined(c)
        let old_no_components: number = this.getNoComponents();
        this.components.push(c);
        // Postcondition 
        MethodFailureException.assertCondition(this.getComponent(old_no_components) === c && old_no_components+1 == this.getNoComponents() , "method append failed")
    }

    public remove(i: number) {
        // Precondition
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        let old_no_components: number = this.getNoComponents();
        this.components.splice(i,1)
        // Postcondition 
        MethodFailureException.assertCondition(old_no_components-1 == this.getNoComponents() , "method remove failed")
    }

    create_newInstance(other: string, delimiter: string): Name {
        IllegalArgumentException.assertIsNotNullOrUndefined(other)
        IllegalArgumentException.assertIsNotNullOrUndefined(delimiter)
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