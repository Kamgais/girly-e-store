const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");




const Customer = sequelize.define("customer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }

},{
    timestamps: false
})


module.exports = Customer;