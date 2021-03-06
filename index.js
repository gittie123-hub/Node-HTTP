const http = require('http');

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res)  => {
   //req is the incoming  request from any browser, request object
   //gives us acess to the headers in the incoming HTTP request// 
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'txt/html');
    res.end('<html><body><h1>Hello world!</h1></body></html>');

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})