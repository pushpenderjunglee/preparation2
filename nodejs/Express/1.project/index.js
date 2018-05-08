const express=require('express');
const app=express();
const bodyparser= require('body-parser');//always install from npm

app.set('view engine','ejs');//server side template
app.use(express.static("Local"));// always on top

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



//Routing
 const userroute = require("./router/route");
 app.use("/",userroute);



var server = app.listen(process.env.port|1234,()=>{
   console.log("server start",server.address().port);
  // res.send("server started!!");
});