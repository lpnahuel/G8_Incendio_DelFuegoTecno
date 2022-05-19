// ************ Require's ************
const fs = require('fs');
const path = require('path');

// ************ Path's ************
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');

let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const ProductsController = {
    index : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render('products/productList', {productsDB : productsDB});
    },

    detail : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
         
        let productRequested = productsDB.find(producto => producto.id === parseInt(req.params.id));
        res.render('products/productDetail', {productRequested : productRequested, productsDB : productsDB});
    },

    create : (req, res)=>{
        res.render('users/admin-create');
        

    },
    
    store : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let lastItem = productsDB.length -1;
        let NewItemId = productsDB[lastItem].id +1;

        let newProduct = {
            id : NewItemId,
            name: req.body.name,
            category : req.body.category,
            price : req.body.price,
        //    image: req.file.image,
            description : req.body.description,
            specs : req.body.specs,
            sock : req.body.stock
         
        }

        let newProductList;

        productsDB == '' ? newProductList = [] : newProductList = productsDB;

        newProductList.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(newProductList, null, "\t"));

        res.redirect('admin/create/');


    },
    
    edit : (req, res)=>{


    },
    
    update : (req, res)=>{


    },
    
    destroy : (req, res)=>{


    },




}

module.exports = ProductsController;