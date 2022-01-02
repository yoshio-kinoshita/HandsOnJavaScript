let tusk3 = {
    cry: "Chumimin",

    act1() {
        console.log(this.cry);
    }
}

let tusk4 = {
    /** __proto__ プロパティで継承する */
    __proto__: tusk3,

    act2() {
        super.act1();
        console.log("Tail");
    }
}

console.log(tusk4.cry);
console.log(tusk4.act1());
console.log(tusk4.act2());