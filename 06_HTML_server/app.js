//const express = require("express"); <-- udfases fra nu af ...

import express from "express";

const app = express();

app.use(express.static("public")); // Gør hele public mappen tilgængelig så vi både kan bruge css og html
// Dette er en sikkerhedsfeature, da man ellers bare kan hente filer, derfor kan man ikke umiddelbart bare linke til css.
// Derfor skal vi gør vi hele public mappen tilgængelig men kun med de filer vi vil dele med alle!!!
// res.sendFile(__dirname + "/public/style.css"); her er det manuelt
// Men vi skal stadig serve html filen manuelt i app.get("/") med sendFile ...

// importer med require ...
// const candyCommon = require("./util/candyCommon.js");
//console.log(candyCommon);

// Med ES modules ...
import candyESModule, { cantImportJsonFiles } from "./util/candyESModule.js";
console.log(candyESModule);
console.log(cantImportJsonFiles);

import path from "path";

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/candy", (req, res) => {
  res.sendFile(path.resolve("public/candy/candy.html"));
});

// med ES modules udfases __dirname ...
app.get("/redirections", (req, res) => {
  // res.sendFile(__dirname + "/public/redirects/redirections.html");
  res.sendFile(path.resolve("public/redirects/redirections.html"));
});

// redirect i backenden ...
app.get("/visitorshallway", (req, res) => {
  res.redirect("visitorcount");
});

let visitorCount = 0;

app.get("/visitorcount", (req, res) => {
  // lav html-delen her ...
  res.send({ data: ++visitorCount });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}!`);
});
