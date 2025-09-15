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

app.post('/greekgods', (req,res) =>{
    res.send(req.body);
});

app.put('/greekgods/:id', (req,res) => {
    // find god
    const providedGreekGodsID = Number( req.params.id );
    const foundGreekGod = greekGods.find( (greekGod) => greekGod.id === providedGreekGodsID );
    
    if(!foundGreekGod){
        res.status(404).send( {errorMessage: "No Greek god found with that id"} )
    } else {
        // Update god
        res.send(req.body);
    }
});

app.delete('/greekgods/:id', (req,res) => {
    const providedGreekGodsID = Number( req.params.id );
    const foundGreekGod = greekGods.find( (greekGod) => greekGod.id === providedGreekGodsID );
    const indexReturned =  greekGods.findIndex( (greekGod) => greekGod.id === providedGreekGodsID );

    if(!foundGreekGod){
        res.status(404).send( {errorMessage: 'No Greek god found with that id'} );
    } else {
        greekGods.splice( indexReturned, 1);
        res.send(`Greek god ${foundGreekGod.name} is deleted.`);
        console.log(greekGods);
    }
});

// 8080 til backend udvikling HTTP, 9090 til HTTPs
// 3000 er til frontend udvikling
// produktionsporte er 80 HTTP og 443 HTTPs
app.listen(8080);