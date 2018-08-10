const net = require("net");

const client = new net.Socket();
client.connect(
  8080,
  "0.0.0.0",
  function() {
    console.log("Connected");
    client.write("Client testing");
  }
);

client.on("data", function(data) {
  console.log("Received: " + data);
  // client.destroy(); // kill client after server's response
});

client.on("close", function() {
  console.log("Connection closed");
});
