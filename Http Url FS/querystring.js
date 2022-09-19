var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});    
    var q = url.parse("http://127.0.0.1:8080/index.html?year=2017&month=february",true,true);    
    console.log(q.host); //returns 'localhost:8080'
    console.log(q.pathname); //returns '/index.html'
    console.log(q.search); //returns '?year=2017&month=february'
    
    var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
    console.log(qdata.month); //returns 'february'    
    var txt = qdata.year + " " + qdata.month;
    res.write("Host: "+q.host+"<br/> PathName: "+ q.pathname+"<br/>       Search: "+qdata.a+" "+qdata.b);
    res.write(txt);
}).listen(8080);
