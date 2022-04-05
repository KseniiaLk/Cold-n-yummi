const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./database');
const {User,Flavor} = require('./models/index');


const app = express();

app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({extended:false})

app.get('/', (req,res)=> {
    res.render('index')
})

app.get ('/register',(req,res)=> {

    res.render('register')


})

app.post ('/register',urlencodedParser,(req,res)=> {

    res.json(req.body)
})

app.listen(8000,()=>{
    console.log("Server app and running")
});
/* app.use(express.json());

app.post('/users',(req,res)=>{
    User.create(req.body).then(()=>{
        res.send('user is inserted');
    })
})


sequelize.sync().then(() => console.log('db is ready'));

 */
/* const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./users.sqlite'
});

app.use( express.urlencoded ({ extended: true}))


app.get('/login', (req,res)=> {
    res.render('login')
})

app.get ('/home',(req,res)=> {

    res.render('home',{username:"Lisa"})


})

app.post ('/home',async(req,res)=> {
    const {username,useremail} =req.body
    await User.create({username:user.username,
        email:user.useremail
    })
    

    res.redirect('/home')

}) */

 





  












