const Country = require("../models/Country")



const getAllCountries = () => async(req,res,next) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
      res.status(500).json(error);
    }
}

module.exports = {getAllCountries}