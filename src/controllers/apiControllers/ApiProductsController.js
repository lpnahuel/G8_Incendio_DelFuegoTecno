const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const ApiProductsController = {
    list: function (req, res) {
        let Allproducts = productsDB.findAll({
            include: [
                { association: "Category" },

            ], where: {
                status: "Enabled"
            }
        })
        let categoriesInDb = db.Category.findAll({
            include: [
                { association: "Product" },
            ]
        })
        Promise.all([categoriesInDb, Allproducts])
            .then(function ([category, products]) {

                let countByCategory = category.map(element => {
                    return ({
                        [element.name]: element.productos.length
                    })
                });


                let objectCategory = {}

                countByCategory.forEach(categoria => {
                    Object.assign(objectCategory, categoria)

                });


                let productResponse = products.map(element => {
                    let obj = {
                        id: element.id,
                        name: element.name,
                        description: element.description,
                        categorias: element.categorias,
                        detail: `/api/products/detail/${element.id}`,
                        img: element.image,
                        category: element.categorias.name
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

        name : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        specs : {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        image_01 : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image_02 : {
            type: DataTypes.STRING(100),
            allowNull: true,
            defaultValue : 'default.webp'
        },
        image_03 : {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        image_04 : {
            type: DataTypes.STRING(100),
            allowNull: true,
            defaultValue : 'default.webp'
        },
        thumb : {
            type: DataTypes.STRING(100),
            allowNull: false
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




                    }
                    return obj
                });



                let response = {
                    countProduts: products.length,
                    countByCategory: objectCategory,
                    products: productResponse,
                }
                res.json(response)
            })
            .catch(error => res.send(error))
    },
    detail: (req, res) => {
        productsDB.findByPk(req.params.id,
            {
                include: [
                    { association: "categorias" },

                ], where: {
                    status: "Enabled"
                }
            })
            .then(product => {
                let productResponse = {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    img: `http://localhost:4000/img/products/${product.image}`,
                    category: product.categorias.name
                }
                let respuesta = {
                    product: productResponse,
                   

                }
                res.json(respuesta);
            })
            .catch(error => res.send(error));


    },
    create: (req, res) => {
        db.Record.
            create(
                {
                    concept: req.body.concept,
                    tipe: req.body.tipe,
                    created_at: Date.now(),
                    amount: req.body.amount,
                    category_id: req.body.category_id,

                }
            )
            .then(confirm => {
                let response;
                if (confirm) {
                    response = {
                        data: confirm
                    }
                }
                res.json(respuesta)
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        let recordId = req.params.id;
        db.Record.update(
            {
                concept: req.body.concept,
                tipe: req.body.tipe,
                updated_at: Date.now(),
                amount: req.body.amount,
                category_id: req.body.category_id,
            },
            {
                where: { id: recordId }
            })
            .then(confirm => {
                let response;
                if (confirm) {
                    response = {
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))

    }


}

module.exports = ApiProductsController