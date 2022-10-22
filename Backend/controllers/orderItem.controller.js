const OrderItem = require("../models/OrderItem");
const ShoppingCartItem = require("../models/ShoppingCartItem");



const createOrderItem = () => async (req,res,next) => {
    try {
        const cartItem = await ShoppingCartItem.findAll({where: {id: req.body.cartItemId}});
      const item = await OrderItem.create({
        price: req.body.price,
        shopOrderId: +req.params.id,
        qty: cartItem[0].qty,
        productId: cartItem[0].productId
      });
      ShoppingCartItem.destroy({where:{id: cartItem[0].id}});
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json(error) ;
      console.log(error)
    }
}

module.exports = {createOrderItem}