const net = require("net");
const port = 8080;
const index = require('./index.js');
const hydrogen = require('./hydrogen.js');
const helium = require('./helium.js');
const fourOFour = require('./404.js');
const styles = require('./styles.js');


const server = net.createServer((client) => {
  client.setEncoding('utf8');
  client.on('data', data => {
    let headerLine = data.split('\n')[0].split(' ');
    let uri = headerLine[1];

    getURI(uri, client);
    
  })
})

server.listen(port, () => {
  console.log('Server running on ', port);
  console.log('Server running on ', port);
});

function getURI(uri, client) {
  console.log('Serving ', uri);
  const date = new Date();
  if (uri ==='/index.html' || uri === '/' || uri === '') {
    const message = `HTTP/1.1 OK\nServer: StupidChat\nDate ${date}\nContent-Type: *\n\n${index}`
    client.write(message);
    client.end();
  }
  else if (uri ==='/hydrogen.html') {
    const message = `HTTP/1.1 OK\nServer: StupidChat\nDate ${date}\nContent-Type: *\n\n${hydrogen}`
    client.write(message);

    client.end();
  }
  else if (uri ==='/helium.html') {
    const message = `HTTP/1.1 OK\nServer: StupidChat\nDate ${date}\nContent-Type: *\n\n${helium}`
    client.write(message);
    console.log('Serving', uri);
    client.end();
  }
  else if (uri ==='/404.html') {
    const message = `HTTP/1.1 OK\nServer: StupidChat\nDate ${date}\nContent-Type: *\n\n${fourOFour}`
    client.write(message);

    client.end();
  }
  else if (uri ==='/css/styles.css') {
    const message = `HTTP/1.1 OK\nServer: StupidChat\nDate ${date}\nContent-Type: *\n\n${styles}`
    client.write(message);

    client.end();
  }
  else {
    const message = `HTTP/1.1 OK\nServer: StupidChat\nDate ${date}\nContent-Type: *\n\n${fourOFour}`
        console.log('Serving', uri);
    client.write(message);
    client.end();
  }

}
// console.log(data.split('\n')[0].split(' ')[0]);