const router = require('express').Router();
const {getAllCategories} = require('../controllers/category.controller');


/*
*@Get all categories
*@Return Category[]
*
*/

router.get('/', getAllCategories())



module.exports = router;