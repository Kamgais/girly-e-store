const Address = require("../models/Address");
const Customer = require("../models/Customer");
const Name = require("../models/Name");



const postCustomer = () => async(req,res,next) => {
    const id = req.body.userId;
    try {
      const customer = await Customer.create({userId: +id});
      const name = await Name.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        customerId: customer.id
      })
      if(!customer) return res.status(400).json({message: 'no customer with this id'});
      res.status(200).json(customer);
    } catch (error) {
     console.log(error);
     res.status(500).json(error.message)  
    }
}


const getCustomerByUserId = () => async(req,res,next) => {
    const id = req.params.id;
    try {
     const customer = await Customer.findAll({where:{userId: +id}});
     res.status(200).json(customer[0]);   
    } catch (error) {
      res.status(500).json(error);  
    }
}


const updateCustomer = () => async(req,res,next) => {
  const id = req.params.id;

  try {
    const customer = await Customer.findByPk(+id);
    if(!customer) return res.status(400).json({message: 'no customer with this id'});
    await Name.update({firstname:req.body.firstname, lastname: req.body.lastname, customerId: +req.params.id});
    await Address.update({postal_code: req.body.address.postal_code,})
  } catch (error) {
    
  }
}


module.exports = {postCustomer, getCustomerByUserId}