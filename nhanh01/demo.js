const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log(req);
    res.statusCode= 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h2>Hello Huy</h2>');

});

server.listen(port,hostname, () =>{
    console.log(`Web server lang nghe tren http://${hostname}:${(port)}`)
});

