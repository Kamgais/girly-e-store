const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");




const ProductItem = sequelize.define("product_item",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qtyInStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 15
    }
 
},{
    timestamps: false
})


module.exports = ProductItem;