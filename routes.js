

const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){
        // we can use this path too in place of using the file name directly
        // const filePath=path.join(__dirname,'/message.txt');
        fs.readFile('message.txt', 'utf8', (err, data)=> {
            if (err){
                console.log(err);
            }
            console.log('data from file '+data);
            // write() helps to write some data to the response
            res.write('<html>');
            res.write('<head><title>My first page</title></head>');
            res.write(`<body><h1>${data}</h1></body>`);
            res.write(
                '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button> </form></body>'
            );
            res.write('</html>');
            return res.end();
        });
    }
    // allows us to set a new header(here we having the key set to Content-Type and the value to text/html)
    // attaches a header to our response
    // res.setHeader('Content-Type','text/html');
    if(url==='/message' && method=='POST'){
        const body=[];
        // the above two handlers(for data and end are registered and not called immediately, when the event occurs then only the callbacks are called)
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        // 'end' listener is fired when it is done listening for incoming requests
        // we now got all the chunks so now we work with them
        // return so that this block is returned rather than the code after the if block
        return req.on('end',()=>{
            // Buffer is a global object available in Node.js
            // Buffer is used for accumulating large amount of data
            // we will concat our body(this will create a new Buffer and add all the chunks from inside the body)
            const parsedBody=Buffer.concat(body).toString();
            // parsedBody will contain the key-value pair with the name of input field as key and the value that we enter as value
            const message=parsedBody.split('=')[1];
            // will create the file named message.txt with the content
            fs.writeFile('message.txt',message,err=>{
                // 302 implies the redirection to localhost
                if(err){
                    console.log(err);
                }
                res.statusCode=302;
                // Redirecting the user to home route
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }

}

// first way of exporting the module
// module.exports=requestHandler;

// to export multiple things
// module.exports={
//     handler:requestHandler,
//     someText: 'Some hard coded text'
// };

//  all the exports through module.exports are bundled together
// module.exports.handler=requestHandler;
// module.exports.someText='Some hard coded text';


// This also works
exports.handler=requestHandler;
exports.someText='Some hard coded text';



