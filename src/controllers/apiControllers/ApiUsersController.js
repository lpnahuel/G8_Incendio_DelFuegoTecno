// ************ Require's ************/
const fs = require('fs');
const path = require('path');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');

// *** Modelo */
const db = require('../database/models/index.js');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

let userApiController = {

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

    }//detail


}//userApiController

module.exports = userApiController;