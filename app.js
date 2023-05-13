const express = require('express');
const app = express();
const ejs = require('ejs')
const { Sequelize, Model, DataTypes } = require("sequelize")
const {Flavor, User} = require('./models/index')

app.set('view engine', 'ejs')
app.use(express.static("public"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/icecream.sqlite'
});

app.get('/', async(req, res) => {
  const flavors = await Flavor.findAll()
  res.render('index', {flavors})
})
app.get('/toplist', async(req, res) => {
  const flavorList = await Flavor.findAll({
      limit: 10,
      order: sequelize.literal('votes DESC')
  })
  
  res.render('toplist', {flavorList})
})

app.get("/error", async (req, res) => {
   res.render("error");
});

app.post('/vote', async(req, res) => {
  const { username, email, flavor_id } = req.body
  const user = await User.findOne({where: {email: email}})
  const flavor = await Flavor.findOne({where: {flavor_id: flavor_id}})
  if (!user) {
    await User.create({
      name: username,
      email: email
    });
    await Flavor.update(
      { votes: flavor.votes + 1 },
      { where: { flavor_id: flavor_id } }
    );
    res.redirect("/toplist");
  } else {
    res.redirect("/error");
  }
});

app.listen(8000, () => {
  console.log("App up and running")
})
