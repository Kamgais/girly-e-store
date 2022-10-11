const router = require('express').Router()
const {getAllProducts} = require('../controllers/product.controller')



// get all products
router.get('/', getAllProducts());


module.exports = router;