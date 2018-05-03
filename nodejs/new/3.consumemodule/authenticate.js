var mail1 = require("./mail");
function sendMail(){
const userid='robin3589@gmail.com';
const pass='RObin3589!';
const text='heLLO Testing process is going on';
mail1.mail(userid,pass,text);
}
module.exports=sendMail;