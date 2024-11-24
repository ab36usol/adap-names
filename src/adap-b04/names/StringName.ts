import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { IllegalArgumentException } from "../common/IllegalArgumentException";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;

    constructor(other: string, delimiter?: string) {
        super(delimiter);
        this.noComponents = this.splitNotMaskedDelimiter(other, false).length
        this.name = other
    }
    public getNoComponents(): number {
        return this.noComponents
    }

    public getComponent(i: number): string {
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        return this.splitNotMaskedDelimiter(this.name, false)[i];
    }

    public setComponent(i: number, c: string) {
        if (c === undefined || c === null) throw new IllegalArgumentException("index is undefined or null");
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name[i] = c
        this.name = split_name.join(this.delimiter)
    }

    public insert(i: number, c: string) {
        if (c === undefined || c === null) throw new IllegalArgumentException("index is undefined or null");
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name.splice(i, 0, c)
        this.name = split_name.join(this.delimiter)
        this.noComponents++;
    }

    public append(c: string) {
        this.name = this.name + this.delimiter + c
        this.noComponents++;
    }

    public remove(i: number) {
        if (i < 0 || i >= this.name.length) throw new RangeError("invalid index");
        let split_name : string[] = this.splitNotMaskedDelimiter(this.name, false)
        split_name.splice(i,1)
        this.name = split_name.join(this.delimiter)
        this.noComponents--;
    }

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
    }

    create_newInstance(other: string, delimiter: string): Name {
        if (other === undefined || other === null) throw new IllegalArgumentException("index is undefined or null");
        return new StringName(other, delimiter)
    }
}