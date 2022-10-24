const { updateUser } = require('../controllers/user.controller');

const router = require('express').Router();


// update a user informations account
router.put('/:id', updateUser() )


module.exports = router;