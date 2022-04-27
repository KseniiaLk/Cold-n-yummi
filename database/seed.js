const { User, Flavor } = require('../models');

Flavor.bulkCreate
    ([{flavor_name: 'Vanilla', numVotes: 0},
     {flavor_name: 'Strawberry',numVotes: 0}, 
     {flavor_name: 'Chocolate',numVotes: 0},
      {falvor_name: 'Mango',numVotes: 0},
       {flavor_name: 'Cherry',numVotes: 0},
        {flavor_name: 'Liquorice',numVotes: 0},
         {flavor_name: 'Almond',numVotes: 0},
          {flavor_name: 'Coconut',numVotes: 0},
           {flavor_name: 'Blueberry',numVotes: 0},
            {flavor_name: 'Pistachio',numVotes: 0}]);

   
