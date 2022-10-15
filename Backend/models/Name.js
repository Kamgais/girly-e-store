const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize.config");



const Name = sequelize.define("name", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'joe'
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:'Dong'
    }
},{
    timestamps: true
})

module.exports = Name;