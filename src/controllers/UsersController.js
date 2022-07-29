// ************ Require's ************
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

// ************ Path's ************
const usersFilePath = path.join(__dirname, '../data/users.json');

// ************ Model ************
const db = require('../database/models/index.js');

const UsersController = {

    login: (req, res) => {
        return res.render('users/login');
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);


        if (errors.isEmpty()) {

            db.User.findOne({
                where: {
                    email: req.body.email
                    }
                })
                .then(userToLogin => {
                    let check = bcrypt.compareSync(req.body.password, userToLogin.password);
                    if (check) {
                        delete userToLogin.password;

                        req.session.userLogged = userToLogin;
                        req.session.userLoggedEmail = userToLogin.email;

                        req.session.isAdmin = userToLogin.role_id === 1;

                        if (req.body.recordame) {
                            res.cookie('userEmail', req.body.email, { maxAge: 60000 * 2 })
                        }
                        res.redirect('/users/profile')
                    } else {

                        res.render('users/login', { errors: { msg: 'Credenciales Invalidas' } });
                    };

                })
                .catch((err) => {
                    res.render('users/login', { errors: { msg: 'Usuario no encontrado' } });
                })

        } else {
            res.render('users/login', { errors: errors.errors });
        };
    },

    register: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req, res) => {

        let validationResults = validationResult(req);
        let errors = validationResults.mapped();

        let image;
        (req.file) ? image = req.file.filename : image;

        if (validationResults.errors.length === 0) {

            let password = bcrypt.hashSync(req.body.password, 10);

            db.User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birth: req.body.birth,
                image: image,
                phone: req.body.phone,
                address: req.body.address,
                cp: req.body.cp,
                city: req.body.city,
                email: req.body.email,
                password: password,
                role_id: 2
            })
                .then(() => {
                    return res.redirect('/users/login');
                })
                .catch((error)=>{
                    console.log(error)
                })

        } else {

            res.render('users/register', { errors: errors, oldData: req.body })
        }

    },

    profile: (req, res) => {
        res.render('users/profile', { userProfile: req.session.userLogged })

    },

    edit: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(userProfile => {
                db.Role.findAll()
                .then(roles =>
                    res.render('users/user-edit', { userProfile: userProfile, roles : roles })
                )
            })
            .catch(err => {
                console.log('Ha ocurrido un error: ' + err);
            })


    },

    update: (req, res) => {

        db.User.findByPk(req.params.id)
            .then(userToEdit => {
                let image;
                (req.file) ? image = req.file.filename : image = userToEdit.image;

                // let password;

                // (req.body.password)? password = bcrypt.hashSync(req.body.password, 10) : password = userToEdit.password;
    

                let validationResults = validationResult(req);
                let errors = validationResults.mapped();

                if (validationResults.errors.length === 0) {

                    db.User.update({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        birth: req.body.birth,
                        image: image,
                        phone: req.body.phone,
                        address: req.body.address,
                        cp: req.body.cp,
                        city: req.body.city,
                        email: req.body.email,
                        password: userToEdit.password,
                        role_id: req.body.role
                    },
                        {
                            where: { id: req.params.id }
                        })
                        .then(() => {
                            res.redirect('/users/list');
                        })
                        .catch(err => {
                            console.log('Ha ocurrido un error: ' + err);
                        })
                } else {
                    console.log('Error en el else', errors);
                    res.render('users/user-edit', { userProfile: userToEdit, errors: errors, oldData: req.body });
                }
            });
    },

    password: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(userProfile => {
                res.render('users/user-edit-password', { userProfile: userProfile})
            })
            .catch(err => {
                console.log('Ha ocurrido un error: ' + err);
            })


    },

    passwordUpdate: (req, res) => {

        db.User.findByPk(req.params.id)
            .then(userToEdit => {
             
                console.log(userToEdit.first_name);
                let validationResults = validationResult(req);
                let errors = validationResults.mapped();

                let password = bcrypt.hashSync(req.body.password, 10);

                if (validationResults.errors.length === 0) {

                    db.User.update({
                        first_name: userToEdit.first_name,
                        last_name: userToEdit.last_name,
                        birth: userToEdit.birth,
                        image: userToEdit.image,
                        phone: userToEdit.phone,
                        address: userToEdit.address,
                        cp: userToEdit.cp,
                        city: userToEdit.city,
                        email: userToEdit.email,
                        password: password,
                        role_id: userToEdit.role
                    },
                        {
                            where: { id: req.params.id }
                        })
                        .then(() => {
                            res.redirect('/users/profile');
                        })
                        .catch(err => {
                            console.log('Ha ocurrido un error: ' + err);
                        })
                } else {
                    console.log('Error en el else', errors);
                    res.render('users/user-edit-password', { userProfile: userToEdit, errors: errors, oldData: req.body });
                }
            });
    },

    list: (req, res) => {
        db.User.findAll({
            include : {
                model: db.Role,
                as: 'roles' 
            }
        })
            .then(usersDB => {
                res.render('users/users-list', { usersDB: usersDB });
            })
            .catch(err => {
                console.log('Ha ocurrido un error: ' + err);
            })

    },

    delete: (req, res) => {
        db.User.destroy({
            where: { id: req.params.id }
        })
            .then(() => {
                res.redirect('/users/list');

            })
            .catch(err => {
                console.log('Ha ocurrido un error: ' + err);
            })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.cookie('userEmail', '', { maxAge: -1 })
        res.redirect('/');
    }


}

module.exports = UsersController;