const {Model, DataTypes,} = require('sequelize');
const Data = require('../database');

class User extends Model {}


 User.init({
  username:{
        type: DataTypes.STRING,
        allowNull:false
    },
    
    useremail:{
        type: DataTypes.STRING,
        allowNull:false
       
    },
     

   userId:{
       type:DataTypes.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
   }
},
{
    sequelize: Data,
    modelName: 'User'


});

module.exports = User




/* module.exports= database => {
    class User extends Model {}

    User.init(
        {
            username: {
                type:DataTypes.TEXT,
                allowNull:false

            },
            useremail: {
                type:DataTypes.TEXT,
                allowNull:false

            },

        },
        {
            sequelize:database,
            modelName: 'User'
        }
    )
    return User
} */