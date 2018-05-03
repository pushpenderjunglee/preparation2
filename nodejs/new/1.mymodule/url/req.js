var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q=url.parse(req.url,true).query;
    var data=q.name+" "+q.day;
   // res.write(req.url);
    res.end(data);
}).listen(8080);