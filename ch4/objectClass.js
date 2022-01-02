console.log([].hasOwnProperty("hasOwnProperty"));
console.log([].hasOwnProperty("length"));
console.log([].hasOwnProperty("0"));
console.log([42].hasOwnProperty("0"));

let a = [42];
console.log(a);
console.log(a.propertyIsEnumerable("0"));
console.log(a.propertyIsEnumerable("length"));

/**
 * toString() 
 * toLocaleString()
 */

let to1 = ({ a: 1, b: 2 }).toString();
console.log(to1.toString());
console.log(to1.toLocaleString());

let d1 = new Date(Date.UTC(2019, 0))
console.log(d1.toString());
console.log(d1.toLocaleDateString("ja-JP", { timeZone: "UTC" }));
console.log(d1.toLocaleDateString("en-US", { timeZone: "UTC" }));

/**
 * Objectクラス経由で利用する機能
 * オブジェクトを生成する。
 */

let o1 = Object
console.log(o1);
let o2 = new Object();
console.log(o2);

let o3 = Object.fromEntries([["x", 3], ["y", 4]]);
console.log(o3);

/**
 * オブジェクトの拡張性を管理する
 */
let o4 = Object.create(Object.prototype, {
    x: {
        value: 3,
        writable: true,
        enumerable: true,
    },
    y: {
        value: 4,
        writable: true,
        enumerable: true,
    },
    length: {
        enumerable: true,
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        set: function (len) {
            const current = this.length
            this.x *= len / current
            this.y *= len / current
        }

    }
});

console.log(o4)
console.log(o4.length)

o4.length = 50
console.log(o4.length)

const checkStatus = (obj) => `拡張:${Object.isExtensible(obj)}
凍結:${Object.isFrozen(obj)}
封印:${Object.isSealed(obj)}`

console.log(checkStatus({ answer: 42 }))

console.log(checkStatus(Object.preventExtensions({ answer: 42 })))
console.log(checkStatus(Object.seal({ answer: 42 })))
console.log(checkStatus(Object.freeze({ answer: 42 })))

