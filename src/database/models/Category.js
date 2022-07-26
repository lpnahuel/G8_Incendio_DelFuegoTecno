module.exports = (sequelize, DataTypes) =>{
    const Category = sequelize.define('Category', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description : {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : Date.now
        },
        updated_at : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : Date.now
        },
    },
    {
        timestamps: true,
        underscored: true,
    });

    Category.associate = (models) => {

        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id",
            targetKey: "id"
        })
    };

    return Category;
}