module.exports = (sequelize, DataTypes) =>{
    const Cart = sequelize.define('Cart', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        order_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        quantity : {
            type: DataTypes.INTEGER,
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

    Cart.associate = (models) =>{
        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id"
        }),
        
        Cart.belongsTo(models.Order, {
            as: "orders",
            foreignKey: "order_id"
        })        

    };

    return Cart;
}