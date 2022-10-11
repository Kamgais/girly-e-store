const Category = require("./models/Category")
const Product = require("./models/Product")
const colors = require('colors');
const Variation = require("./models/Variation");
const ProductVariation = require("./models/ProductVariation");
const VariationOption = require("./models/VariationOption");


const createRelations = () => {
    // relation between product and category
    Product.belongsTo(Category);
    Category.hasMany(Product);
    console.log(colors.bgYellow('product and category in oneToMany relationship🌈'))

    //relation between product and variation
    Product.belongsToMany(Variation, {through: ProductVariation});
    Variation.belongsToMany(Product, {through: ProductVariation});
    console.log(colors.bgWhite('product and variation in manyToMany relationship🌍'))


    //relation between variation and variation_option
    VariationOption.belongsTo(Variation);
    Variation.hasMany(VariationOption);
    console.log(colors.bgRed('variation and variation_option in oneToMany relationship🌈'))
}


module.exports = createRelations;