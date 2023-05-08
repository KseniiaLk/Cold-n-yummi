
const Flavor = require('./flavor')
const User = require('./users')

Flavor.hasMany(User, { foreignKey: "flavor_id" });
User.belongsTo(Flavor)

module.exports= {Flavor, User}


 
 





