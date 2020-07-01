
import http from "http";

const server = http.createServer();
server.listen(8080);

server.on("request", (req, res) => {
  res.write("Hello HTTP!\n");
  setTimeout(() => {
    res.write("I Can Stream!\n");
    res.end();
  }, 3000);
});