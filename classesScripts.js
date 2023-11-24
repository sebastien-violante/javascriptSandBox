class Animal {
    constructor(age, color) {
        this.age = age;
        this.color = color;
    }

    displayInfo() {
        console.log(`Your animal is ${this.age} and it's color is ${this.color}`);
    }
}

const Poupoune = new Animal(2,'grey');

Poupoune.displayInfo();

const myFunction = (a,b) => a+b;

console.log(myFunction(5,7));

let divide = (a,b) => {
    if(b === 0) { return 0 };
    return a/b; }

console.log(divide(2,3));
console.log(divide(2,0));

let toto = 5;

console.log(toto.Number.isNaN());