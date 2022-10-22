const router = require('express').Router();
const {createOrderItem} = require('../controllers/orderItem.controller')



// post a order_item

router.post('/:id', createOrderItem())

module.exports = router;