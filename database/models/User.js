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
        address : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cp : {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        birth : {
            type: DataTypes.DATE,
            allowNull: false
        },
        phone : {
            type: DataTypes.STRING(50),
            allowNull: false
        },      

        created_at : {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at : {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        timestamps: true,
        underscored: true,
    });

    User.associate = (models) =>{
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "role_id"
        }),

        //esto no se si está bien :( - o sería belongsTo?
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "user_id"
        })
    }

    return User;
};