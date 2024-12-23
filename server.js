const express = require("express");
const userModel = require("./models/user.model.js");

const app = express();

const dummyUsers = [
  {
    username: "johnDoe123",
    name: "John Doe",
    email: "johndoe123@example.com",
    age: "25",
    isMarried: false,
  },
  {
    username: "janeSmith456",
    name: "Jane Smith",
    email: "janesmith456@example.com",
    age: "30",
    isMarried: true,
  },
  {
    username: "samWilson789",
    name: "Sam Wilson",
    email: "samwilson789@example.com",
    age: "28",
    isMarried: false,
  },
  {
    username: "lucyBrown234",
    name: "Lucy Brown",
    email: "lucybrown234@example.com",
    age: "35",
    isMarried: true,
  },
  {
    username: "mikeJohnson567",
    name: "Mike Johnson",
    email: "mikejohnson567@example.com",
    age: "22",
    isMarried: false,
  },
  {
    username: "annaTaylor890",
    name: "Anna Taylor",
    email: "annataylor890@example.com",
    age: "27",
    isMarried: true,
  },
];

app.get("/", (req, res) => {
  res.send("Home Api is working.");
});

app.get("/createmany", async (req, res) => {
  let data = await userModel.insertMany(dummyUsers);
  res.send(data);
});

app.listen(8888, () => {
  console.log("Server started.");
});

// Inserting many all at once
// eq
// ne
// lt
// lte
// gt
// in
// nin
// exists
// or
// size
// regex
