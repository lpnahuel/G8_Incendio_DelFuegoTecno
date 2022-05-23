// ************ Require's ************
const fs = require('fs');
const path = require('path');

// ************ Path's ************
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');

const UsersController = {

    index : (req,res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));;

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

}






module.exports = UsersController;