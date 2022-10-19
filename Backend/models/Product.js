const {sequelize} = require('../sequelize.config');
const {DataTypes, Sequelize} = require('sequelize');




const Product = sequelize.define('products', {
    id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
    },

    name: {
       type: DataTypes.STRING,
       allowNull:false,
      
       validate: {
        notEmpty: {
            msg: 'you must specify a name for the product'
        },
        notNull: {
            msg: 'the name of the product cant be null'
        }
       }
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
         defaultValue: 99.95,
        validate: {
            notEmpty: {
                msg: 'the price of the product is required'
            }
        }

    },

    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'you must specify a description for the product'
            },
            notNull: {
                msg: 'the description of the product cant be null'
            }
           }
    },
    product_image: {
      type: DataTypes.STRING,
      allowNull:true  
    },
    rating : {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    qtyInStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50
    }

}, {
    timestamps: false
}

)

module.exports = Product;