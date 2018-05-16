const mongoose = require('./connection');
const prodSchema=mongoose.Schema;
var prod =new prodSchema({id:Number,name:String});

var User= mongoose.model("product",prod);
module.exports=User;


