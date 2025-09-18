const express = require( "express" );
const app = express();

const greekGods = [
    {
        id: 1,
        name: "Zeus"
    },
    {
        id: 2,
        name: "Hercelus",
        isDemiGod: true
    }
];

// Body paresing ...
app.use( express.json() );

// (req, res) er en callback-metode ...
// res.json er legacy! Vi skal bruge res.send ({ data: ...}). 
// Det var noget med headers i gamle dage.
// "data" kommer fra GraphQL, og gør data mere generisk og anvendelige for andre – husk {} for json

app.get('/greekgods', ( req,res ) => {
    res.send( {data: greekGods} );
});

app.get( '/greekgods/:id', ( req,res ) => {
    const providedGreekGodsID = Number( req.params.id );
    const foundGreekGod = greekGods.find( (greekGod) => greekGod.id === providedGreekGodsID );

    if ( !foundGreekGod) {
        res.status(404).send( {errorMessage: "Greek god not found ..."} );
    } else {
        res.send( { data: foundGreekGod } );
    }
} );

let countId = 3;
let nextId = 3;

app.post('/greekgods', (req,res) =>{
    
    // id = lav en counter for id for at undgp at tælle listen+1 
    // hvilket vil give dubletter ved sletning --> se let countId ovenfor

    if(!req.body){
        return res.status(400).send( {errorMessage: "Requires a JSON body"} ); // hvis fejlen ikke er meget tydelig som 404, så bare brug fejl 400
    }
    const newGreekGod = req.body;
    // newGreekGod.id = ++countId;         // prefix notation (kan ikke gøres i java)
    newGreekGod.id = nextId++;              // dette er MySQLs --> det kommer senere med databaser ...
    greekGods.push( newGreekGod );

    return res.send({data:newGreekGod});
});

app.put('/greekgods/:id', (req,res) => {
    // find god
    const providedGreekGodId = Number( req.params.id );
    const foundGreekGod = greekGods.find( (greekGod) => greekGod.id === providedGreekGodId );
    
    if(!foundGreekGod){
        return res.status(404).send( {errorMessage: "No Greek god found with that id"} );
    } else {
        // Update god
        return res.send(req.body);
    }
});



// mangler patch ...
app.patch('greekgods/:id', (req,res) => {
    const providedGreekGodId = Number(req.params.id);
    const foundGreekGodIndex = greekGods.findIndex( (greekGod) => greekGod.id === providedGreekGodId );

    if(foundGreekGodIndex === -1) {
        return res.status(404).send( {errorMessage: `Greek God not found by id ${providedGreekGodId}`} );
    }

    // const newGreekGod = req.body;
    // newGreekGod.id = foundGreekGod.id;
    // splice kan merge de to objekter. ens keys, der bruges den sidste i rækken:
    // husk at sætte id'et igen, så man ikke kan hacke system ved at brugeren kan sende id med!!! 
    
    const foundGreekGod = greekGods[foundGreekGodIndex];
    const newGreekGod = { ...foundGreekGod, ... req.body, id: foundGreekGod.id };

    greekGods[foundGreekGodIndex] = newGreekGod;

    res.send( {data: newGreekGod} );
} );

app.delete('/greekgods/:id', (req,res) => {
    const providedGreekGodId = Number( req.params.id );
    const foundGreekGod = greekGods.find( (greekGod) => greekGod.id === providedGreekGodId );         // for at bruge splice skal vi have index ...
    const returndGodIndex =  greekGods.findIndex( (greekGod) => greekGod.id === providedGreekGodId );

    if(returndGodIndex === -1){
        return res.status(404).send( {errorMessage: 'No Greek god found with that id'} );
    } else {                                                                            // else er valgfri her ...
        greekGods.splice( returndGodIndex, 1);
        return res.status(204).send(`Greek god ${foundGreekGod.name} has been deleted.`);
        console.log(greekGods);
    }
});

// 8080 til backend udvikling HTTP, 9090 til HTTPs
// 3000 er til frontend udvikling
// produktionsporte er 80 HTTP og 443 HTTPs

// app.listen kan tage en callback funktion i andet argument
// error: er undefined hvis der ingen error er herunder
// KOnstanter skal skrives med STORT, konvention

const PORT = 8080;
app.listen(PORT, (error) =>{
    if (error){
        console.log("Error starting the server on PORT", PORT, error);
        return;    
    }
    console.log(`Server is running on port ${8080}`);
});