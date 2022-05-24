// ************ Require's ************
const fs = require('fs');
const path = require('path');

// ************ Path's ************
// const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');

const UsersController = {

    index : (req,res)=>{
        

        res.render('products/productList', {productsDB : productsDB});
    },

    register:(req,res)=>{
        res.locals.title = "DFT - Registro Usuarios"
        res.render('users/register');
    },

    login:(req,res)=>{
        res.locals.title = "DFT - Login Usuarios"
        res.render('users/login');
    },

    create:(req,res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let lastUser = usersDB.length -1;
        let NewUserId = usersDB[lastUser].id +1;

        console.log('REQ.BODY', req.body);

        let newUser = {
            id: NewUserId,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            birth : req.body.birth,
            //image : 
            phone :  req.body.phone,
            adress :  req.body.adress,
            cp :  req.body.cp,
            city :  req.body.city,
            email :  req.body.email,
            password :  req.body.password,
        }

        let newUserList;

        usersDB == '' ? newUserList = [] : newUserList = usersDB;

        newUserList.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(newUserList, null, '\t'));

        res.redirect('/');
    },

}






module.exports = UsersController;