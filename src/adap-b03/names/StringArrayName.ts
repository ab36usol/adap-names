import { Name, DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(other: string[], delimiter?: string) {
        super();
        this.components = other
    }

    getNoComponents(): number {
        return this.components.length
    }

    getComponent(i: number): string {
        if (i === undefined || null) 
            throw new Error("index is undefined or null");
        return this.components[i]
    }
    setComponent(i: number, c: string) {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components[i] = c
    }

    insert(i: number, c: string) {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i, 0, c)
    }
    append(c: string) {
        this.components.push(c);
    }
    remove(i: number) {
        if (i < 0 || i >= this.components.length) 
            throw new Error("invalid index");
        this.components.splice(i,1)
    }
}