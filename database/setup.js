const { User, Flavor  }= require('../models')

async function setup(){
    await Flavor.sync({force: true})
    await User.sync({force: true})
}
  setup()