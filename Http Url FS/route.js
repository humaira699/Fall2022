var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req,res){
    console.log(req.url);
    if (req.url === '/'){// && req.method === 'GET') {
        //res.writeHead(200, {'Content-Type': 'text/html'});
        render(res, 'index.htm');
        //res.write(data);
    
    } 
    else if (req.url === '/index'){// && req.method === 'GET') {
          render(res,'index.htm');
        
    }
    else if (req.url === '/about'){// && req.method === 'GET') {
        render(res,'about us.htm');
        
    } 
    else if (req.url === '/contact'){// && req.method === 'GET') {
        render(res,'contact us.htm');        
    }  
    
}).listen(8080);

function render(res, htmlFile){
    fs.readFile(htmlFile, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    
}