const express = require('express');
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const {connection, sequelize} = require('./sequelize.config')
const createRelations = require('./relations.config');

// import routes
const authRoute = require('./routes/auth.route')
const productRoute = require('./routes/product.route');
const categoryRoute = require('./routes/category.route');
const Product = require('./models/Product');



const app = express();

dotenv.config()
connection();
//sequelize.sync({alter:true})
createRelations();





/*sequelize.sync({force:true}).then(()=> {
    console.log('successfull initialization...')
})

*/


// middlewarres
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:3000"}))



// api routes

app.use('/api/auth', authRoute)
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute)

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
   return res.status(errorStatus).json(errorMessage)
})



app.listen(process.env.PORT, () => {
    console.log(colors.bold.bgBrightMagenta('Girly Backend'))
    console.log(colors.bold.bgBlack('Server start on port 5000...😎🤩'))
})