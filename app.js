// imports this global module
const http=require('http');


// takes a request-listener as an argument
// a request-listener is a function that will execute for every incoming request
// takes the request and returns the response
// createServer will return a server
const server=http.createServer((req,res)=>{
    // we are using an anonymous function as a request-listener
    console.log("ritik gangwar");
    res.render("ritik");
});

// listen will actually start a process where NodeJS will keep this running to listen for incoming requests
// first argument is the port on which we want to listen
server.listen(3000);

