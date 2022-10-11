const {sequelize} = require('../sequelize.config');
const {DataTypes} = require('sequelize');


const VariationOption = sequelize.define('variation_options', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey :  true,
        autoIncrement: true
    }, 
    value: {
        type: DataTypes.STRING,
        allowNull: true,

        validate: {
            notEmpty: {
                msg: 'value of variation option cant be null or undefined'
            }
        }
    }
}, {
    timestamps: false
})

module.exports = VariationOption;