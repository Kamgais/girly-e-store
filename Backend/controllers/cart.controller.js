const ShoppingCart = require("../models/ShoppingCart");


const getCartByCustomerId = () => {
    return async (req,res,next) => {
        const id = req.params.id;
        try {
         const cart = await ShoppingCart.findAll({where:{customerId: +id}});
         if(!cart) {
            return res.status(400).json({message: 'no cart with this customer id'})
         }
         res.status(200).json(cart[0]);   
        } catch (error) {
          next(error); 
        }
    }
}


const createCart = () => async (req,res,next) => {
  const id = req.body.customerId;
  try {
    const cart = await ShoppingCart.create({customerId: +id});
    res.status(200).json(cart)
    console.log(colors.bold.bgGreen('/carts  POST CART'))
  } catch (error) {
   res.status(500).json(error)
  }
}

module.exports = {getCartByCustomerId,createCart}