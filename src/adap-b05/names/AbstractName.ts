import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { MethodFailedException } from "../common/MethodFailedException";

export abstract class AbstractName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;

    constructor(delimiter: string = DEFAULT_DELIMITER) {
        IllegalArgumentException.assert(delimiter!==null || delimiter !==undefined)
        this.delimiter = delimiter
    }

    public clone(): Name {
        let clone: Name = this.create_newInstance(this.asDataString(), this.delimiter)
        //Postcondition
        MethodFailedException.assert(clone !== null || clone !== undefined)
        return clone
    }

    public asString(delimiter: string = this.delimiter): string {
        IllegalArgumentException.assert(delimiter !== null || delimiter !== undefined)
        let res: string = this.getComponent(0)
        for(let i: number = 1; i< this.getNoComponents(); i++) {
            let component_no_es = this.getComponent(i).split(ESCAPE_CHARACTER).join("")
            res += delimiter + component_no_es
        }
        //Postcondition
        MethodFailedException.assert(res !== null || res !== undefined);
        return res
    }

    public toString(): string {
        let str: string = this.asString(); 
        MethodFailedException.assert(str !== null || str !== undefined);
        return str
    }

    public asDataString(): string {
        let res: string = this.getComponent(0)
        for(let i: number = 1; i< this.getNoComponents(); i++) {
            res += this.delimiter + this.getComponent(i)
        }
        //Postcondition
        MethodFailedException.assert(res !== null || res !== undefined);
        return res
    }

    public isEqual(other: Name): boolean {
        IllegalArgumentException.assert(other !== null || other !== undefined);
        return this.delimiter === other.getDelimiterCharacter() && this.asDataString() === other.asDataString();
    }

    public getHashCode(): number {
        const s: string = this.asDataString();
        var hash: number = 0;
        for (var i = 0; i < s.length; i++) {
            var code : number = s.charCodeAt(i);
            hash = ((hash<<5)-hash)+code;
            hash = hash & hash;
        }
        return hash;
    }

    public isEmpty(): boolean {
        let no_componets: number = this.getNoComponents();
        MethodFailedException.assert(no_componets >= 0, "getNoComponents in method isEmpty is negativ");
        return no_componets == 0
    }

    public getDelimiterCharacter(): string {
        //Postcondition
        MethodFailedException.assert(this.delimiter !== null || this.delimiter !== undefined);
        return this.delimiter
    }

    abstract getNoComponents(): number;

    abstract getComponent(i: number): string;
    abstract setComponent(i: number, c: string): void;

    abstract insert(i: number, c: string): void;
    abstract append(c: string): void;
    abstract remove(i: number): void;
    abstract create_newInstance(other: string, delimiter: string): Name; 

    public concat(other: Name): void {
        IllegalArgumentException.assert(other !== null || other !== undefined)
        let old_no_components: number = this.getNoComponents();
        for(let i: number = 0;other.getNoComponents(); i++) {
            this.append(other.getComponent(i))
        }
        //Postcondition
        MethodFailedException.assert(old_no_components+other.getNoComponents() == this.getNoComponents() , "method concat failed")
    }
}