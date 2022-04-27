
const { Sequelize } = require("sequelize");
 const Users = require('./Users')
 const Flavors = require('./Flavors')

 const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database/db.sqlite"
});
 
const Flavor = Flavors(sequelize);
const User = Users(sequelize);


Flavor.hasMany(User, { foreginKey: "flavor_id" });
User.belongsTo(Flavor, { foreginKey: "flavor_id" });

module.exports = {
    User,
    Flavor
};


 
 





