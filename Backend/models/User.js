const {sequelize} = require('../sequelize.config')
const bcrypt = require('bcrypt')
const {DataTypes, Sequelize} = require('sequelize')


const User = sequelize.define('users', {
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement : true
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            len : {
                args: [6,30],
                msg: 'the username must have at least 6 letters'
            },

            notEmpty:{
                msg: 'the username can not be empty'
            },

            notNull: {
                msg: 'the username is a required proprety'
            }
            
        }


    },
   email_address: {
    type: DataTypes.STRING,
    allowNull:false,
    unique: true,
    validate : {
        is: {
            args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
            msg: 'your email address is not correct'
        } ,

        notEmpty: {
            msg: 'the emailaddress can not be empty'
        },
        notNull: {
            msg: 'the emailaddress is a required property'
        }
        
    }
   },
   password:{
    type: DataTypes.STRING,
    allowNull: false,
    set(value){
      const salt = bcrypt.genSaltSync(12);
      const hashedPass = bcrypt.hashSync(value,salt);
      this.setDataValue('password', hashedPass);
     },
    validate: {
      len: {
        args: [6,100],
        msg: 'the password must have at least 6 letters'
      },
      notEmpty: {
        msg: 'the password can not be empty'
    },
    notNull: {
        msg: 'the password is a required property'
    }
    }

   },

   phone_number: {
    type:DataTypes.INTEGER,
    allowNull: true
   },
   isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true
   }
}, {
    timestamps: false
})

module.exports = User;