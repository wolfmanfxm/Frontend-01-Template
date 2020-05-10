const net = require('net');

const client = net.createConnection({ 
    host: "127.0.0.1",
    port: 8899 }, () => {
  console.log('connected to server!');
  client.write(`
POST / HTTP/1.1\r
Content-Type: application/x-www-form-urlencoded\r
Content-Length: 9\r
\r
name=fang`)
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});
client.on('error', (err) => {
  console.log(err);
  client.end();
});