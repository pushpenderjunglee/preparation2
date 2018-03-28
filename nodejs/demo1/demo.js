// var a=100;
// var b=200;
// console.log(`a is ${a} and b is ${b}`);
const fs=require("fs");
function done(err,content){//sequence should be same
if(err){
    console.log("cann't read this file");
}
else{
    console.log("content is"+content);
 }
}
fs.readFile("demo.js",done);
var a=100;
var b=200;
console.log(`a is ${a} and b is ${b}`);