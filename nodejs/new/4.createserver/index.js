const http=require('http');
const config=require('./config/config.js');
const url=require('url');
const https = require("https");

http.createServer(httpreqres).listen(config.port,()=>{
console.log("server started at port 8080...",config.port," server name is ",config.name);
});

function httpreqres(req,res)
{
  console.log("req.url:"+req.url);
  var urlObj=url.parse(req.url,true);
  console.log("urlObj:",urlObj);
  var urlPath=urlObj.pathname;
  console.log("----urlPath----",urlPath);
  if(urlPath=='/login' && req.method=='GET')
  {
    var userid=urlObj.query.username;
    var password=urlObj.query.password;
    console.log("username",userid,"password",password);
    const User1 = require('./models/user');
    var userObject = new User1(userid,password);
    const operation=require('./helper/useroperation');
    const msg=operation.isAuthenticate(userObject)?"welcome"+userid:"Invalid User name";
    res.end(msg);
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
 // res.write(" Method:"+req.method+" URL:"+req.url);// angular is not working while uncomment
  
  
  if(req.url=='/' && req.method =='GET')
  {
  staticFileServe('/index.html',res);
  }
  if(isStatic(req.url))
  {
    staticFileServe(req.url,res);
  }
 //res.end("by");
}

function isStatic(fileName)
{
 const extension=[".html",".css",".js",".jpeg",".png",".mp3"];
 var path=require('path');
 var ext = path.extname(fileName);
 return extension.indexOf(ext)>=0;
}
function staticFileServe(fileName,res){ 
    const path = require('path');
    const fs=require('fs');
    var fullpath=path.join(__dirname,"/public"+fileName);
    console.log(fullpath);
    var readStream=fs.createReadStream(fullpath);
    readStream.pipe(res);
}
