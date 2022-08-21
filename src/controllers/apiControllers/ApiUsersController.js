// ************ Require's ************/
const fs = require('fs');
const path = require('path');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');

// *** Modelo */
const db = require('../database/models/index.js');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

//LISTAR USUARIOS PARA LA API
const ApiUsersControllers = {
    list: async (req, res) => {
        try {
            let response = await db.User.findAndCountAll();
            let data = response.rows.map(user => {
                return user.toJSON();
            });

            let infoConUrl = data.map(user => {
                return {
                    ...user,
                    image_01: `https://g8incendio-dft.herokuapp.com/users/img/${user.image_01}`,
                    url: `https://g8incendio-dft.herokuapp.com/api/users/detail/${user.id}`, 
                   // delete user.dataValues.password,
                    //delete user.dataValues.rol_id,
                     
                
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
              image_01: `https://g8incendio-dft.herokuapp.com/users/img/${response.image_01}`,
          }
          res.status(200).json({
              data,
          })
        } catch (error) {
          console.log(error)
        }
      },

/*
let  = {

    list: function (req, res) {


        db.User.findAll({
            include: [
                { association: "roles" },

            ], where: {
                status: "Activo"
            }
        })

            //Borramos los campos que no queremos mostrar
            .then(users => {
                users.map(element => {
                    delete element.dataValues.document
                    delete element.dataValues.detail
                    delete element.dataValues.password
                    delete element.dataValues.rol_id
                    delete element.dataValues.updated_at
                    delete element.dataValues.created_at
                    element.dataValues.detail = `/api/users/${element.dataValues.id}`
                    element.dataValues.image = `http://localhost:3030/img/user/${element.dataValues.image}`

                })
                res.json({
                    count: users.length,
                    users: users                                                    
                })
            }).catch(error => res.send(error));
    },

    detail: function (req, res) {
        db.User.findByPk(req.params.id, {
            include: [
                { association: "roles" },

            ], where: {
                status: "Activo"
            }
        })

            .then(user => {
                console.log(user)
                let userResponse = {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    date_of_birth: user.date_of_birth,
                    image: `http://localhost:3030/img/users/${user.image}`,
                    adress: user.adress,
                    cp: user.cp,
                    password: user.password,
                    rol: user.roles.name,

                }
                let response = {
                    user: userResponse,


                }

                res.json(response)
            }).catch(error => res.send(error));

    }//detail */


}//userApiController

module.exports = ApiUsersControllers;