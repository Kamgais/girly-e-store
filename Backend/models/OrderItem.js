const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");





const OrderItem = sequelize.define("order_item",{

    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    
    price : {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    qty:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
})


module.exports = OrderItem;