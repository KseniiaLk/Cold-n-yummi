
const Sequelize = require('sequelize')
const express = require('express');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const Flavors = require('./models/Flavors');

const {User,Flavor} = require('./models'); 
// require("dotenv").config
// app.set('views',path.join(__dirname,'views')) 

app.get('home',  async(req, res) => {
  await getHomePage(res,req);
})
app.post('/vote', async (req, res) => {
  const {flavor} = req.body.flavor;
  const username = req.body.username;
  const useremail = req.body.email; 

  const user = await User.findOne({ where: { email: email } });
  if (!user.Flavorflavor_name) {
      const votedFlav = await Flavor.findOne({
          where:{flavor_name : flavor} });
          votedFlav.increment('numVotes', {by:1});
          await User.update(
           {Flavorflavor_name:flavor} ,
           {where:{email:email}}
          );
  }
  
})

app.get('/register', (req, res) => {
  res.render('register');
})
app.post('/register', async (req, res) => {
  const user_name = req.body.username;
  const email = req.body.email;
  await User.create({
    user_name, email, password
})
})
app.get('/login', (req, res) => {
  res.render('login');
})
app.post('/login', async (req, res) => {
  const  { username, email } = req.body;
  const getUser = await User.findOne({where: { user_name: username}});
  
})
// app.get('/welcome',(req,res,next)=>{
//   res.sendFile(path.join(__dirname,'/public/coldnyummy.png'))
// })

app.listen(8000,()=>{
console.log("Server app and running")});



 





  












