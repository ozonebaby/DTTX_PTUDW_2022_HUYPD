const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method);
    const data={
        'id':1,
        'name': 'iphone'
    };
    
    res.writeHead(200, {'content-type': 'text/json'});
    res.end(JSON.stringify(data));

 /*   console.log(req);
    res.statusCode= 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h2>Hello Huy</h2>');
*/
});

server.listen(port,hostname, () =>{
    console.log(`Web server lang nghe tren http://${hostname}:${(port)}`)
});

