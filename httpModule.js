const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome ...");
  else
    res.end(`
    <h1>Error 404</h1>
    <a href="/" target="_self">Go to home page</a>
    `);
});

server.listen(3000);
