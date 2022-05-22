// ************ Require's ************
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');

// ************ Path's ************
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');

let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const mainController = {
    
    index:function(req,res){
      let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
      res.render('index', {productsDB : productsDB});
    },
  
    productCart:function(req,res){
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.locals.title = "DFT - Carrito"
        res.render('productCart', {productsDB : productsDB});
    },

    contact: (req, res)=>{
      res.render('contact')
    }
};

module.exports = mainController;