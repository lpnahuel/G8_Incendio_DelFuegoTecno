// ************ Require's ************/
const fs = require('fs');
const path = require('path');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');

// *** Modelo */
const db = require('../database/models/index.js');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;


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

                countByCategory.forEach(categories => {
                    Object.assign(objectCategory, categories)

                });


                let productResponse = products.map(element => {
                    let obj = {
                        id: element.id,
                        name:  element.name,
                        category_id : element.category,
                        price : parseInt(element.price),
                        stock : parseInt(element.stock),
                        image_01: element.image[0],
                        image_02: element.image[1],
                        image_03: element.image[2],
                        image_04: element.image[3],
                        thumb : element.thumb,
                        description : element.description,
                        specs :  element.specs
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
                    { association: "categories" },

                ], where: {
                    status: "Enabled"
                }
            })
            .then(product => {
                let productResponse = {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    img: `http://localhost:3030/img/products/${product.image}`,
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