# Node.js Server Hang with Long-Running Request

This repository demonstrates a common issue in Node.js applications where a long-running request can cause the server to become unresponsive. The problem stems from blocking the event loop, preventing it from handling new connections and requests.

## Bug Description
The `bug.js` file contains a simple HTTP server that simulates a long-running task.  A loop runs for a significant number of iterations (1,000,000) before responding. This blocks the event loop, making the server unresponsive.

## Solution
The `bugSolution.js` file demonstrates how to address this issue using asynchronous operations. It accomplishes this through the use of `process.nextTick` to delegate the work to the next iteration of the event loop thereby releasing control to the server immediately after the request is received.