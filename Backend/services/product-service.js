const Product = require('../models/Product');




class ProductService {

// get all Products
 static findAllProducts() {
    
    return Product.findAll();
}





}

module.exports = ProductService;

