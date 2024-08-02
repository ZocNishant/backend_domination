const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("<h1>Url K xa.</h1>");
  } else {
    console.log("Page not found");
  }
});

server.listen(3000);
