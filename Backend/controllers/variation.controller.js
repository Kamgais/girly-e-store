const ProductVariation = require("../models/ProductVariation");
const Variation = require("../models/Variation");



const getVariationsByProductId = () => {
    return async(req,res,next) => {

        try {
           const productId = req.params.id;
           const productVariations = await ProductVariation.findAll({where: {productId: Number(productId)}});
           let variations = [];

           for(let element = 0; element < productVariations.length; element++) {
            const variation = await Variation.findAll({where:{id: productVariations[element].variationId}})
            variations.push(variation[0])
           }

           res.status(200).json(variations)
         
        } catch (error) {
          res.status(500).json(error);  
        }
    }
}


module.exports = {getVariationsByProductId}