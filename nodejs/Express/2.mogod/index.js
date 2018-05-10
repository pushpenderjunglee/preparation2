const express=require('express');
const bodyparser= require('body-parser');//always install from npm
const app=express();

app.set('view engine','ejs');//server side template
app.use(express.static("Local"));// always on top
app.use(bodyparser.urlencoded({extended:false}));
//Routing
 const userroute = require("./router/route");
 app.use("/",userroute);
 app.use(bodyparser.json());// writing sequence should be same


 
 app.use((req,res,next)=>{
  res.sendFile(__dirname+"/Local/error.html");
})
var server = app.listen(process.env.port|1234,()=>{
   console.log("server start",server.address().port);
  // res.send("server started!!");
});