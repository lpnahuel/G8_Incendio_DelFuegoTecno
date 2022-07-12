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
    //listo
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
                .catch(() => {
                    res.render('users/login', { errors: { msg: 'error en el catch' } });
                })

        } else {
            res.render('users/login', { errors: errors.errors });
        };
    },

    register: (req, res) => {
        res.render('users/register');
    },
    //listo
    processRegister: (req, res) => {

        let validationResults = validationResult(req);
        let errors = validationResults.mapped();

        if (validationResults.errors.length === 0) {

            let image;
            (req.file) ? image = (req.file.filename) : image = '';

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
                    res.redirect('/users/login');
                })

        } else {

            res.render('users/register', { errors: errors, oldData: req.body })
        }

    },

    profile: (req, res) => {
        res.render('users/profile', { userProfile: req.session.userLogged })

    },
    //listo
    edit: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(userProfile => {
                res.render('users/user-edit', { userProfile: userProfile })
            })
            .catch(err => {
                console.log('Ha ocurrido un error: ' + err);
            })


    },
    //listo
    update: (req, res) => {

        db.User.findByPk(req.params.id)
            .then(userToEdit => {
                let image;
                req.file == undefined ? image = userToEdit.image : image = req.file.filename;

                let password = bcrypt.hashSync(req.body.password, 10);
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
                        password: password,
                        role: userToEdit.role
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
                    res.render('users/user-edit', { userProfile: userToEdit, errors: errors, oldData: req.body });
                }
            });
    },

    list: (req, res) => {
        db.User.findAll()
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