const VariationOption = require("../models/VariationOption");





const getVarOptionByVarId = () => {
    return async (req,res,next) => {
        const id = req.params.id;
        try {
          const variationOptions = await VariationOption.findAll({where: {variationId : +id}});
          res.status(200).json(variationOptions);
        } catch (error) {
         res.status(500).json(error)   
        }
    }
}

module.exports = {getVarOptionByVarId}