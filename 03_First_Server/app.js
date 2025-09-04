const express = require("express");
const app = express();

// route (også kaldet en route handler), der består af to argumenter et endpoint og en callback function
app.get("/", (req, res) => {
    res.send({
        body:"Hello World!"
    })
} );

app.get("/planets", (req, res) => {
    res.send({ name : "Jupiter" })
});

app.get("/planets/favoriteplanet", (req, res) => {
    res.send({ name: "Mars" })
});


app.get("/waterfalls", (req,res) => {
    res.send({ name: "Niagra Falls"});
});

app.get("/waterfalls/:likingScore", (req, res) => {
    
    const score = req.params.likingScore;

    res.send({
        likingScore: `Din likingScore er ${score}`
    })
});


// Lav et "bag" endpoint, hvor man kan sende to ting i requestet, så man jkan få response: "Min taske indeholder en ... og en  ..."
app.get("/bag/:content1/:content2", (req, res) => {

    const content1 = req.params.content1;
    const content2 = req.params.content2;

    res.send({
        response: `My bag contains ${content1} and ${content2}`
    });

});


//----- noter ------//

// Rækkefølgen:
// 1. Vi importerer ...
//      const express = require("express");
// 2. Vi instantiere ...
//      const app = express();
// 3. Vi lytter på en port ...
//      app.listen(8080);





app.listen(8080);