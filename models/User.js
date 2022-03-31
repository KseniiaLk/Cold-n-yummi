const {Model, DataTypes} = require('sequelize')

module.exports= database => {
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
}