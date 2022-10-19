const router = require('express').Router();
const {getVariationsByProductId} = require("../controllers/variation.controller")


/*
*@Get variations by product_id
*@Param productId
*
*
*/


router.get("/product/:id",getVariationsByProductId())


module.exports = router;