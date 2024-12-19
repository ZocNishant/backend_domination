const fs = require("fs");

fs.readFile("./abc.txt", "utf8", (err, data) => {
  if (err) console.log(err.message);
  else console.log(data);
});
