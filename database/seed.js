const { Sequelize} = require("sequelize")
const {Flavor} = require('../models/index.js')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/icecream.sqlite'
});

Flavor.sync()
.then(() => {
  return Flavor.bulkCreate([
      
    { name: "Matcha Green Tea", votes: 2, emails:[] },
    { name: "Pear-mint", votes: 0, emails:[] },
    { name: "Black Raspberry Chip", votes: 3, emails:[]  },
    { name: "Salted Caramel", votes: 1, emails:[]  },
    { name: "Coffee", votes: 4, emails:[]  },
    { name: "Butter Pecan", votes: 2, emails:[]  },
    { name: "Chocolate Chip", votes: 0, emails:[]  },
    { name: "Vanilla", votes: 1, emails:[]  },
    { name: "Coca cola", votes: 3, emails:[]  },
    { name: "Watermellon", votes: 0, emails:[]  },
  ])
  .then((data) => {
    data.forEach((element) => {
        console.log(element.toJSON())
    })
})
.catch((err) => {
    console.error(err)
})
})