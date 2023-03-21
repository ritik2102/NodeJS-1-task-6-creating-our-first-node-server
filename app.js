// imports this global module
const http=require('http');


// takes a request-listener as an argument
// a request-listener is a function that will execute for every incoming request
// takes the request and returns the response
// createServer will return a server
const server=http.createServer((req,res)=>{
    // we are using an anonymous function as a request-listener
    // console.log(req);
    // process.exit();
    // console.log(req.url,req.method,req.headers);

    // allows us to set a new header(here we having the key set to Content-Type and the value to text/html)
    // attaches a header to our response
    res.setHeader('Content-Type','text/html');
    // write() helps to write some data to the response
    console.log(req.url);
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    if(req.url==='/home')
        res.write('<h1>Welcome home</h1>');
    if(req.url==='/about')
        res.write('<h1>Welcome to about us page</h1>');
    if(req.url==='/node')
        res.write('<h1>Hello from my Node.js server!</h1>');
    res.write('</body>');
    res.write('</html>');
    // end() signifies that the response will be sent back to the client
    // there shhould be nothing after it
    res.end();
});

// listen will actually start a process where NodeJS will keep this running to listen for incoming requests
// first argument is the port on which we want to listen
server.listen(3000);

