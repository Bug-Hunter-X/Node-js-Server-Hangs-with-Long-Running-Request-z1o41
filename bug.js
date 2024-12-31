const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    if (counter === 1000000) {
      clearInterval(interval);
      res.end('Done!');
    }
  }, 0);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});