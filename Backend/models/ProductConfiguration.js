const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");



const ProductConfiguration = sequelize.define("product_config",{
 id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
 }
}, {
    timestamps: false
})


module.exports = ProductConfiguration;