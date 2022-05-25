// ************ Require's ************
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

// ************ Path's ************
const usersFilePath = path.join(__dirname, '../data/users.json');

const UsersController = {
    
    login:(req,res)=>{
        res.render('users/login');
    },

    register:(req,res)=>{
        res.render('users/register');
    },

    create:(req,res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let validationResults = validationResult(req);
        let errors = validationResults.mapped();

        if(validationResults.errors.length === 0){
            let lastUser = usersDB.length -1;
            let NewUserId = usersDB[lastUser].id +1;
            
            let image;
            (req.file) ? image = (req.file.filename) : image = '';

            let newUser = {
                id: NewUserId,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                birth : req.body.birth,
                image : image,
                phone :  req.body.phone,
                address :  req.body.address,
                cp :  req.body.cp,
                city :  req.body.city,
                email :  req.body.email,
                password :  req.body.password,
            }

            let newUserList;

            usersDB == '' ? newUserList = [] : newUserList = usersDB;

            newUserList.push(newUser);

            fs.writeFileSync(usersFilePath, JSON.stringify(newUserList, null, '\t'));

            res.redirect('/users/profile/' + newUser.id);

        }else{

            res.render('users/register', {errors : errors, oldData : req.body})
        }

    },

    profile : (req, res) =>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userProfile = usersDB.find(user => user.id === parseInt(req.params.id));

        res.render('users/profile', {userProfile : userProfile})

    },

    view : (req, res) =>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userProfile = usersDB.find(user => user.id === parseInt(req.params.id));

        res.render('users/user-edit', {userProfile : userProfile})

    },

    update:(req,res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userToEdit = usersDB.find(user => user.id === parseInt(req.params.id))

        console.log('req.body',req.body)
        console.log('req.file',req.file)
        let image;
        req.file == undefined ? image = userToEdit.image : image = req.file.filename;

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
            password :  req.body.password,
        }

        let userIndex = usersDB.indexOf(userToEdit);

        usersDB[userIndex] = editedUser;

        fs.writeFileSync(usersFilePath, JSON.stringify(usersDB, null, '\t'));

        res.redirect('/users/profile/' + userToEdit.id);
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

    }


}






module.exports = UsersController;