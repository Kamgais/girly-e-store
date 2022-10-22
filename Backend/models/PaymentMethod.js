const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");



const PaymentMethod = sequelize.define("payment_method", {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   payment_type: {
    type: DataTypes.STRING,
    allowNull: false
   }
},{
    timestamps: false
})

module.exports = PaymentMethod;