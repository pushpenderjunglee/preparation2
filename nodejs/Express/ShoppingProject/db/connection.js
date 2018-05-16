const Config=require('./config') ;
const Mongoose = require('mongoose');
Mongoose.connect(Config.url);
console.log('Connnection Done ...');
module.exports=Mongoose;