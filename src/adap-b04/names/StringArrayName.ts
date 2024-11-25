import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { MethodFailureException } from "../common/MethodFailureException";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(other: string[], delimiter?: string) {
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
    }
}