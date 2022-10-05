const router = require('express').Router();
const {createAccount, loginAccount, getUser} = require('../controllers/auth.controller')
const {verifyToken, refreshToken} = require('../utils/verifyToken')


//create a user account
/*
*
*@url http://localhost:5000/api/auth/register
*@Body UserDto
*
*/
router.post('/register', createAccount())

// login a user account
router.post('/login',loginAccount())

//get a user 
router.get('/user', verifyToken, getUser())

//refresh
router.get('/refresh',refreshToken, verifyToken, getUser())





module.exports = router;