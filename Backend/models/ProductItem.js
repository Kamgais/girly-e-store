const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");




const ProductItem = sequelize.define("product_item",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{
    timestamps: false
})


module.exports = ProductItem;