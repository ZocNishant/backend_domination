const fs = require("fs");

// fs.writeFile("test.txt", "K xa mero vaii.", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Pasa sabai ramroo vo.");
//   }
// });

// fs.readFile("test.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

fs.appendFile("test.txt", " k xa pasa aru.", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
