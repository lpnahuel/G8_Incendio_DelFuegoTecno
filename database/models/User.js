module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        role_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        first_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        last_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        birth : {
            type: DataTypes.DATE,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        phone : {
            type: DataTypes.STRING(50),
            allowNull: false
        },      
        address : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cp : {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        city : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at : {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        underscored: true,
    });

    User.associate = (models) =>{
        User.belongsTo(models.Role, {
            as: "roles",
            foreignKey: "role_id"
        })
    }

    return User;
};