var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'Text/html'
    });
    res.end('Hello world');
}).listen(8080);
