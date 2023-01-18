const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to server."); // code that does something when the connection is first established
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = connect;