export class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.isSunk = false;
    }

    hit() {
        this.length--;
        this.length <= 0 ? this.isSunk = true : false;
    }
}
