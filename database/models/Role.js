module.exports = (sequelize, DataTypes) =>{
    const Role = sequelize.define('Role', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        role_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        timestamps: false,
        underscored: true,
    });

    Role.associate = (models) => {

        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "role_id"
        })
    };

    return Role;
}