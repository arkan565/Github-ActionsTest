const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hola, a todos, lagooners!");
};

const server = http.createServer(requestListener);
server.listen(3502);
module.exports = server;
