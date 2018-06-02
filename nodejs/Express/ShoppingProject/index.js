const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyparser.urlencoded({
    extended: false
}))
const routing = require("./route/route");

app.use(cookieparser());
const session = require('express-session');
app.use(session({

    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 600000
    }
}));

app.use("/", routing);
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.sendFile(__dirname + "/public/error.html");
})

var server = app.listen(1234, () => {
    console.log("server-start", server.address().port);
});