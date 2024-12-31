const http = require('http');

const server = http.createServer((req, res) => {
  // Use process.nextTick to delegate the long-running task to the next event loop iteration
  process.nextTick(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      if (counter === 1000000) {
        clearInterval(interval);
        res.end('Done!');
      }
    }, 0);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});