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

    // find a user by id
    static findUserById(id) {
      return User.findByPk(id);
    }
    
 }


 module.exports = UserService;