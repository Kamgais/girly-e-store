const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const {connection, sequelize} = require('./sequelize.config')

// import routes
const authRoute = require('./routes/auth.route')


const app = express();

dotenv.config()
connection();


/*sequelize.sync({force:true}).then(()=> {
    console.log('successfull initialization...')
})

*/


// middlewarres
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())



// api routes

app.use('/api/auth', authRoute)

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
   return res.status(errorStatus).json(errorMessage)
})



app.listen(process.env.PORT, () => {
    console.log('Server start on port 5000...')
})