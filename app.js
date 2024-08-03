const express = require("express");

const app = express();

const expressSession = require("express-session");

app.use(
  expressSession({
    secret: "randome stuff",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", function (req, res) {
  res.send("Pasa k xa");
});

app.get("/create", function (req, res) {
  req.session.polo = true;
  res.send("Session created");
});

app.listen(3000);
