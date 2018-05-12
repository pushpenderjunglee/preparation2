const express = require("express");
const app= express();
app.set("view engine","ejs");
const passportGoogleSt = require("./passport");  // Setup
const passport = require("passport");
app.use(passport.initialize());
app.get('/',(req,res)=>{
res.render('index');
});
app.get('/login',(req,res)=>{

});
app.get('/google',passport.authenticate('google',{
   
    scope : ['profile']
    
}));
app.get('/google/callback',passport.authenticate('google',
{session: false}),(req,res)=>{
    console.log(".....................")
    console.log("request is......",req);
    console.log(".....................")
    res.render('welcome',{"user":req.user.profile.displayName});
    //res.render('dashboard',{"user":req.body.userid});
    console.log(".....................",req.user.profile.displayName);
});


const server = app.listen("1234",()=>{
    console.log("Server Start at  ",server.address().port);
})