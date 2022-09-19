//console.log('Node is installed!');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write(req.url)
  res.end("<h2>Hello</h2>");
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080');