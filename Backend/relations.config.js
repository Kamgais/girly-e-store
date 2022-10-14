const Category = require("./models/Category")
const Product = require("./models/Product")
const colors = require('colors');
const Variation = require("./models/Variation");
const ProductVariation = require("./models/ProductVariation");
const VariationOption = require("./models/VariationOption");
const ProductItem = require("./models/ProductItem");
const ProductConfiguration = require("./models/ProductConfiguration");


const createRelations = () => {
    // relation between product and category
    Product.belongsTo(Category);
    Category.hasMany(Product);
    console.log(colors.bgYellow('product and category in oneToMany relationship🌈'));

    //relation between product and variation
    Product.belongsToMany(Variation, {through: ProductVariation});
    Variation.belongsToMany(Product, {through: ProductVariation});
    console.log(colors.bgWhite('product and variation in manyToMany relationship🌍'));


    //relation between variation and variation_option
    VariationOption.belongsTo(Variation);
    Variation.hasMany(VariationOption);
    console.log(colors.bgRed('variation and variation_option in oneToMany relationship🌈'));


    //relation between product_item and product
    Product.hasMany(ProductItem);
    ProductItem.belongsTo(Product)
    console.log(colors.bgWhite('product and product_item in oneToMany relationship🌍')); 

    // relation between product_item and variation_option
    ProductItem.belongsToMany(VariationOption, {through: ProductConfiguration});
    VariationOption.belongsToMany(ProductItem, {through: ProductConfiguration})

}


module.exports = createRelations;