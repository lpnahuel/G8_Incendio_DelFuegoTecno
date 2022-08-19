// ************ Require's ************/
const fs = require('fs');
const path = require('path');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');

// *** Modelo */
const db = require('../database/models/index.js');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

//LISTAR PRODUCTOS PARA LA API
const ApiProductsController = {
    list: async (req, res) => {
        try {
            let response = await db.Product.findAndCountAll();
            let data = response.rows.map(product => {
                return product.toJSON();
            });

            let infoConUrl = data.map(product => {
                return {
                    ...product,
                    image_01: `https://g8incendio-dft.herokuapp.com/products/img/${product.image_01}`,
                    image_02: `https://g8incendio-dft.herokuapp.com/products/img/${product.image_02}`,
                    image_03: `https://g8incendio-dft.herokuapp.com/products/img/${product.image_03}`,
                    image_04: `https://g8incendio-dft.herokuapp.com/products/img/${product.image_04}`,
                    url: `https://g8incendio-dft.herokuapp.com/api/products/detail/${product.id}`
                }

            })

            return res.status(200).json({
                count: response.count,
                products: infoConUrl,
            });

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: 'Ooops algo salio mal!',
                error:JSON.stringify(error),
                status: 500
            })
        }
    },

    //DETALLE DE PRODUCTO PARA LA API
    detail: async (req, res) => {
        try {
          let {id} = req.params
          let response = await db.Product.findOne({where:{id:id}})
          let data = {
              ...response.toJSON(),
              image_01: `https://g8incendio-dft.herokuapp.com/products/img/${response.image_01}`,
              image_02: `https://g8incendio-dft.herokuapp.com/products/img/${response.image_02}`,
              image_03: `https://g8incendio-dft.herokuapp.com/products/img/${response.image_03}`,
              image_04: `https://g8incendio-dft.herokuapp.com/products/img/${response.image_04}`,
          }
          res.status(200).json({
              data,
          })
        } catch (error) {
          console.log(error)
        }
      },
//verificar de acá a abajo//
/*
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

    }*/


}

module.exports = ApiProductsController