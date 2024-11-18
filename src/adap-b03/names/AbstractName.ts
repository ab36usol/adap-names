import { Name, DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "./Name";

export abstract class AbstractName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;

    constructor(delimiter: string = DEFAULT_DELIMITER) {
        this.delimiter = delimiter
    }

    public asString(delimiter: string = this.delimiter): string {
        let res: string = this.getComponent(0)
        for(let i: number = 1; i< this.getNoComponents(); i++) {
            res += delimiter + this.getComponent(i)
        }
        res.replace(ESCAPE_CHARACTER, "")
        return res
    }

    public toString(): string {
        return this.asString()
    }

    public asDataString(): string {
        let res: string = this.getComponent(0)
        for(let i: number = 1; i< this.getNoComponents(); i++) {
            res += this.delimiter + this.getComponent(i)
        }
        return res
    }

    public isEqual(other: Name): boolean {
        return JSON.stringify(this) === JSON.stringify(other)
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

    public clone(): Name {
       return this.create_newInstance(this.asDataString(), this.delimiter)
    }

    public isEmpty(): boolean {
        return this.getNoComponents() == 0
    }

    public getDelimiterCharacter(): string {
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
        for(let i: number = 0;other.getNoComponents(); i++) {
            this.append(other.getComponent(i))
        }
    }

}