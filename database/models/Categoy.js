// const models = require('/database/models');

module.exports = (sequelize, DataTypes) =>{
    const Category = sequelize.define('Category', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
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

    Category.associate = (models) => {

        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        })
    };

    return Category;
}