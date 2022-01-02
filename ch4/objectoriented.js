const vector2 = {
    x: 3, y: 4,
    lengthSq: self => self.x * self.x + self.y * self.y,
    add: (self, other) => {
        self.x += other.x;
        self.y += other.y;
    }
};

console.log(vector2.lengthSq(vector2));

const vecotr2Ex = (x, y) => {
    return {
        x, y,
        lengthSq: self => self.x * self.x + self.y * self.y,
        add: (self, other) => {
            self.x += other.x;
            self.y += other.y;
        }
    }
}

const vecotr2a = vecotr2Ex(5, 5);
const vecotr2b = vecotr2Ex(10, 10);

console.log(vecotr2a.lengthSq(vecotr2a));

vecotr2a.add(vecotr2a, vecotr2b);
console.log(vecotr2a.lengthSq(vecotr2a));

const vector2_lengthSq = self => {self.x * self.x + self.y * self.y};
const vector2_add = (self, other) => {
    self.x += other.x;
    self.y += other.y;
}

const vectorEx2 = (x, y) => {
    return {
        x:x, y:y,
        lengthsq:vector2_lengthSq,
        add: vector2_add
    }
};

const vectorEx2a = vecotr2Ex(2, 3);
console.log(vectorEx2a);
console.log(vectorEx2a.lengthSq(vectorEx2a));