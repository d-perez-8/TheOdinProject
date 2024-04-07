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
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    prepend(value) {
        this.head = new Node(value, this.head)
        this.size++
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
        let current = this.head;
        let count = 0;
        while(current) {
            if (count == index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        let prev = null;
        while(current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.size--;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data == value) {
                return true
            } else {
                current = current.next;
            }
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (current.data == value) {
                return count;
            } else {
                current = current.next;
                count++;
            }
        }
        return null;
    }

    toString() {
        let current = this.head;
        let string = '';
        while (current) {
            string += (`(${current.data }) -> `);
            current = current.next;
        }
        return string += `null`;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index == 0) {
            this.prepend(value);
        } else if (index == this.size) {
            this.append(value);
        } else {
            const node = new Node(value);
            let current = this.head;
            let count = 0;
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        }
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null;
        } else if (index === 0) {
            this.head = this.head.next;
            this.size--;
        } else {
            let current = this.head;
            let count = 0;
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            current.next = current.next.next;
            this.size--;
        }
    }
}

const ll = new LinkedList()
ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append(400);
ll.removeAt(0);
console.log(ll.toString());