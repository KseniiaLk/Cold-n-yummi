const  Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    host:'.db.db'
});

module.exports = sequelize;