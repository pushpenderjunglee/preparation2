

const express=require('express');
const route=express.Router();

//*****GET DATA */

route.get('/',(req,res)=>{
    res.send("welcome"+req.query);
    res.sendFile(__dirname+"/Local/index.html");
    });
    
    route.get('/login',(req,res)=>{
    if(req.query.userid==req.query.password)
    { 
       // res.send("welcome"+req.query);
        res.render('logindetail',{"user":req.query.userid });
        //res.sendFile(__dirname,"/Local/logindetail.html");
    }
    else{
    res.send('you entered wrong Data !!!');
      }
    });
    
    //******* GET END */
    
    route.post('/',(req,res)=>{
    //   console.log("/inside ////");
    // res.send("Hello Post");
    res.sendFile(__dirname+"/Local/index.html");
    });
    
    route.post('/login',(req,res)=>{
      
      if(req.body.userid==req.body.password)
      { 
        console.log(" req.body.userid ",req.body.userid,"req.body.password",req.body.password);
          //res.send("welcome"+req.body);
          res.render('logindetail',{"user":req.body.userid });
        //  res.sendFile(__dirname,"/Local/logindetail.html");
      }
      else{
        res.send('you entered wrong Data !!!');
          }
    });
    
    route.use((req,res,next)=>{
      res.sendFile(__dirname,"/Local/error.html");
    });

    module.exports=route;