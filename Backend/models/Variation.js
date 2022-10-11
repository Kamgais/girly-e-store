const {sequelize} = require('../sequelize.config');
const {DataTypes} = require('sequelize');


const Variation = sequelize.define('variations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
           notEmpty: {
            msg: 'name of the variation cant be null / undefined'
           } 
        }
    }
}, {
    timestamps: false
})

module.exports = Variation;