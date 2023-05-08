const { Sequelize} = require("sequelize")
const {Flavor} = require('../models/index.js')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/icecream.sqlite'
});

Flavor.sync()
.then(() => {
  console.log("Flavors created")
  return Flavor.bulkCreate([
      
    { name: "Matcha Green Tea", totalVotes: 2, emails:[] },
    { name: "Pear-mint", totalVotes: 0, emails:[] },
    { name: "Black Raspberry Chip", totalVotes: 3, emails:[]  },
    { name: "Salted Caramel", totalVotes: 1, emails:[]  },
    { name: "Coffee", totalVotes: 4, emails:[]  },
    { name: "Butter Pecan", totalVotes: 2, emails:[]  },
    { name: "Chocolate Chip", totalVotes: 0, emails:[]  },
    { name: "Vanilla", totalVotes: 1, emails:[]  },
    { name: "Coca cola", totalVotes: 3, emails:[]  },
    { name: "Watermellon", totalVotes: 0, emails:[]  },
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