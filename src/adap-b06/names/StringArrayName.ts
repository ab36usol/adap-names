import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { MethodFailedException } from "../common/MethodFailedException";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(source: string[], delimiter?: string) {
        IllegalArgumentException.assert(source !==null && source !==undefined)
        super(delimiter);
        this.components = source
    }

    public getNoComponents(): number {
        let no_componets: number = this.components.length
        MethodFailedException.assert(no_componets >=0 , "method getNoComponents failed");
        return no_componets
    }

    public getComponent(i: number): string {
        // Precondition
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        return this.components[i]
    }

    public setComponent(i: number, c: string) {
        IllegalArgumentException.assert(c !==null && c !==undefined)
        // Precondition
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        this.components[i] = c
        // Postcondition 
        MethodFailedException.assert(this.getComponent(i) === c, "method setComponent failed")
    }

    public insert(i: number, c: string) {
        IllegalArgumentException.assert(c !==null && c !==undefined)
        let old_no_components: number = this.getNoComponents();
        // Precondition
        if (i < 0 || i >= this.components.length) throw new RangeError("invalid index");
        this.components.splice(i, 0, c)
        // Postcondition 
        MethodFailedException.assert(this.getComponent(i) === c && old_no_components+1 == this.getNoComponents() , "method insert failed")
    }

    public append(c: string) {
        IllegalArgumentException.assert(c !==null && c !==undefined)
        let old_no_components: number = this.getNoComponents();
        this.components.push(c);
        // Postcondition 
        MethodFailedException.assert(this.getComponent(old_no_components) === c && old_no_components+1 == this.getNoComponents() , "method append failed")
    }

    public remove(i: number) {
        // Precondition
        if (i < 0 || i >= this.components.length) 
            throw new RangeError("invalid index");
        let old_no_components: number = this.getNoComponents();
        this.components.splice(i,1)
        // Postcondition 
        MethodFailedException.assert(old_no_components-1 == this.getNoComponents() , "method remove failed")
    }
}