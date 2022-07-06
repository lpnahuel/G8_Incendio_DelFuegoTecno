module.exports = (sequelize, DataTypes) =>{
    const Order = sequelize.define('Order', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cart_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        total : {
            type: DataTypes.DECIMAL(10,2).UNSIGNED,
            allowNull: false,
        },
        shipping : {
            type: DataTypes.DECIMAL(4,2).UNSIGNED,
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

    Order.associate = (models) => {

        Order.hasOne(models.Cart, {
            as: "carts",
            foreignKey: "order_id"
        })
    };

    return Order;
}