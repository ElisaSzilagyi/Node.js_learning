const http = require('http');
const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('Hello, world!');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}); //this is an event emitter



server.listen(3000); //port = 3000

console.log('Listening on port 3000...');