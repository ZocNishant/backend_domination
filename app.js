const express = require("express");

const app = express();

let data = [1, 2, 3, 4, 5];

app.get("/", (req, res, next) => {
  try {
    res.send("pasa");
  } catch (err) {
    next(err);
  }
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.post("/data/:number", (req, res) => {
  data.push(parseInt(req.params.number));
  res.send(data);
});

app.listen(3000);
