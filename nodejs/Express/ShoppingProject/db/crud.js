var schema = require('./schema');
var prodSchema = require('./ProductSchema');
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

                    res.render('index', {
                        "user": userObj.username
                    });
                } else {
                    return;
                    //res.send("Enter correct username and password");
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
        console.log("prodschema",prodSchema);
        prodSchema.findOne({'id':'1'},(err, record) => {
            if (err) {
                res.send("Error in Db " + err);
            } else {
                if (record) {
                    console.log("record", record);
                    res.send("id=" + record.id + " name = " + record.name);
                    
                } else {
                    res.send('ERror in data');
                }
            }
        })
    }

}
module.exports = userOperation;