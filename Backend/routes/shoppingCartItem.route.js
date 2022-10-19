const router = require('express').Router();
const {createShoppingCartItem, getItemsByCartId,updateShoppingCartItem,deleteCartItem} = require('../controllers/shoppingCartItem.controller');

/*
*
*@Post a item in the cart
*@param id //shopping_cart_id
*
*/
router.post('/:id', createShoppingCartItem())


/*
*
*@Get all item from the cart
*@param id //shopping_cart_id
*
*/
router.get('/:id', getItemsByCartId())


router.put('/:id', updateShoppingCartItem())

router.delete('/:id', deleteCartItem())



module.exports = router;