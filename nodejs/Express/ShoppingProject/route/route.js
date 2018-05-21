const express = require('express');
const route = express.Router();


route.post('/register', (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var password = req.body.password;
    var address = req.body.address;

    const model = require('../model/model');
    const dataObj = new model(username, email, mobile, password, address);
    const crud = require('../db/crud');
    crud.register(dataObj, res);
});

route.get('/search', (req, res) => {
    var email = req.query.email;
    const crud = require('../db/crud');
    crud.search(email, res);
})

route.post('/login', (req, res) => {

    var username = req.body.username;
    var password = req.body.password;
    console.log("pass", password);
    const crud = require('../db/crud');
    const model = require('../model/login');
    const dataObj = new model(username, password);
    console.log("pass", dataObj);
    crud.login(dataObj, res,req);
    console.log('.............');
  

});
route.get('/home', (req, res) => {
  console.log("session", req.session);
  console.log("req usrname",req.session.uid);
    if (req.session && req.session.uid) {        
        //console.log("req.session",req.session);
        console.log("req usrname",req.session.uid);
        //res.sendFile(__dirname, "/Local/Product.html")
        //res.send("product id");
        const Crud=require('../db/crud');
        Crud.home(req,res);

    } else {
        const path = require('path');
        const newpath = path.normalize(__dirname + "/..");
        const fullpath = path.join(newpath, 'Local/login.html');
        console.log("path..", fullpath);
        res.sendFile(fullpath);
    }
});
module.exports = route;