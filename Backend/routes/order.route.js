const router = require('express').Router();
const {createOrder} = require('../controllers/order.controller');


// post order

router.post('/:id', createOrder())


module.exports = router;