let tusk = {
    act1() {
        console.log("Chumimin");
    }
}

tusk.act1();

let tusk2 = {
    cry: "Chumimin",
    act1() {
        console.log(this.cry);
    },
    act2() {
        this.act1();
        console.log("Tail");
    }
}

tusk2.act2();

let tusk3 = {
    get cry() {
        return "Chumimin";
    }
}

console.log(tusk3.cry);