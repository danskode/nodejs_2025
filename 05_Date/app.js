const express = require("express");
const app = express();

// zulu time
// const now = Date.now();
//UTC
const now2 = new Date();

app.get("/months/v1", (req, res) => {
  const months = [
    "January",
    "February",
    "Marts",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[new Date().getMonth()];
  res.send({ data: currentMonth });
});

app.get("/months/v2", (req, res) => {
  const currentMonth = new Date().toLocaleDateString("en-uk", {
    month: "long",
  });
  res.send({ data: currentMonth });
});

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

app.get("/day/v1", (req, res) => {
  // const currentDay = new Date().getDay();
  //const currentDay = new Date().toLocaleDateString("en-uk", {TodayItIs: "str"});

  const currentDay = days[new Date().getDay()];

  res.send({ data: currentDay });
});

app.get("/day/v2", (req, res) => {
  const currentDay = new Date().toLocaleDateString("en-uk", {
    weekday: "long",
  });
  res.send({ data: currentDay });
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log("Server is nut running on PORT", PORT, error);
  }
  console.log(`Server is up on ${now2}`);
});
