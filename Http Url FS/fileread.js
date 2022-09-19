var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.htm', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("I am the server and reading the index page data:  "+data);
    res.write(__filename+'<br/>');
    res.write(__dirname+'<br/>');
    res.write(process.cwd()+'<br/>');
    //res.write(process.chdir('../'));
    res.write(__dirname);
    return res.end();
  });
}).listen(8080);