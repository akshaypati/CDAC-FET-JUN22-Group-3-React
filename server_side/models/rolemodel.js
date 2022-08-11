module.exports = (sequelize, DataTypes) => {
    const roles = sequelize.define("roles", {
        role_id: {
            type: DataTypes.INTEGER,
    
            autoIncrement: true,
    
            allowNull: false,
    
            primaryKey: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ timestamps: false })
    
    return roles
    }
    