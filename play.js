const net = require("net");
const IP = '192.168.1.102';
const PORT = 50541;

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    // eslint-disable-next-line no-undef
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();