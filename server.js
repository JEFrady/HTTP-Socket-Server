const net = require("net");

var serverSide = "testing serverSide";
console.log(serverSide);

const server = net.createServer(client => {
  client.write("SERVER RESPONSE");
  // welcome message
  client.write("Hello World!");

  // server.listen(8080, "0.0.0.0"); -> from docs

  client.on("data", data => {
    // let username = data.toString();
    // console.log(username);
    // client.write("please enter password");
    client.on("data", data => {
      console.log(data.toString());
    });
  });
  // push newly connected clients into a DB (from client.js file)
  // clientDB.push(client);
});

// accept username input
server.listen(8080, "0.0.0.0", () => {
  console.log("server connected on port 8080");
});

//   client.on("data", data => {
//     let username = data.toString();
//     console.log(username);
//     if (username.includes("nick")) {
//       client.write("username created!");
//       setTimeout(() => {
//         client.write("please enter password");
//       }, 1000);
//     }
//     client.on("data", data => {
//       let clientPwd = data.toString();
//       console.log(clientPwd);
//       if (typeof clientPwd === "string") {
//         client.write("password created!");
//       }
//     });
//   });
//   // push newly connected clients into a DB (from client.js file)
//   clientDB.push(client);
