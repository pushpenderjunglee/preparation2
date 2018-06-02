var schema = require('./schema');
var Product = require('./ProductSchema');
var userOperation = {
    register(UserObj, res) {
        schema.create(UserObj, (error) => {
            if (error) {
                res.send('Email id Already exist');
            } else {
                res.send("data is :" + UserObj.username + UserObj.email + UserObj.mobile + UserObj.password + UserObj.address);
            }
        });
    },
    login(userObj, res, req) {
        schema.findOne({
            "username": userObj.username,
            "password": userObj.password
        }, (err, record) => {
            if (err) {
                res.send("Error in Db" + err);
            } else {
                if (record) {
                    // res.send("result" + record);
                    // if (req.session) {
                         req.session.uid = record.username;
                        var name = req.session.uid;
                    //     if (name != "admin") {
                    //         name = "home"
                    //         res.writeHead(302, {
                    //             "Location": "http://localhost:1234/" + name
                    //         });
                    //         res.end();
                    //     } 
                        if (name != "admin") {
                            
                            const path = require('path');
                            const newpath = path.normalize(__dirname + "/..");
                            // const fullpath = path.join(newpath, 'public/Admin/index.html');
                            const fullpath = path.join(newpath, 'public/main/main.html');
                            console.log(fullpath);
                            res.sendFile(fullpath);
                            res.end();
                        } 
                        else {
                            const path = require('path');
                            const newpath = path.normalize(__dirname + "/..");
                             const fullpath = path.join(newpath, 'public/Admin/index.html');
                            
                            console.log(fullpath);
                            res.sendFile(fullpath);
                       // }
                        console.log("req.session.uid", req.session.uid);
                        // res.render('index', {
                        //     "user": userObj.username
                        // });
                        }
                // } else {
                //     return
                //     //res.send("Enter correct username and password");
                }
            }
        
        });
    },
    search(email, res) {
        schema.findOne({
            "username": email
        }, (err, record) => {
            if (err) {
                res.send("Error in Db" + err);
            } else {
                if (record) {
                    res.json({
                        'message': 'Email Id already exist'
                    });
                } else {
                    res.json({
                        'message': 'You can use this mail id'
                    });
                }
            }
        });
    },
    home(req, res) {
        // console.log("prodschema", prodSchema);
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content - Type, Accept ");

        Product.find({}, (err, record) => {
            if (err) {
                res.send("Error in Db " + err);
            } else {
                // console.log("***record", record);
                if (record) {
                    console.log(record);

                    res.status(200).send({

                        success: true,
                        records: record
                    });

                    // res.send("id=" + record.id + " name = " + record.name);
                } else {
                    res.send('ERror in data');
                }
            }
        })
    },
    admin(req, res) {
        Product.create(UserObj, (error) => {
            if (error) {
                res.send('Email id Already exist');
            } else {
                res.send("sucess");
            }
        });
    }
}
module.exports = userOperation;