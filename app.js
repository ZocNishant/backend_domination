const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Pasa");
});

app.use(function (err, req, res, next) {
  res.status(500).send(err.message);
});

app.listen(3000);
