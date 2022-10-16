const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");


const ShoppingCart = sequelize.define("shopping_cart", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }


},{
    timestamps: false
})


module.exports = ShoppingCart;