const mongoose = require('./connection');
const ProdSchema = mongoose.Schema;
var prod = new ProdSchema({
    prodId: String,
    prodName: String
});

var Product = mongoose.model("product", prod);
module.exports = Product;


// const mongoose = require('./connection');
// const UserSchema = mongoose.Schema;
// var user = new UserSchema({
//     username: String,
//     email: String,
//     mobile: Number,
//     password: String,
//     address: String
// });

// var User = mongoose.model("users", user);
// module.exports = User;