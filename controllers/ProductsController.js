// ************ Require's ************/
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');
const db = require('../database/models/index.js');

const ProductsController = {
    index : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


        res.render('products/productList', {productsDB : productsDB});
    },
    
    search : (req,res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let userSearch = req.query.search.toLowerCase();

        let searchResults = [];

        productsDB.forEach(foundProduct => {
            if (foundProduct.name.toLowerCase().includes(userSearch) || foundProduct.category.toLowerCase().includes(userSearch)) {
            searchResults.push(foundProduct);
            }
        });

        res.render('products/productList', {productsDB : searchResults});
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

        db.Product.findAll({
            include : { model: db.Category, as: 'categories' }
        })
        .then((productsDB)=>{
            console.log(JSON.stringify(productsDB, null, 2));
            res.render('products/admin-product-list', {productsDB : productsDB});
        })
        .catch(err =>{
            res.render('products/admin-product-list', {message : err});

        })

    },

    create : (req, res)=>{

        db.Category.findAll()
        .then((categories)=>{

            res.render('products/admin-create', {categories : categories});
        })
        .catch(err =>{

            res.render('products/admin-create', {message : err});

        })
    },
    
    store : (req, res)=>{
        
        let validationResults = validationResult(req);
        let errors = validationResults.mapped();
        
        if(validationResults.errors.length === 0){
            
         
            let image;
            (req.files.image) ? image = (req.files.image.map(item => item.originalname)) : image = [];
            
            let thumb;
            (req.files.thumb)? thumb = (req.files.thumb[0].originalname) : thumb = '';
            
            db.Product.create({
                name:  req.body.name,
                category_id : req.body.category,
                price : parseInt(req.body.price),
                stock : parseInt(req.body.stock),
                image_01: image[0],
                image_02: image[1],
                image_03: image[2],
                image_04: image[3],
                thumb : thumb,
                description : req.body.description,
                specs :  req.body.specs
                     
            })
            .then(()=>{
                res.redirect('/products/admin');
            })
            .catch(err =>{
                 console.log(err)
            })

        }else{

            db.Category.findAll()
            .then((categories)=>{
    
                res.render('products/admin-create', {errors : errors, oldData : req.body, categories : categories});
            });

        }
    },
    
    edit : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productRequested = productsDB.find(producto => producto.id === parseInt(req.params.id));

        res.render('products/admin-edit', {productRequested : productRequested, productsDB : productsDB});
    },
    
    update : (req, res)=>{
        let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productToEdit = productsDB.find(item => item.id === parseInt(req.params.id));
        

        let image;
        (req.files.image) ? image = (req.files.image.map(item => item.originalname)) : image = productToEdit.image;

        let thumb;
        (req.files.thumb)? thumb = (req.files.thumb[0].originalname) : thumb = productToEdit.thumb;
 
        let newEdition = {
            id : parseInt(req.params.id),
            name : req.body.name,
            category : req.body.category,
            price : parseInt(req.body.price),
            stock : parseInt(req.body.stock),
            image : image,
            thumb : thumb,
            description : req.body.description,
            specs : req.body.specs

        };

        let productIndex = productsDB.indexOf(productToEdit);

        productsDB[productIndex] = newEdition;

        fs.writeFileSync(productsFilePath, JSON.stringify(productsDB,null,"\t"));

        res.redirect('/products/admin')
    },
    
    destroy : (req, res)=>{
		let productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const newProductsDatabase = productsDB.filter(item => item.id !== parseInt(req.params.id));

        fs.writeFileSync(productsFilePath, JSON.stringify(newProductsDatabase,null,"\t"));

        res.redirect('/products')
    },

}

module.exports = ProductsController;