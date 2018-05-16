const Schema = require('./schema');
var userOperation = {

    register(object, res) {
        const bcrypt = require('bcrypt');
        var salt=bcrypt.genSaltSync(11);
        var hash = bcrypt.hashSync(object.pwd,salt);
        object.pwd=hash;
        Schema.create(object, (error) => {
            if (error) {
                res.send("error in storage in db" + error);
            }
            else {
                console.log("object", object);
                res.send("you registered succesfully " + object.userid + " " + object.pwd);

            }
        });
    },
    login(object, res,req) {

        const bcrypt = require('bcrypt');
       
        var passwd=object.pwd;

        Schema.findOne({ "userid": object.userid}, (error, record) => {
            console.log("**userid = ", object.userid)
            console.log("**password = ", object.pwd)
           
            if (error) {
                res.send("ERROR IN LOGIN");
            }
            else {
               
               
                if (record) {

                    console.log('session  =', req.session);
                    console.log("record..",record);
                    if(bcrypt.compareSync(passwd,record.pwd)){                    
                        {
                        req.session.userid=record.userid;
                        res.render('logindetail', { "user":req.session.userid });
                        }
                    // if(req.session)
                    // {
                    //     req.session.userid=record.userid;
                    //     console.log('Session is',req.session);
                    //     res.render('logindetail', { "user":req.session.userid });
                    // }
                }
                else {
                    console.log("object in login", object.userid, 'record  =', record);
                    res.send("INvalid User name");
                }
            }
        }
        });
    },
    search(userid, res) {
        Schema.findOne({ "userid": userid }, (err, record) => {
            if (err) {
                res.send("ERROR IN DB" + err);
            }
            else {
                if (record) {
                    res.json({ "message": "Email id already exist" });
                }
                else {
                    res.json({ "message": "you can use this userid" });
                }
            }
        });
    }
}
module.exports = userOperation;