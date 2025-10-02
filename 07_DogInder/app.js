import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// =================== PAGES ============================

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/frontend/index.html"));
});

app.get("/matches", (req, res) => {
  res.sendFile(path.resolve("public/pages/matches/matches.html"));
});

// =================== APIs ============================

// Opgave: Lav et api endpoint der finder fem hunde ...PORT

app.get("/api/dogs", (req, res) => {
  fetch("https://dog.ceo/api/breeds/image/random/5").then();
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server is NOT running");
  }
  console.log("Server is running on:", PORT);
});
