// Simple print in console ...

console.log("Hello World!");

// CMD: node <path/filename>

// Type coercion:
2 === "2";
2 !== "2";
2 + "2"; // bliver "22"

// Variables use const if possible
// else let

const myName = "Nicolai"; // "Nicolai" er en string literal ...

console.log("Hello, ", myName);

// console log er kun til debug

// String literals
const greetingOne = "It is a nice day";
const greetingTwo = "It's a nice day";
const greetingThree = ' "It is a nice day" ';
// back thicks ... ` ... giver mulighed for multiline text """" + """" virker ikke i js ...
const greetingFour = `It´s a 


"nice" 


day`;

console.log(greetingOne);
console.log(greetingTwo);
console.log(greetingThree);
console.log(greetingFour);

console.log(`Hello, ${myName}`); // string interperlation ...
console.log(`Hello, ${2 + 2}`); // string interperlation ...
console.log(2 + 2); // Bemærk at farven på numbers (datatypen) kommer ud med en anden farve end strings

// Datatyper: String, Boolean, Number, Null, Undefined, BigInt, Symbol, Object

console.log(typeof []); // tjek af datatype for en array ... svaret er et object ...

// et objekt:
const person = {
  named: "John",    // hedder et key (named) value ("John") pair ...
  age: 30           // i JSON er både key og value i "quotes" og der er ikke ikke semikolon til sidst og kommentarer kan ikke være i JSON ... man kan også have trailing comma i js ikke i JSON ....
};

console.log(person);
