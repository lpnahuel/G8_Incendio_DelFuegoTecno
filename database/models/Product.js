// const models = require('/database/models');

module.exports = (sequelize, DataTypes) =>{

    const Product = sequelize.define('Product', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        category_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

        description : {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_name : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        specs : {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        stock : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        thumb : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        image_01 : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image_02 : {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        image_03 : {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        image_04 : {
            type: DataTypes.STRING(100),
            allowNull: true,
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

    Product.associate = (models) =>{
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })
    }

    return Product;
}