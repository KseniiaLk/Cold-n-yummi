const { Sequelize, Model, DataTypes } = require("sequelize")
const express = require('express');
const {Flavor, User} = require('./models/index')


const app = express()

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


app.post('/vote', async(req, res) => {
  console.log("It posts")
  const { username, email, flavor_id } = req.body

  const user = await User.findOne({where: {email: email}})
  const flavor = await Flavor.findOne({where: {flavor_id: flavor_id}})

  if(!user){
      const user = await User.create({
          name: username,
          email: email
      })

      flavor.totalVotes++
      flavor.save()
  }

res.redirect('/')

})


app.get('/voteForm', async(req, res) => {
  const flavorList = await Flavor.findAll({
      limit: 10,
      order: sequelize.literal('likes DESC')
  })
  
  res.render('voteForm', {flavorList})
})

      app.listen(8000, () => {
        console.log("App up and running")
    })