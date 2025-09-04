"use strict"

//-- Functions as first class citizens --//


// hoisting = når functioner envokes før de bliver deklareret, se getRandom(max, min):
console.log(getRandomInt(5, 10));

// Alm. function ...
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// Anonym function ...
const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Ligner lambda fra java, men er en arrow-funktion ...
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 -min) + min);
}

// printer funktionsreferencen:
console.log(getRandomIntArrowFunction);
// printer funktionens return value:
console.log(getRandomIntArrowFunction, 2, 4);

// callback-funktion - en funktion, der bliver passed into another function in another fuction **som et argument** og kun potentielt invoked later ...
function genericActionPerformer(name, action) {
    return action(name);
}

function cookingAction(name){
    return `${name} enjoys cooking.`;
}

console.log(genericActionPerformer("Jens", cookingAction));

// med en arrow function:
const runningAction = (name) => {
    return `${name} enjoys running.`;
};

console.log(genericActionPerformer("Marco", runningAction));

// In a single line ...
console.log(genericActionPerformer("Lucas", (name) => `${name} likes reading` ));

