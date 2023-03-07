import Node from "./Node.js";
class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        this.tail().nextNode = new Node(value);
    }

    prepend(value) {
        let temp = this.listHead;
        let newNode = new Node(value);
        newNode.nextNode = temp;
        this.listHead = newNode;
    }

    size() {
        let counter = 0;
        let currNode = this.listHead;
        while (currNode) {
            currNode = currNode.nextNode;
            counter++;
        }
        return counter;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let currNode = this.listHead;
        while (currNode.nextNode) {
            currNode = currNode.nextNode;
        }
        return currNode;
    }

    at(index) {
        let currNode = this.listHead;
        for(let i = 0; i< index; i++) {
            currNode = currNode.nextNode;
            if (currNode==null) return "There is no node at this index"
        }
        return currNode;
    }

    pop() {
        let currNode = this.listHead;
        while (currNode.nextNode.nextNode) {
            currNode = currNode.nextNode;
        }
        currNode.nextNode = null;
    }

    contains(value) {
        let currNode = this.listHead;
        while (currNode) {
            if (currNode.value == value) {
                return true;
            }
            currNode = currNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currNode = this.listHead;
        let index = 0;
        while (currNode) {
            if (currNode.value == value) {
                return index;
            }
            currNode = currNode.nextNode;
            index++;
        }
        return index;
    }

    toString() {
        let output = "";
        let currNode = this.listHead;
        while (currNode) {
            output += `( ${currNode.value} ) -> `;
            currNode = currNode.nextNode;
        }

        output += "null";
        return output;
    }

    insertAt(value, index) {
        let currNode = this.listHead
        let prev = null;
        let newNode = new Node(value);
        for (let i=0; i < index; i++) {
            prev = currNode;
            currNode = currNode.nextNode;
            if (currNode == null) break;
        }
        prev.nextNode = newNode;
        newNode.nextNode = currNode;
    }

    removeAt(index) {
        let currNode = this.listHead
        let prev = null;
        for (let i=0; i < index; i++) {
            prev = currNode;
            currNode = currNode.nextNode;
            if (currNode == null) return "There is no node at this index";
        }
        prev.nextNode = currNode.nextNode;
    }
}