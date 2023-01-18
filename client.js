const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server."); // code that does something when the connection is first established
    conn.write("Name: JSN");
  });
  

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = connect;

// RULES

// "Move: up" - move up one square(unless facing down)
// "Move: down" - move down one square(unless facing up)
// "Move: left" - move left one square(unless facing right)
// "Move: right" - move left one square(unless facing left)