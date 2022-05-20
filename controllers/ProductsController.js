// ************ Require's ************
const fs = require('fs');
const path = require('path');

// ************ Path's ************
const productsFilePath = path.join(__dirname, '../data/products.json');
const usersFilePath = path.join(__dirname, '../data/users.json');

// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const ProductsController = {
    index : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render('products/productList', {productsDB : productsDB});
    },

    category : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let selectedCategory = productsDB.filter(producto => producto.category == req.params.category);


        res.render('products/productCategory', {selectedCategory : selectedCategory});
    },

    detail : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
         
        let productRequested = productsDB.find(producto => producto.id === parseInt(req.params.id));
        res.render('products/productDetail', {productRequested : productRequested, productsDB : productsDB});
    },

    admin : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render('products/admin-product-list', {productsDB : productsDB});
    },

    create : (req, res)=>{
        res.render('products/admin-create');
        

    },
    
    store : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let lastItem = productsDB.length -1;
        let NewItemId = productsDB[lastItem].id +1;
        
        console.log('ACA LLEGA EL REQ.BODY');
        console.log(req.body);
        console.log('=========================');

        let newProduct = {
            id : NewItemId,
            name:  req.body.name,
            category : req.body.category,
            price : req.body.price,
            stock : req.body.stock,
        //    image: req.file.image,
            description : req.body.description,
            specs :  req.body.specs
         
        }

        let newProductList;

        productsDB == '' ? newProductList = [] : newProductList = productsDB;

        newProductList.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(newProductList, null, "\t"));

        res.redirect('/products');


    },
    
    edit : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productRequested = productsDB.find(producto => producto.id === parseInt(req.params.id));

        res.render('products/admin-edit', {productRequested : productRequested, productsDB : productsDB});

    },
    
    update : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productToEdit = productsDB.find(item => item.id == req.params.id);

        let newEdition = {
            id : req.params.id,
            name : req.body.name,
            category : req.body.category,
            price : req.body.price,
            stock : req.body.stock,
            //  image : req.body.stock,
            description : req.body.description,
            specs : req.body.specs

        };

        let productIndex = productsDB.indexOf(productToEdit);

        productsDB[productIndex] = newEdition;

        fs.writeFileSync(productsFilePath, JSON.stringify(productsDB,null,"\t"));

        res.redirect('/products')


    },
    
    destroy : (req, res)=>{
		let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const newDatabase = productsDB.filter(item => item.id !== parseInt(req.params.id));

        fs.writeFileSync(productsFilePath, JSON.stringify(newDatabase,null,"\t"));

        res.redirect('/products')


    },




}

module.exports = ProductsController;