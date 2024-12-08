import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { MethodFailedException } from "../common/MethodFailedException";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;

    constructor(source: string, delimiter?: string) {
        IllegalArgumentException.assert(source !== null && source !== undefined)
        super(delimiter);
        this.noComponents = this.splitNotMaskedDelimiter(source, false).length
        this.name = source
    }
    public getNoComponents(): number {
        MethodFailedException.assert(this.noComponents >=0 , "method getNoComponents failed");
        return this.noComponents
    }

    public getComponent(i: number): string {
        // Precondition
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        return this.splitNotMaskedDelimiter(this.name, false)[i];
    }

    public setComponent(i: number, c: string) {
        IllegalArgumentException.assert(c !== null && c !== undefined)
        // Precondition
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name[i] = c
        this.name = split_name.join(this.delimiter)
        // Postcondition 
        MethodFailedException.assert(this.getComponent(i) === c, "method setComponent failed")
    }

    public insert(i: number, c: string) {
        IllegalArgumentException.assert(c !== null && c !== undefined)
        // Precondition
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let old_no_components: number = this.getNoComponents()
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name.splice(i, 0, c)
        this.name = split_name.join(this.delimiter)
        this.noComponents++;
        // Postcondition
        MethodFailedException.assert(this.getComponent(i) === c && old_no_components+1 == this.getNoComponents() , "method insert failed")
    }

    public append(c: string) {
        IllegalArgumentException.assert(c !== null && c !== undefined)
        let old_no_components: number = this.getNoComponents();
        this.name = this.name + this.delimiter + c
        this.noComponents++;
        // Postcondition 
        MethodFailedException.assert(this.getComponent(old_no_components) === c && old_no_components+1 == this.getNoComponents() , "method append failed")
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
        MethodFailedException.assert(old_no_components-1 == this.getNoComponents() , "method remove failed")
    }

    private splitNotMaskedDelimiter(str: string, deleteEscapeCharacters: boolean ,delimiter: string = this.delimiter): string[] {
        IllegalArgumentException.assert(str !== null && str !== undefined)
        IllegalArgumentException.assert(delimiter !== null && delimiter !== undefined)
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
    }

    create_newInstance(other: string, delimiter: string): Name {
        IllegalArgumentException.assert(other !== null && other !== undefined)
        IllegalArgumentException.assert(delimiter !== null && delimiter !== undefined)
        return new StringName(other, delimiter)
    }
}