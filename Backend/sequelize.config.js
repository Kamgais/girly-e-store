const Sequelize = require('sequelize')
const {bold} = require('colors')




let sequelize;
// connection with the database 
if(process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(
        'g3q2wwr5nkkychsy',
        'j6yd4956fo4pyty8',
        'i9dod3f6s0oh6m5n',
        {
            host: 'ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
            dialect: 'mysql',
            logging:true
    
        }
    )
} else {
    sequelize = new Sequelize(
        'girlydb',
        'root',
        '',
        {
            host: 'localhost',
            dialect: 'mysql',
            logging:true
    
        }
    ) 
}
 



const connection = async () => {
   try {
    await sequelize.authenticate()
    console.log(bold.bgBlue('Connected to the database...✅⏳😇'))
   
   } catch (error) {
    console.error(error)
   }
}






module.exports = {sequelize, connection}