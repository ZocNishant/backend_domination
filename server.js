const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(req.url);
});

app.get("/profile/:username", (req, res) => {
  res.send(req.params.username + " Hello");
});

app.listen(8888, () => {
  console.log("Hello");
});
