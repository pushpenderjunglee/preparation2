const Schema = require('./schema');
var userOperation = {

    register(object, res) {
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
    login(object, res) {
        Schema.findOne({ "userid": object.userid, "pwd": object.pwd }, (error, record) => {
            console.log("**userid = ", object.userid)
            console.log("**password = ", object.password)
            if (error) {
                res.send("ERROR IN LOGIN");
            }
            else {
                if (record) {
                    console.log('record  =', record);
                    res.render('logindetail', { "user": record.userid });
                }
                else {
                    console.log("object in login", object.userid, 'record  =', record);
                    res.send("INvalid User name");
                }
            }
        });
    },
    search(userid, res) {
        schema.findOne({ "userid": userid }, (err, record) => {
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