const net = require("net");

const IP = '192.168.1.102';
const PORT = 50541;

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  return conn;
};

module.exports = connect;