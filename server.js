const express = require("express");
const userModel = require("./models/user.model.js");

const app = express();

// const dummyUsers = [
//   {
//     username: "johnDoe123",
//     name: "John Doe",
//     email: "johndoe123@example.com",
//     age: "25",
//     isMarried: false,
//   },
//   {
//     username: "janeSmith456",
//     name: "Jane Smith",
//     email: "janesmith456@example.com",
//     age: "30",
//     isMarried: true,
//   },
//   {
//     username: "samWilson789",
//     name: "Sam Wilson",
//     email: "samwilson789@example.com",
//     age: "28",
//     isMarried: false,
//   },
//   {
//     username: "lucyBrown234",
//     name: "Lucy Brown",
//     email: "lucybrown234@example.com",
//     age: "35",
//     isMarried: true,
//   },
//   {
//     username: "mikeJohnson567",
//     name: "Mike Johnson",
//     email: "mikejohnson567@example.com",
//     age: "22",
//     isMarried: false,
//   },
//   {
//     username: "annaTaylor890",
//     name: "Anna Taylor",
//     email: "annataylor890@example.com",
//     age: "27",
//     isMarried: true,
//   },
// ];

app.get("/", (req, res) => {
  res.send("Home Api is working.");
});

// Inserting many all at once
// app.get("/createmany", async (req, res) => {
//   let data = await userModel.insertMany(dummyUsers);
//   res.send(data);
// });

// eq
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ age: { $eq: 30 } });
//   res.send(usersData);
// });

// ne
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ age: { $ne: 30 } });
//   res.send(usersData);
// });

// lt
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ age: { $lt: 30 } });
//   res.send(usersData);
// });

// lte
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ age: { $lte: 30 } });
//   res.send(usersData);
// });

// gt
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ age: { $gt: 30 } });
//   res.send(usersData);
// });

// gte
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ age: { $gte: 30 } });
//   res.send(usersData);
// });

//in
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ age: { $in: [25, 30, 33] } });
//   res.send(usersData);
// });

// nin
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ isMarriade: { $nin: [] } });
//   res.send(usersData);
// });

// exists
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({ isAdmin: { $exists: [false] } });
//   res.send(usersData);
// });

// and
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({
//     $and: [{ isMarried: false }, { age: { $gt: 25 } }],
//   });
//   res.send(usersData);
// });

// or
// app.get("/users", async (req, res) => {
//   const usersData = await userModel.find({
//     $or: [{ isMarried: false }, { age: { $gt: 30 } }],
//   });
//   res.send(usersData);
// });

// regex

app.listen(8888, () => {
  console.log("Server started.");
});
