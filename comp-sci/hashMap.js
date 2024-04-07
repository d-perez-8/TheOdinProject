function hash(key, tableSize) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode % tableSize;
} 

class HashMap {
    constructor() {
        this.table = new Array(3);
        this.LOAD_FACTOR = 0.75;
        this.size = 0;
    }

    resize() {
        const newTable = new Array(this.table.length * 2);

        // Iterate over each bucket in the existing table
        this.table.forEach((bucket) => {
            if (bucket) {
                // Iterate over each item in the bucket
                bucket.forEach(([key, value]) => {
                    const index = hash(key, newTable.length);

                    // Create a new bucket if it doesn't exist
                    if (!newTable[index]) {
                        newTable[index] = []
                    }
                    // Push the key-value pair into the new bucket
                    newTable[index].push([key, value]);
                })
            }
        });

        // Updatet the table reference
        this.table = newTable;
    }

    setItem(key, value) {
        const capacity = this.size / this.table.length;
        if (capacity > this.LOAD_FACTOR) {
            // Create more buckets
            this.resize()
        }

        const index = hash(key, this.table.length);

        // in case of collision -> create push an array
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value])
        this.size++;
    }
 
    getItem(key) {
        const index = hash(key, this.table.length);

        if (!this.table[index]) {
            return null;
        }

        return this.table[index].find(x => x[0] === key)[1];
    }

    has(key) {
        return this.getItem(key) ? true : false;
    }

    remove(key) {
        const index = hash(key, this.table.length)

        if (!this.table[index]) {
            return;
        }
    }
}

const hashboy = new HashMap();
hashboy.setItem('firstName', 'Daniel');
hashboy.setItem('lastName', 'Potter');

console.log(hashboy.getItem('firstName'));
console.log(hashboy.getItem('lastName'));

hashboy.remove('firstName');

console.log(hashboy.has('firstName'));


