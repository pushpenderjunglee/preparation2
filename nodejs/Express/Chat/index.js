var express = require('express');
var socket = require('socket.io');
var app  = express();

app.use(express.static("public"));
var server = app.listen(9000,function(){
    console.log("server start");
})
var io = socket(server);
io.sockets.on('connection',function(socket){
    console.log('connection:',socket.request.connection._peername);
    socket.emit('message',{message:"server is saying welcome"+socket.id});
    socket.io('send',function(data){
        io.sockets.emit('message',data);
    })
})