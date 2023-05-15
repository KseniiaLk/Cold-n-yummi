
const Flavor = require('./flavor')
const User = require('./user')

Flavor.hasMany(User, { foreignKey: "flavor_id" });
User.belongsTo(Flavor);

module.exports= {Flavor, User}


