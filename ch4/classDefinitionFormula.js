const Vector5 = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let vec5 = new Vector5(3, 4);
console.log(vec5);

const Vector6 = class extends Vector5 {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

const Vector7 = new Vector6(1, 4, 5);
console.log(Vector7);