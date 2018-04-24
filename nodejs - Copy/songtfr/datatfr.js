const fs = require("fs");
const path = require("path");
console.log("dirname.....",__dirname);
var rootPath = path.normalize("normalise..",__dirname+"/..");//to move out the path
var fullPath = path.join(rootPath,"/songtfr/E.mp3");
console.log("FullPath is ",fullPath);   
console.log("Read........");
fullPath = "C:\Users\Jai-Ganesh\Downloads\song";
//const readStream = fs.createReadStream(fullPath,{ highWaterMark: 128 * 1024 });
const readStream = fs.createReadStream(fullPath);
const writeStream = fs.createWriteStream("C:\Users\Jai-Ganesh\Downloads\song");
var counter = 0;
var startTime  = Date.now();
readStream.pipe(writeStream);
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
//     counter++;
//     console.log("Chunk is ",counter," " ,chunk);
// });
// readStream.on('end',()=>{  // to show end condition 
//     console.log("Stream End");
//     var endTime = Date.now();
//     console.log("Total Time Taken ",endTime-startTime);
// })


// fs.readFile(fullPath,(err,content)=>{
// if(err){
//     console.log("Can't Read this File....");
// }
// else{
//     console.log("Data Read Done....");
//     console.log(content);
// }
// });
console.log("Some Logic is Going On....");
//console.log(__filename);
