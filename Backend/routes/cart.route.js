const router = require('express').Router();
const {getCartByCustomerId, createCart} = require('../controllers/cart.controller');

//get cart by customer id
router.get('/customer/:id', getCartByCustomerId())


//post a cart
router.post('/',createCart())



module.exports = router;