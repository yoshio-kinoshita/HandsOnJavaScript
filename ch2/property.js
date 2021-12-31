const iggy = {
    id: "1", name: "iggy", parameters: [
        { length: 165, weight: 50, age: 15 },
        { length: 175, weight: 60, age: 18 },
        { length: 185, weight: 65, age: 20 },
    ]
};

console.log(iggy.id);
console.log(iggy.name);
console.log(iggy?.parameters[0]?.length);

const { id, parameters: [
    { length: length15, weight: weight15 },
    { length: length18, weight: weight18 },
    { length: length20, weight: weight20 }
]} = iggy;


console.log(id);
console.log(length15);
console.log(length18);