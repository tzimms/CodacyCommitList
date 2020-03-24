const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (request, response) => {
  if (request.url === '/') {
    const compute = fork('app.js');
    compute.send('start');

    compute.on('message', result => {
      res.end(`Long computation result: ${result}`)
    });
  } else {
    res.end('Route not found')
  }
});

server.listen(3000);
 