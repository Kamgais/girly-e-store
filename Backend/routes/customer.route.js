const router =  require('express').Router();
const {postCustomer, getCustomerByUserId} = require('../controllers/customer.controller');

// post a  customer
router.post('/', postCustomer())

// get a customer by userId
router.get('/user/:id', getCustomerByUserId())


module.exports = router;