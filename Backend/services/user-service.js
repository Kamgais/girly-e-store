const User = require('../models/User')


 class UserService {


    // create a user account
    static createUser(user) {
      return User.create(user)
    }

    //find a user by username in the database
    static findUserByUsername(name) {
        return User.findOne({where: {username : name}})
    }
    
 }


 module.exports = UserService;