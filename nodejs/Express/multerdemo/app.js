

var express = require('express');
var app = express();
var multer = require("multer");
var isImage = require("is-image");


app.use(express.static("public"));
var storage = multer.diskStorage({
    destination: function (req, file, uploadFn) {
        uploadFn(null, __dirname + '/uploads/')
    },
    filename: function (req, file, cb) {

        var isimage = isImage(file.originalname);
        console.log("isImage ", isimage);
        if (isimage) {
            cb(null, file.originalname)
        } else {
            return
        }
    }
})

var upload = multer({
    storage: storage
})



app.post('/', upload.single('imageupload'), function (req, res) {
    res.send("File upload sucessfully.");
});

app.listen(9998, () => {
    console.log("Server Start...");
})