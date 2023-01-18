let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

let interval;
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key !== 'f') {
    clearInterval(interval);
  }
  if (key === 'w') {
    interval = setInterval(() => {
      connection.write("Move: up");
    }, 70);
  }
  if (key === 'a') {
    interval = setInterval(() => {
      connection.write("Move: left");
    }, 50);
  }
  if (key === 's') {
    interval = setInterval(() => {
      connection.write("Move: down");
    }, 70);
  }
  if (key === 'd') {
    interval = setInterval(() => {
      connection.write("Move: right");
    }, 50);
  }
  if (key === 'f') {
    connection.write("Say: GG");
  }
};

module.exports = setupInput;