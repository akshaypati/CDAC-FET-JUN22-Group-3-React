module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("user_details", {
        user_id: {
            type: DataTypes.INTEGER,

            autoIncrement: true,

            allowNull: false,

            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "STUDENT"
        },
        role_id:{
            type: DataTypes.INTEGER
        }
        

    },{ timestamps: false })

    return users
}

