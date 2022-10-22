const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");



const ShopOrder = sequelize.define("shop_order",{

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    order_date: {
        type: DataTypes.DATE,
    allowNull: false

    },

    order_total: {
        type: DataTypes.FLOAT,
        allowNull:false
    }
},{
    timestamps: false
})


module.exports = ShopOrder;