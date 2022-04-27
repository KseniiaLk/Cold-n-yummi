 const { DataTypes, Model} = require('sequelize');
 

 module.exports = database => {

    class Flavors extends Model{}
    Flavors.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true
            },
            flavor_name: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            numVotes:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
        }, 
       
        {
            sequelize: database,
            modelName: 'Flavors',
            timestamps: false
           
           
        }
    )
    return Flavors;
    
    }
