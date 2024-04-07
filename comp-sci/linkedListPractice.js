class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.at(this.size - 1);
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let count = 0;
        let current = this.head;
        while (current) {
            if (index === count) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    pop(){
        return;
    }

    toString() {
        let current = this.head;
        let string = '';
        while(current) {
            string += `(${current.data}) -> `
            current = current.next;
        }
        return string += `null`
    }
}



const linky = new LinkedList();
linky.prepend(50);
linky.append(100);
linky.append(200);
console.log(linky.toString());