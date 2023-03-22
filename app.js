// imports this global module
const http=require('http');
// rotes constant here will hold the function requestHandler
const routes=require('./routes');
// const path=require('path');

console.log(routes.someText);
// takes a request-listener as an argument
// a request-listener is a function that will execute for every incoming request
// takes the request and returns the response
// createServer will return a server
const server=http.createServer(routes.handler);

// listen will actually start a process where NodeJS will keep this running to listen for incoming requests
// first argument is the port on which we want to listen
server.listen(3000);



