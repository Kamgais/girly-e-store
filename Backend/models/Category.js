const {sequelize} = require('../sequelize.config');
const {DataTypes} = require('sequelize');


const Category = sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'the name of the category is required '
            }
        }
    }
}, {
    timestamps: false
})

module.exports = Category;