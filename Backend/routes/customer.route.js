const router =  require('express').Router();
const {postCustomer, getCustomerByUserId, updateCustomer} = require('../controllers/customer.controller');

// post a  customer
router.post('/', postCustomer())

// get a customer by userId
router.get('/user/:id', getCustomerByUserId());


// update a customer
router.put('/:id', updateCustomer())


module.exports = router;