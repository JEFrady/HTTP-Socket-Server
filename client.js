const net = require("net");
const port = process.argv[3];
const host = process.argv[2];

let argv = process.argv;
// console.log(argv);


const client = net.createConnection(port, host, () => {
  const date = new Date();
  console.log('Client has started')
  client.write(
    `GET HTTP/1.1\nDate: ${date.toUTCString()}\nHost: ${host}\nConnection: keep-alive\nUser-Agent: Jamie\nAccept: */*`
  );
  client.on('data', data => {
    console.log(data.toString())
  })
})
