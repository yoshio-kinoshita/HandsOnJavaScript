class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }

    add(that) {
        this.x += that.x;
        this.y += that.y;
    
    }

    /**
     * getter
     */
    get length() {
        return Math.sqrt(this.lengthSq());
    }

    /**
     * setter
     */
    set length(len) {
        const ratio = len / this.length;
        this.x *= ratio;
        this.y *= ratio;
    }
}

class Vector3 extends Vector2 {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    lengthSq() {
        return super.lengthSq() + this.z * this.z;
    }
}

let v3a = new Vector3(1, 4, 5);
console.log(v3a.lengthSq());

let v3b = new Vector3(41, 38, 37);
v3a.add(v3b);

console.log(v3a);

let vec = new Vector2(3, 4);
console.log(vec);
console.log(vec.length);

vec.length = 50;

console.log(vec.length);
console.log(vec);


