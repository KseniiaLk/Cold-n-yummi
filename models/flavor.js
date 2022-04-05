 const {Model, DataTypes} = require('sequelize');
const Data = require('../database');

class Flavor extends Model{}

Flavor.init(
    {
        flavorName: {
            type:DataTypes.TEXT,
            allowNull:false

        },
        flavorId: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true

        },

    },
    {
        sequelize: Data,
        modelName: 'Flavor'
    });



module.exports = Flavor; 


   