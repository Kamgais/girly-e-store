const colors = require('colors');
const Category = require('../models/Category');
const Product = require('../models/Product');
const {Op} = require("sequelize")


const getAllProducts = () => {
  return async (req,res,next) => {
    let products;
    let categoriesIds = [];
    try {
          products = await Product.findAll();
          if(req.query.categories) {
          const categoriesName = req.query.categories.split(',')
          console.log(categoriesName)
          const categories = await Category.findAll({where:{category_name:{[Op.in]: categoriesName}}});
          categories.forEach(element => {
            categoriesIds.push(element.id);
          });
           products = await Product.findAll({where: {categoryId : {[Op.in]: categoriesIds}}})
            
          }

         if(req.query.minPrice && req.query.maxPrice) {
          products = products.filter(product => product.price >= +req.query.minPrice &&  product.price <= +req.query.maxPrice);
          }
          
          res.status(200).json({data: products});
         console.log(colors.bold.bgRed(' /api/products/  GET ALL PRODUCTS...'))
    } catch (error) {
        console.log(error)
      res.status(500).json(error);  
    }
  }

}



module.exports = {getAllProducts}