const http = require('http');

http.createServer((request, response) => {
  response.write('Hello from the simple server!');
  response.end();
}).listen(3000);