const Category = require("../models/Category");







const getAllCategories = () => {

    return async (req,res,next) => {
      try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
      } catch (error) {
        res.status(500).json(error)
      }
    }
}


module.exports = {getAllCategories}