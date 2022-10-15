const colors = require('colors');
const Category = require('../models/Category');
const Product = require('../models/Product');
const {Op} = require("sequelize")


const getAllProducts = () => {
  return async (req,res,next) => {
    let products;
    let categoriesIds = [];
    console.log(req.query.categories+'hey')
    console.log(req.query.minPrice)
    console.log(req.query.maxPrice)
    try {
          products = await Product.findAll();
          if(req.query.categories && req.query.categories !== '') {
          const categoriesName = req.query.categories.split(',')
          console.log(categoriesName)
          const categories = await Category.findAll({where:{category_name:{[Op.in]: categoriesName}}});
          categories.forEach(element => {
            categoriesIds.push(element.id);
          });
           products = await Product.findAll({where: {categoryId : {[Op.in]: categoriesIds}}})
            
          }

         if(req.query.minPrice) {
          products = products.filter(product => product.price >= +req.query.minPrice);
         // console.log(products);
          }

          if(req.query.maxPrice !== '') {
            products = products.filter(product => product.price <= +req.query.maxPrice)
           // console.log('heyyy')
          }
         // console.log(products)
          res.status(200).json({data: products});
         console.log(colors.bold.bgRed(' /api/products/  GET ALL PRODUCTS...'))
    } catch (error) {
        console.log(error)
      res.status(500).json(error);  
    }
  }

}


// get product by id

const getProductById = () => {
  return async(req,res,next) => {
    const id = req.params.id;

    try {
      const product = await Product.findByPk(+id);
      console.log(product);
      res.status(200).json(product)
    } catch (error) {
      console.log(error);
    }
  }
}

















module.exports = {getAllProducts, getProductById}