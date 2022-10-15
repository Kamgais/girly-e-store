const router = require('express').Router()
const {getAllProducts, getProductById} = require('../controllers/product.controller')



// get all products
router.get('/', getAllProducts());

// get product by id
router.get('/:id', getProductById())


module.exports = router;