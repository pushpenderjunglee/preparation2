const express= require('express');
const bodyparser = require('body-parser');
const app = express();

const cookiparser = require('cookie-parser');
app.set('view engine','ejs');   
app.use(express.static("Local")) ;
app.use(bodyparser.urlencoded({extended:false}));

const routing=require("./route/route");
app.use(cookiparser());
const session = require('express-session')
app.use(session({
    secret:'thiissecret',
    resave:false,
    saveUnintialized:true,
    cookie:{secure:false,maxAge:60000}
}));

app.use("/",routing);
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.sendFile(__dirname+"/Local/error.html");
})

var server = app.listen(1234,()=>{
    console.log("server-start",server.address().port);
}) 