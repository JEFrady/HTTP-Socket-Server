const net = require("net");

const server = net.createServer(function(socket) {
  socket.write("Server testing");
  socket.pipe(socket);
});

server.listen(8080, "0.0.0.0");
