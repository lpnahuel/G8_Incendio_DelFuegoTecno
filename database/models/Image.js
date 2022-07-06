module.exports = (sequelize, DataTypes) =>{
    const Image = sequelize.define('Image', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image_01 : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image_02 : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image_03 : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image_04 : {
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



    return Image;
}