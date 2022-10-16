const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");



const ShoppingCartItem = sequelize.define("shopping_cart_item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    }, 
    qty: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps: false
})

module.exports = ShoppingCartItem;