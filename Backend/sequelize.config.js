const Sequelize = require('sequelize')




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
    console.log('connected to the database...')
   } catch (error) {
    console.error(error)
   }
}



module.exports = {sequelize, connection}