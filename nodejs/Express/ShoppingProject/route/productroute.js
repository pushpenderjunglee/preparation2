var express =require('express');
const route = express.Router();

route.post('/create',(req,res)=>{

});
route.post('/delete',(req,res)=>{

});
route.post('/show',(req,res)=>{

});
route.post('/update', (req, res) => {
    if (req.session && req.session.uid) {
        const crud = require('../db/crud');
        crud.admin(req, res);
    } else {
        const path = require('path');
        const newpath = path.normalize(__dirname + "/..");
        const fullpath = path.join(newpath, 'public/login.html');
        console.log("path..", fullpath);
        res.sendFile(fullpath);
    }
});
app.post('/create', upload.single('imageupload'), function (req, res) {
    res.send("File upload sucessfully.");
});