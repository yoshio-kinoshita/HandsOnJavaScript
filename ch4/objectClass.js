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

/**
 * プロパティを一覧する
 *  Object.getOwnPropertyNames();
 *  Object.getOwnPropertySymbols();
 *  Object.keys();
 *  Object.values()
 *  Object.entries()
 */
let obj = { bro1: "Mycroft", bro2: "Sherlock", [Symbol("sys")]: "Eurus" }

console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const clone = Object.fromEntries(Object.entries(obj))
console.log(clone)

/**
 * プロパティを管理する　
 * Object.definProperty()
 * Object.getOwnPropertyDescriptor()
 * Object.getOwnPropertyDescriptors()
 */

let vet = {}

Object.defineProperties(vet, {
    x: { value: 3, writable: true, enumerable: true, configurable: true },
    y: { value: 4, writable: true, enumerable: true }
})

console.log(vet)

Object.defineProperty(vet, "length", {
    enumerable: false,
    get: () => {
        return Math.sqrt(this.x * this * x + this.y * this.y)
    },
    set: (len) => {
        const current = this.length
        this.x *= len / current
        this.y *= len / current
    }
})

console.log(vet)

console.log(Object.getOwnPropertyDescriptors(vet))
console.log(Object.getOwnPropertyDescriptor(vet, "length"))

Object.defineProperty(vet, "x", { value: 5, enumerable: false })

console.log(Object.keys(vet))
console.log(Object.getOwnPropertyDescriptors(vet))
console.log(vet.x)

// TypeError: Cannot redefine property: y
// Object.defineProperty(vet, "y", {value: 5, writable: true, enumerable: false})

vet.z = 1

console.log(Object.getOwnPropertyDescriptors(vet))

// プロパティをコピーする
const parameters = { power: "B", speed: "c" },
    params1 = { range: "D" },
    params2 = { durability: "C" }

console.log(Object.assign(parameters, params1, params2))

const clone2 = Object.assign({}, parameters)
console.log(clone2)

console.log(parameters == clone2)
console.log(parameters === clone2)
console.log(parameters != clone2)
console.log(parameters !== clone2)
console.log(Object.is(parameters, clone2))

const param3 = {
    [Symbol("percision")]: "D",
    get development() {
        return "C"
    }
}

Object.assign(parameters, param3)
console.log(parameters)

/**
 * オブジェクトのクラスを確認する
 */

class Vector2{}
let vec = new Vector2()
console.log(typeof vec);

console.log(vec instanceof Vector2)
console.log(vec instanceof Object)
console.log(vec instanceof Date)

console.log(Object.getPrototypeOf(vec))

Object.getPrototypeOf(vec)