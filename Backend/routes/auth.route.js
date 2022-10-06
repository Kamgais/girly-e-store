const router = require('express').Router();
const {createAccount, loginAccount, getUser} = require('../controllers/auth.controller')
const {verifyToken, refreshToken} = require('../utils/verifyToken')


//create a user account
/*
*
*@url http://localhost:5000/api/auth/register
*@Body UserDto
*@Post Request
*
*/
router.post('/register', createAccount())

// login a user account
/*
*
*@url http://localhost:5000/api/auth/login
*@Body UserDto
*@Post Request
*/
router.post('/login',loginAccount())



//get a user 
/*
*
*@url http://localhost:5000/api/auth/user
*@Get Request
*
*/
router.get('/user', verifyToken, getUser())







module.exports = router;