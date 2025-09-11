// Reglen for loop metoder: brug loop metoder med minre man kan tælle det på fingrene, så for loop
// .map() – laver en ny liste 1:1
// .forEach() – sjælden i js - looper igennem hele listen uden at returnere en ny liste (bruges kun, hvis vi er ligeglade med elementer bagefter)
// .find() – 
// .reduce – kan reducere en liste til et tal / anden datastruktur – skal vi ikke bruge
// .splice() 
// .filter() – laver et nyt arrayenten 1:1 eller mindre end antallet af elementer.
// .indexOf() – 

console.log("loop methods nu med nodemons");

// nodemon er kun til development ( det er node også). 
// Det hedder hot reload.

const numbers = [1,2,3,4,5];

// map returnerer en ny liste 1:1
// double the numbers in numbers ...
const doubleUpOnNumbers = numbers.map( num => num * 2 );
console.log( doubleUpOnNumbers );

// Alle deserter skal veje 400 gr ekstra undtagen brownie

const desserts = [
    {
        name: "Flan",
        weightGram: 200
    },
    {
        name: "Banana split",
        weightGram: 700
    },
{
        name: "Brownie",
        weightGram: 600
    }
];

console.log("Desserts: ", desserts);

const dessertsXL = desserts.map( (dessert) => {
    if(dessert.name !== "Brownie"){
        // dessert.weightGram = dessert.weightGram + 400;
        dessert.weightGram += 400;
    }
    return dessert;
});

console.log("XL desserts: ", dessertsXL);

// kortere, ternary statement ( ? – hvis – : – ellers )
const biggerDesserts = desserts.map((dessert) => ({
    name: dessert.name,
    weightGram: dessert.name === "Brownie" ? dessert.weightGram : dessert.weightGram + 400
}));

console.log("XL desserts kortere: ", biggerDesserts);

// numbers.map( ( element, index , array ) => console.log(numbers));