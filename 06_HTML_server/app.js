const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
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
