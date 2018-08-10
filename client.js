const net = require("net");

let client = new net.Socket();
client.connect(8080, '0.0.0.0', function() {
    console.log('Connected');
    client.write('Hello server! - From Client');
});

client.on('data', function(data) {
    console.log('Received' + data);
    client.write('Received data');
})
