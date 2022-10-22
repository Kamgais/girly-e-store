const PaymentMethod = require("../models/PaymentMethod");
const ShopOrder = require("../models/ShopOrder");


const createOrder = () => async(req,res,next) => {
    try {
        console.log(req.body.method)
        const method = await PaymentMethod.findAll({where:{payment_type: req.body.method}});

        const order = await ShopOrder.create({
            order_date: req.body.date,
            order_total: req.body.total,
            customerId: +req.params.id,
            orderStatusId: 1,
            paymentMethodId: method[0].id

        });

        res.status(200).json(order)
    } catch (error) {
       res.status(500).json(error);
       console.log(error)
    }
}

module.exports = {createOrder}