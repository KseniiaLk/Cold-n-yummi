const {Sequelize, DataTypes, Model } = require("sequelize");
    class Flavor extends Model {}

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database/icecream.sqlite'
    });

    Flavor.init(
        {
            flavor_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,

            },
            name:DataTypes.TEXT,
            totalVotes: DataTypes.INTEGER
                },
            {sequelize} )
        
            module.exports = Flavor