const express=require('express');
const route=express.Router();
const model=require('../model/model');
const logs=require('../utils/logger');

route.post('/register',(req,res)=>{
  var userid= req.body.userid;
  var pwd = req.body.password;
  logs.log("debug","request in login");
  const userobj=new model(userid,pwd);
  
  const crud = require('../config/crud');
  crud.register(userobj,res);

});

route.get('/profile',(req,res)=>{
console.log('request is ', req.session);
logs.log("debug","request in login");
if(req.session && req.session.userid)
{
  res.send("Inside profile page"+req.session.userid);

}
else
{
  const path = require('path');
  const newpath= path.normalize(__dirname+"/..");
  const fullpath=path.join(newpath,"Local/login.html");
  console.log("fullpath",fullpath);
  res.sendFile(fullpath);
}
})
// route.get('/login',(req,res)=>{
//   console.log("Request ",req.query);
//     if(req.query.userid==req.query.pwd){
//       //res.render('dashboard',{"user":req.body.userid});
//       res.sendFile(__dirname+"/public/dashboard.html");
//       //res.send("Welcome "+req.query.userid);
//     }
//     else{
//       res.send("Invalid Userid or Password");
//     }

//   });
//   route.get('/profile',(req,res)=>{
//     res.send("Inside Profile Page");
//   })
route.get('/search',(req,res)=>{
  logs.log("debug","request in login");
  var userid = req.query.userid;
  console.log("Userid is ",userid);
  const userOperations = require("../config/crud");
  userOperations.search(userid,res);
})
route.post('/login',(req,res)=>{
  var userid = req.body.userid; 
  var pwd = req.body.password;
  console.log("userid ",userid,"password",pwd);
  var userObj = new model(userid,pwd);

  var crud  = require('../config/crud');
  crud.login(userObj,res,req);

});
// route.get('/search',(req,res)=>{
// var userid = req.query.userid;
// const crud  =require("../config/crud");
// crud.search(userid,res);
// });
    module.exports=route;