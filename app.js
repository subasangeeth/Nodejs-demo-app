const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello CICD PipeLine using GitHub Actions \n');
});

server.listen(8081, () => {
  console.log('Server running at http://localhost:8081/');
});
