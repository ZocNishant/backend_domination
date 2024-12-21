const exp = require("constants");
const express = require("express");

const expressSession = require("express-session");
const flash = require("connect-flash");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(
  expressSession({
    resave: flash,
    saveUninitialized: false,
    secret: "pasa k xa",
  })
);

app.use(flash());

app.get("/", (req, res) => {
  res.send("Hello! Welcome to the server.");
});

app.get("/data", (req, res) => {
  res.send("Done.");
});

app.listen(8888);

// cookie is for saving data in browser
// session is for saving data in server
// comment
