const {Model, DataTypes} = require('sequelize')
const { Choice } = require('.')

module.exports= database => {
    class Choice extends Model {}

    Choice.init(
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
            modelName: 'Choice'
        }
    )
    return Choice
}