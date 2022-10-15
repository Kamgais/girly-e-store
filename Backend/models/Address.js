const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");




const Address = sequelize.define("address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            notNull: {
                msg: ' the postal code is required'
            }
        }
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false,
        
        validate: {
            notNull: {
                msg: 'region is required'
            }
        }
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'city is required'
            }
        }
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notNull: {
               msg: 'street is required'
                
            }
        }
    },
    house_nr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'house number is required'
            }
        }
    }
},{
    timestamps: false
})