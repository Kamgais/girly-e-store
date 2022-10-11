const ProductService = require('../services/product-service');
const colors = require('colors');


const getAllProducts = () => {
  return async (req,res,next) => {
    

    try {
        const products = await ProductService.findAllProducts();
        
         res.status(200).json({data: products});
         console.log(colors.bold.bgRed(' /api/products/  GET ALL PRODUCTS...'))
    } catch (error) {
        //console.log(error)
      res.status(500).json(error);  
    }
  }

}



module.exports = {getAllProducts}