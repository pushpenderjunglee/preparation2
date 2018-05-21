const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("Local"));

app.use(bodyparser.urlencoded({
    extended: false
}))
const routing = require("./route/route");

app.use(cookieparser());
const session = require('express-session');
app.use(session({
    secret: 'thisisthesecret',
    resave: false,
    saveUnintialized: true,
    cookie: {
        secure: false,
        maxAge: 60000
    }
}));

app.use("/", routing);
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.sendFile(__dirname + "/Local/error.html");
})

var server = app.listen(1234, () => {
    console.log("server-start", server.address().port);
});