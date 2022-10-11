const Sequelize = require('sequelize')
const colors = require('colors');





// connection with the database 

const sequelize = new Sequelize(
    'girlydb',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',

    }
)



const connection = async () => {
   try {
    await sequelize.authenticate()
    console.log(colors.bold.bgBlue('Connected to the database...✅⏳😇'))
   
   } catch (error) {
    console.error(error)
   }
}






module.exports = {sequelize, connection}