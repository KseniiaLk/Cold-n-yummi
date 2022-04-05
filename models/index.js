
const Data = require('../database');
const User = require("./user");
const Flavor = require("./flavor");

Flavor.hasMany(User)
User.belongsTo(Flavor)

async function seed(){
    await Flavor,bulkCreate([
        {flavorName:"blueberry"},
        {flavorName:"strawberry"},
        {flavorName:"chocolate"},
        {flavorName:"almond"},
        {flavorName:"vanilla"},
        {flavorName:"mango"},
        {flavorName:"pineapple"},
        {flavorName:"banana"},
        {flavorName:"caramel"},
        {flavorName:"mint"},
        {flavorName:"raspberry"},
        {flavorName:"cherry"},
    ])
}

async function start(){
    await setup()
    await seed()
}

start()
    
 module.exports = {User,Flavor} 

/*  sequelize.sync().then( info =>{
    console.log(info);
})
.catch((err)=>{
console.log(err);
}); */