const bm= require("mydemomodule");//from npm module
const chalk= require("chalk");
const objMail=require("./authenticate");
const mailjs=require("./mail");
const mail=require("nodemailer");
const cron =require("node-cron");
console.log(bm.Obj);
console.log(bm.Obj.add(10,20));
var mul=bm.Obj.mul(10,7);
console.log(chalk.red("Mul is"),mul);
var sub=bm.Obj.sub(20,5);
console.log(chalk.green("Sub is"),sub);
console.log(objMail);
objMail.sendMail();