import { RootNode } from "../../adap-b04/files/RootNode";
import { ExceptionType, AssertionDispatcher } from "../common/AssertionDispatcher";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { InvalidStateException } from "../common/InvalidStateException";

import { Name } from "../names/Name";
import { Directory } from "./Directory";


export class Node {

    protected baseName: string = "";
    protected parentNode: Directory;

    constructor(bn: string, pn: Directory) {
        this.doSetBaseName(bn);
        this.parentNode = pn; // why oh why do I have to set this
        this.initialize(pn);
    }

    protected initialize(pn: Directory): void {
        this.parentNode = pn;
        this.parentNode.add(this);
    }

    public move(to: Directory): void {
        this.parentNode.remove(this);
        to.add(this);
        this.parentNode = to;
    }

    public getFullName(): Name {
        const result: Name = this.parentNode.getFullName();
        result.append(this.getBaseName());
        return result;
    }

    public getBaseName(): string {
        return this.doGetBaseName();
    }

    protected doGetBaseName(): string {
        return this.baseName;
    }

    public rename(bn: string): void {
        this.doSetBaseName(bn);
    }

    protected doSetBaseName(bn: string): void {
        this.baseName = bn;
    }

    public getParentNode(): Directory {
        return this.parentNode;
    }

    /**
     * Returns all nodes in the tree that match bn
     * @param bn basename of node being searched for
     */
    public findNodes(bn: string): Set<Node> {
        let matching_nodes :Set<Node> = new Set<Node>();
        if(this.baseName === bn) {
            matching_nodes.add(this);
            InvalidStateException.assertIsNotNullOrUndefined(matching_nodes);
        }
        let pn: Node = this.getParentNode();
        if(this === pn) {
            InvalidStateException.assertIsNotNullOrUndefined(matching_nodes);
            return matching_nodes;
        }
        // Recursive call to find all matching nodes in subtree
        let subtree_matches = this.parentNode.findNodes(bn)
        InvalidStateException.assertIsNotNullOrUndefined(subtree_matches);
        matching_nodes.forEach(subtree_matches.add, subtree_matches);
        InvalidStateException.assertIsNotNullOrUndefined(matching_nodes);
        return matching_nodes;
    }

    protected assertClassInvariants(): void {
        const bn: string = this.doGetBaseName();
        this.assertIsValidBaseName(bn, ExceptionType.CLASS_INVARIANT);
    }

    protected assertIsValidBaseName(bn: string, et: ExceptionType): void {
        const condition: boolean = (bn != "");
        AssertionDispatcher.dispatch(et, condition, "invalid base name");
    }

}
