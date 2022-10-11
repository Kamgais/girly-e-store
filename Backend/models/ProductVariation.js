const {sequelize} = require('../sequelize.config');
const {DataTypes} = require('sequelize');


const ProductVariation = sequelize.define('product_variations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})

module.exports = ProductVariation;