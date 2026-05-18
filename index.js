const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (url === "/about") {
    fs.readFile("./about.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (url === "/contact-me") {
    fs.readFile("./contact-me.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    fs.readFile("./404.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

server.listen(8080, () => {
  console.log("Server Running On Port 8080");
});
