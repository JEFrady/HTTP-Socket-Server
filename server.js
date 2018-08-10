const net = require("net");

const server = net.createServer(function(socket) {
  socket.write("Server testing");
  socket.pipe(socket);

  socket.on("data", function() {
    console.log("data transmitting");
  });
});

server.listen(8080, function() {
  console.log("server running on port 8080");
});
