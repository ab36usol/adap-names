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
        this.parentNode.addChildNode(this);
    }

    public move(to: Directory): void {
        this.parentNode.removeChildNode(this);
        to.addChildNode(this);
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
            InvalidStateException.assert(matching_nodes !== null && matching_nodes !== undefined);
        }
        let pn: Node = this.getParentNode();
        if(this === pn) {
            InvalidStateException.assert(matching_nodes !== null && matching_nodes !== undefined);
            return matching_nodes;
        }
        // Recursive call to find all matching nodes in subtree
        let subtree_matches = this.parentNode.findNodes(bn)
        InvalidStateException.assert(subtree_matches !== null && matching_nodes !== undefined);
        matching_nodes.forEach(subtree_matches.add, subtree_matches);
        InvalidStateException.assert(matching_nodes !== null && matching_nodes !== undefined);
        return matching_nodes;
    }

}