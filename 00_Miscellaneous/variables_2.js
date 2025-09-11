"use strict";
// Brug strict mode for at tjekke ekstra blandt andet for scoping issues og 

// Denne mangler deklaration: const ... så det er en total global variable, der går ind i alle dele af systemet ... scoping issue
// totalGlobalVarible  = "Never EVER!! do this";

// var skal ikke bruges men const, da det igen kan give scoping issues ...
// var globalScope = "Never do this!";

// Brug som udgangspunkt const, ellers brug let, hvis der skal ændres i en ... ()
// const public = "variable"; virker ikke med strict mode, fordi public er reserveret ord
// Vi kan ikke reasigne const og vi skal initialize const, når vi deklarerer den
// We can change values of constant but we cannot reassign it
// const fanger fejl (med strict mode)

//const someType = 123;
// someType += 1;

const notConstantObject = {};
notConstantObject.name = "Rune";

const notConstantArray = [1];
notConstantArray.push(2);


function someFunction(){
    // function scope:
    // her kommer kode ...
    // console.log("What is this?")
}

{
    // Block scope:

    // var og let bleeds in i resten, derfor bliver dette false
    var someVariable = true;
    {
        var someVariable = false;
    }
    console.log(someVariable);
}

// Printer 6 6 gange, fordi "var" bløder ind i scopet ... brug "let" i stedet. Scoping issues igen.
for (var i = 0; i <= 5; i++){
    setTimeout( () => {
        console.log(i);
    }, 1000);
}
