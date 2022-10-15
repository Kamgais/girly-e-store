const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");




const Country = sequelize.define("countries", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    country_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Country;