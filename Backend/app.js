const express = require('express');
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const {connection, sequelize} = require('./sequelize.config')
const createRelations = require('./relations.config');
const countryList = require('./countryList');

// import routes
const authRoute = require('./routes/auth.route')
const productRoute = require('./routes/product.route');
const categoryRoute = require('./routes/category.route');
const variationRoute = require('./routes/variation.route');
const varOptionRoute = require('./routes/variationOption.route');
const cartRoute = require('./routes/cart.route');
const shoppingCartItemRoute = require('./routes/shoppingCartItem.route');
const customerRoute = require('./routes/customer.route');
const orderRoute = require('./routes/order.route');
const orderItemRoute = require('./routes/orderItem.route');
const countryRoute = require('./routes/country.route');
const userRoute = require('./routes/user.route');



const app = express();

dotenv.config()
connection();


//sequelize.sync({alter: true})













createRelations();





//sequelize.sync().then(()=> {
    //console.log('successfull initialization...')
//})




// middlewarres
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

app.get('/', (req,res) => {
    res.status(200).json('Hello Heroku!😎🤩')
})


// api routes

app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/variations',variationRoute);
app.use('/api/varoptions', varOptionRoute);
app.use('/api/cartitem',shoppingCartItemRoute);
app.use('/api/carts',cartRoute);
app.use('/api/customer', customerRoute);
app.use('/api/order', orderRoute);
app.use('/api/orderitem', orderItemRoute);
app.use('/api/countries', countryRoute);
app.use('/api/users', userRoute);


app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
   return res.status(errorStatus).json(errorMessage)
})


const port  = process.env.PORT || 5000

app.listen(port, () => {
    console.log(colors.bold.bgBrightMagenta('Girly Backend'))
    console.log(colors.bold.bgBlack('Server start on port 5000...😎🤩'))
})