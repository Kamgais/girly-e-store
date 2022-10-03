const router = require('express').Router();
const {createAccount, loginAccount} = require('../controllers/auth.controller')


//create a user account
router.post('/register', createAccount())

// login a user account
router.post('/login',loginAccount())





module.exports = router;