const { Sequelize, UniqueConstraintError } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {ValidationError} = require('sequelize')
const UserService = require('../services/user-service');
const generateError = require('../utils/error')


// create a user account

const createAccount = () => {
    return async (req,res,next) => {
     try {
       const newUser = await UserService.createUser(req.body);
       res.status(201).json({message: 'User has been created...', data : newUser})

     } catch (error) {
        if(error instanceof ValidationError) {
        return generateError(400,error.message)  
        }
       next(error) ;    
    }
    }
}



// login
const loginAccount = () => {
    return async (req,res,next) => {
        const message = 'wrong credentials!!!'
        try {
         const user = await UserService.findUserByUsername(req.body.username);
         !user && res.status(400).json({message})

         const validated = await bcrypt.compare(req.body.password, user.password);
         !validated &&  res.status(400).json({message})
         // create a token for the user
         const token = jwt.sign({
            id: user.id,isAdmin: user.isAdmin
         }, process.env.JWT)
         // console.log(user)
         const {password,isAdmin,...others} = user.dataValues;
         res
         .cookie('access_token', token, {
            httpOnly : true
        })
        .status(200).json(others);
        } catch (error) {
           next(error) 
        }
    }
}

module.exports = {createAccount, loginAccount}