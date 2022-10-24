const User = require("../models/User");


const updateUser = () => async(req,res,next) => {
    try {
       const id = req.params.id;
       const password = req.body.password;
       const user = await User.findAll({where:{id:+id}});
       if(!user[0]) return res.status(404).json({message: 'no user with this id'});
       if(password !== '') {
         console.log('hey')
       await User.update({...req.body},{where:{id: +id}});
       const updatedUser = await User.findbyPk(+id);
       const {password,isAdmin,...others} = updatedUser.dataValues;
       return res.status(200).json(others);
       }
       else{
         console.log('hey')
        await User.update({
           username: req.body.username,
           email_address: req.body.email_address,
        }, {where:{id:+id}});
        const updatedUser = await User.findByPk(+id);
        const {password,isAdmin,...others} = updatedUser.dataValues;
        return res.status(200).json(others);
       }
        
    } catch (error) {
       res.status(500).json(error) 
       console.log(error)
    }
}

module.exports = {updateUser}