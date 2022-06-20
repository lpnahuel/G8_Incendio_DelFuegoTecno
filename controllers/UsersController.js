// ************ Require's ************
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const { CLIENT_RENEG_LIMIT } = require('tls');

// ************ Path's ************
const usersFilePath = path.join(__dirname, '../data/users.json');

const UsersController = {
    
    login:(req,res)=>{
        res.render('users/login');
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
    
        if (errors.isEmpty()){
            let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

            let userToLogin = usersDB.find(user => user.email === req.body.email);

            if (userToLogin){

                let check = bcrypt.compareSync(req.body.password, userToLogin.password);

                if(check){
                    delete userToLogin.password;

                    req.session.userLogged = userToLogin;

                    req.session.isAdmin = userToLogin.role == "admin";                        

                    if (req.body.recordame) {
                         res.cookie('userEmail', req.body.email, { maxAge: 60000 })
                    }

                    res.redirect('/users/profile')
                }else{

                    res.render('users/login', { errors: {msg: 'Credenciales Invalidas'}});
                };

            } else {
                res.render('users/login', {errors : {msg: 'Credenciales Invalidas'}});
            };

        
        } else {
            res.render('users/login', {errors : errors.errors});
        };
    },

    register:(req,res)=>{
        res.render('users/register');
    },

    processRegister:(req,res)=>{

        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let validationResults = validationResult(req);
        let errors = validationResults.mapped();

        if(validationResults.errors.length === 0){
            let newUserId = usersDB.length + 1;
          
            let image;
            (req.file) ? image = (req.file.filename) : image = '';

            let password = bcrypt.hashSync(req.body.password, 10);
            
            let newUser = {
                id: newUserId,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                birth : req.body.birth,
                image : image,
                phone :  req.body.phone,
                address :  req.body.address,
                cp :  req.body.cp,
                city :  req.body.city,
                email :  req.body.email,
                password : password,
                role : "client"
            }

            let newUserList;

            usersDB == '' ? newUserList = [] : newUserList = usersDB;

            newUserList.push(newUser);

            fs.writeFileSync(usersFilePath, JSON.stringify(newUserList, null, '\t'));

            res.redirect('/users/login');

        }else{

            res.render('users/register', {errors : errors, oldData : req.body})
        }

    },

    profile : (req, res) =>{
        res.render('users/profile', {userProfile : req.session.userLogged})

    },

    edit : (req, res) =>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userProfile = usersDB.find(user => user.id === parseInt(req.params.id));

        res.render('users/user-edit', {userProfile : userProfile})

    },

    update:(req,res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userToEdit = usersDB.find(user => user.id === parseInt(req.params.id));

        let validationResults = validationResult(req);
        let errors = validationResults.mapped();

        if(validationResults.errors.length === 0){

            let image;
            req.file == undefined ? image = userToEdit.image : image = req.file.filename;

            let password = bcrypt.hashSync(req.body.password, 10);

            let editedUser = {
                id: parseInt(req.params.id),
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                birth : req.body.birth,
                image : image,
                phone :  req.body.phone,
                address :  req.body.address,
                cp :  req.body.cp,
                city :  req.body.city,
                email :  req.body.email,
                password : password,
                role: req.body.role
            }

            let userIndex = usersDB.indexOf(userToEdit);

            usersDB[userIndex] = editedUser;

            fs.writeFileSync(usersFilePath, JSON.stringify(usersDB, null, '\t'));

            res.redirect('/users/list');
        }else{

            res.render('users/user-edit', {userProfile : userToEdit, errors : errors, oldData : req.body})
        }
    },

    list : (req, res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        res.render('users/users-list', {usersDB : usersDB});

    },

    delete : (req, res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
         
        let newUserDataBase = usersDB.filter(item => item.id !== parseInt(req.params.id));

        fs.writeFileSync(usersFilePath, JSON.stringify(newUserDataBase,null,"\t"));

        res.redirect('/users/list');

    },

    logout : (req, res)=>{
        req.session.destroy();
        res.cookie('userEmail', '', { maxAge: -1 })
        res.redirect('/');
    }


}






module.exports = UsersController;