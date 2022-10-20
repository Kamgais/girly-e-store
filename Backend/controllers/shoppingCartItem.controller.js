const {Op} = require('sequelize');
const ProductConfiguration = require("../models/ProductConfiguration");
const ShoppingCartItem = require("../models/ShoppingCartItem");
const VariationOption = require("../models/VariationOption");



// post a shopping_cart_item or update
const createShoppingCartItem = () => {
 
    return async (req,res,next) => {
        const options = req.body.options;
        const id = req.params.id;
        console.log(id)
        try {
          const cartItem = await ShoppingCartItem.create({
            qty: +req.body.qty,
            shoppingCartId: +req.params.id,
            productId: +req.body.productId
          });
          //console.log(cartItem)
          const id = cartItem.id;
          const varOptions = await VariationOption.findAll({where:{value: {[Op.in]: options}}});
         // console.log(varOptions)

          for(let element= 0; element < varOptions.length; element++) {
            await ProductConfiguration.create({
                variationOptionId: varOptions[element].id,
                shoppingCartItemId: id
            })
          }

          res.status(200).json({...cartItem.dataValues, options: req.body.options, totalPrice: req.body.totalPrice})
        } catch (error) {
          res.status(500).json(error) 
          console.log(error) 
        }
    }
}



// update an existing shopping_cart_item

const updateShoppingCartItem = () => {
  return async (req,res,next) => {
    try {
      const id = req.params.id;
      await ShoppingCartItem.update(req.body, {where:{id: +id}})
      const item = await ShoppingCartItem.findAll({where:{id: +id}})
      res.status(200).json({...item[0].dataValues,options:  req.body.options, totalPrice: req.body.totalPrice})
 } catch (error) {
   res.status(500).json(error)   
    }
    

  }
}




// delete an existing shopping_cart_item

const deleteCartItem = () => {
  return async (req,res,next) => {
    try {
      const id = req.params.id;
      await ShoppingCartItem.destroy({where:{id: id}})
      res.status(200).json('deleted successfull!!!')
    } catch (error) {
      res.status(500).json(error)
    }
  }
}




// get all items from the cart
const getItemsByCartId = () => {

   return async (req,res,next) => {
    const id = req.params.id;
    try {
     const items =  await ShoppingCartItem.findAll({where:{shoppingCartId: +id}});
     if(!items) return res.status(400).json('no items with this id');
     res.status(200).json(items)
    } catch (error) {
      next(error)
    }
   }
}


module.exports = {createShoppingCartItem,getItemsByCartId,updateShoppingCartItem,deleteCartItem}