// *** Modelo */
const db = require('../../database/models/index');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

//LISTAR PRODUCTOS PARA LA API
const ApiProductsController = {
    list: async (req, res) => {
        try {
            let categories = await db.Category.findAll(
                {include : {
                    model: db.Product,
                    as: 'products' 
                    }});
            let catRes = categories.map(category => (
                {
                    ...category.toJSON(),
                }
            ))

            let response = await db.Product.findAndCountAll(
                {include : {
                model: db.Category,
                as: 'categories' 
                }});
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
                categories: catRes
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
      }

}

module.exports = ApiProductsController