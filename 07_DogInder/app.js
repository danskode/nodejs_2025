import { count } from "console";
import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// =================== PAGES ======================================

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/frontend/index.html"));
});

app.get("/matches", (req, res) => {
  res.sendFile(path.resolve("public/pages/matches/matches.html"));
});

// =================== APIs ======================================

// Opgave: Lav et api endpoint der fetcher fem hunde fra et eksternt endpoint ...

app.get("/api/dogs", (req, res) => {
  const dogs = [];
  let count = 0;

  function getDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dogs.push({
          id: count,
          imageURL: data.message,
        });
        count++;
        if (count < 5) {
          getDog();
        } else {
          res.send(dogs);
        }
      });
  }

  getDog(); // hent den første hund ...
});

// =================== PORT & LISTNING ======================================

// Sæt PORT med en miljøvariable og hav et alternativ klar med || ...
const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server is NOT running");
  }
  console.log("Server is running on:", PORT);
});
