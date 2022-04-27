const {Model, DataTypes,} = require('sequelize');

module.exports = database => {
    class Users extends Model{}
    Users.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                
            },
            user_name: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            email: {
                type: DataTypes.TEXT,
                allowNull: false,
                
            },
        }, 
        {
            sequelize: database,
            modelName: 'Users',
            timestamps: false
            
    }
    )
    return Users;
}


