class Vector4 {
    static instanceCount = 0;

    static incrementCount() {
        this.instanceCount++;
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;

        Vector4.incrementCount();
    }
}

let v = new Vector4(1, 1);
console.log(v);
console.log(Vector4.instanceCount);

let v2 = new Vector4(2, 2);
console.log(v2);
console.log(Vector4.instanceCount);
