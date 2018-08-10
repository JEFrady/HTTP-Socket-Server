const http = require("http");

const server = http.createServer(function(request, response) {
  socket.write("Server testing");
  socket.pipe(socket);

  socket.on("data", function() {
    console.log("data transmitting");
  });
});

// const server = http.createServer();
// server.on('request', (request, response));

server.listen(8080, function() {
  console.log("server running on port 8080");
});
