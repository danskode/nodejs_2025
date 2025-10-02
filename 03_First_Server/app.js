const express = require("express");
const app = express();

// set up body parsing (til post!) ...
app.use(express.json());

// route (også kaldet en route handler), der består af to argumenter et endpoint og en callback function
app.get("/", (req, res) => {
  res.send({
    body: "Hello World!",
  });
});

app.get("/planets", (req, res) => {
  res.send({ name: "Jupiter" });
});

app.get("/planets/favoriteplanet", (req, res) => {
  res.send({ name: "Mars" });
});

app.get("/waterfalls", (req, res) => {
  res.send({ name: "Niagra Falls" });
});

app.get("/waterfalls/:likingScore", (req, res) => {
  const score = req.params.likingScore;

  res.send({
    likingScore: `Din likingScore er ${score}`,
  });
});

// Lav et "taske"-endpoint, hvor man kan sende to ting i requestet, så man jkan få response: "Min taske indeholder en ... og en  ..."
app.get("/bag/:content1/:content2", (req, res) => {
  const content1 = req.params.content1;
  const content2 = req.params.content2;

  res.send({
    response: `My bag contains ${content1} and ${content2}`,
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

// vi kan sende variable via get på to måder: path variable og query string

app.get("/urls", (req, res) => {
  res.send({
    data: "some urls",
  });
});

// localhost:8080/urls?lenght=medium&spiciness=6

app.get("/urls", (req, res) => {
  console.log(req.query);
  res.send();
});

// POST ...
// tre på post: path, query OG body
// express havde i starten ikke body parsing i frameworket.
// Det er inkluderet i dag. Vær obs ved LLM legacy...
// undefined af body, selv tom body, skyldes at der ikke sker body parsing!

app.post("/subjects", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// .sendFile() – forventer absolut path ... derfor __dirname
app.get("/fashionbrands", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Opgave:  lav POST fashion brands
app.post("/fashionbrands", (req, res) => {
  res.send(req.body);
  res.send();
});

app.get("/proxy", (req, res) => {
  /* assignment:
     make a request to google and serve it to the client
     you have all the knowledge to solve this exercise already
     just solve it below
     https://www.google.com/
     */
  // fetch("https://www.google.com/")
  // .then((response) => response.text())
  // .then((result) => res.send(result));
  fetch("https://www.google.com/")
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const decoder = new TextDecoder("ISO-8859-1");
      const text = decoder.decode(buffer);
      res.send(text);
    });
});

app.listen(8080);
