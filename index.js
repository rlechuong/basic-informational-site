const http = require("node:http");
const fs = require("node:fs");

function serveFile(filePath, statusCode, res) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    serveFile("./index.html", 200, res);
  } else if (url === "/about") {
    serveFile("./about.html", 200, res);
  } else if (url === "/contact-me") {
    serveFile("./contact-me.html", 200, res);
  } else {
    serveFile("./404.html", 404, res);
  }
});

server.listen(8080, () => {
  console.log("Server Running On Port 8080");
});
