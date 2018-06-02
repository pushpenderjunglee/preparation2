


    var express = require('express');
    var app = express();
    const multer = require('multer');
    const IsImage = require("is-image");

    app.use(express.static("Admin"));
    var storage = multer.diskStorage({
        destination: function (req, file, uploadFn) {
            uploadFn(null, __dirname + '/Admin/assets')
        },
        filename: function (req, file, cb) {
            var isimage = IsImage(file.originalname);
            console.log("isImage ", IsImage);
            if (isimage) {
                cb(null, file.originalname)
            } else {
                document.getElementById("msg").innerHTML = "file not uploaded";
                return;
            }
        }
    })
    var upload = multer({
        storage: storage
    })
    route.post('/create', upload.single('imageupload'), function (req, res) {
        res.send("File upload sucessfully.");
    });
