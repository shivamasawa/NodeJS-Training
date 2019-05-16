var http = require('http');

var server = http.createServer((req,res) => {
    console.log('Request was made : '+req.url);
    res.end('Hey buddy');
})
server.listen(5001, '127.0.0.1');
console.log('It is on port 5001');