const { Sequelize, DataTypes, Model } = require("sequelize");

    class User extends Model{}
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './database/icecream.sqlite'
  });


User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true, 
    },
    username: {
      type: DataTypes.TEXT,
      unique: true,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
    },
    {sequelize,
      modelName: 'user'
    });

    module.exports = User


 