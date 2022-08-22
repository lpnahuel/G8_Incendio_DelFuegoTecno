// ************ Require's ************/
const fs = require('fs');
const path = require('path');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');

// *** Modelo */
const db = require('../../database/models/index.js');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

//LISTAR USUARIOS PARA LA API
const ApiUsersControllers = {
    list: async (req, res) => {
        try {
            let response = await db.User.findAndCountAll({include : {
                model: db.Role,
                as: 'roles' 
                }});
            let data = response.rows.map(user => {
                return user.toJSON();
            });

            let infoConUrl = data.map(user => {
                return {
                    ...user,
                    image: `https://g8incendio-dft.herokuapp.com/users/img/${user.image}`,
                    url: `https://g8incendio-dft.herokuapp.com/api/users/profile/${user.id}`, 
                
                }

            })

            return res.status(200).json({
                count: response.count,
                user: infoConUrl,
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
    //DETALLE DE USUARIO PARA LA API
    detail: async (req, res) => {
        try {
          let {id} = req.params
          let response = await db.User.findOne({where:{id:id}})
          let data = {
              ...response.toJSON(),
              image: `https://g8incendio-dft.herokuapp.com/users/img/${response.image}`,
          }
          res.status(200).json({
              data,
          })
        } catch (error) {
          console.log(error)
        }
      },

}//userApiController

module.exports = ApiUsersControllers;