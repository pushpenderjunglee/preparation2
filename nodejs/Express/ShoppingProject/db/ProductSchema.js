const mongoose = require('./connection');
const ProdSchema = mongoose.Schema;
var prod = new ProdSchema({
    prodId: String,
    prodName: String
});

var Product = mongoose.model("product", prod);
module.exports = Product;

