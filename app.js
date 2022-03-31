const express = require('express')
const sequelize = require('sequelize')
const bcrypt = require ('bcryptjs')
const ejs = require('ejs')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./users.sqlite'
});

const app = express()
app.set('view engine', 'ejs')
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

})

app.listen(8000,()=>{
    console.log("Server app and running")
})


/* function generateHash(password){
    const hash = bcrypt.hashSync(password)
    return hash
}

console.log(generateHash("Hej"))  */

/* async function testConnection(){
    try{
        await sequelize.authenticate()
        console.log("Connection has been established sussefully")
    }catch (error){
        console.error("Unable to connect to the database:", error)

    }
    }

    testConnection()

    app.get('/registration', (req,res)=> {
        res.render("registration",{name:"Alice"})
    })

    app.get ('/',(req,res)=> {
        res.render("login")

    }) */

  

