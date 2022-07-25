// ************ Require's ************/
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

// *** Path's */
const productsFilePath = path.join(__dirname, '../data/products.json');

// *** Modelo */
const db = require('../database/models/index.js');
const Op = db.Sequelize.Op;

const ProductsController = {

    index : (req,res)=>{
        db.Product.findAll()
        .then(productsDB =>{
            return res.render('products/productList', {productsDB : productsDB});
        })
        .catch(err =>{
            return console.log('Ha ocurrido un error: ' + err);
        })
    },
    
    search : (req,res)=>{

        let userSearch = req.query.search

        db.Product.findAll({
            where : {
                name : {[Op.like] : "%" + userSearch + "%"},

            }
        })
        .then(foundProduct=>{
            return res.render('products/productList', {productsDB : foundProduct});
        })
        .catch(err =>{
            console.log('Ha ocurrido un error: ' + err);
        })
    },

    category : (req,res)=>{
        db.Product.findAll(
            {where : {category_id : req.params.id}}
        )
        .then(selectedCategory=>{
            return res.render('products/productCategory', {selectedCategory : selectedCategory});
        })
        .catch(err =>{
            console.log('Ha ocurrido un error: ' + err);
        })
    },

    detail : (req, res)=>{
        db.Product.findByPk(req.params.id, {
            include : {
                model: db.Category,
                as: 'categories' 
            }
        })
        .then(productRequested=>{
            db.Product.findAll()
            .then(productsDB=>{
                return res.render('products/productDetail', {productRequested : productRequested, productsDB : productsDB});
            })
        })
        .catch(err =>{
            console.log('Ha ocurrido un error: ' + err);
        })
    },

    admin : (req, res)=>{

        db.Product.findAll({
            include : {
                model: db.Category,
                as: 'categories' 
            }
        })
        .then((productsDB)=>{
            console.log(JSON.stringify(productsDB, null, 2));
            return res.render('products/admin-product-list', {productsDB : productsDB});
        })
        .catch(err =>{
            res.render('products/admin-product-list', {message : err});

        })
    },

    create : (req, res)=>{
        db.Category.findAll()
        .then((categories)=>{
            return res.render('products/admin-create', {categories : categories});
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
                return res.redirect('/products/admin');
            })
            .catch(err =>{
                console.log('Ha ocurrido un error: ' + err);
            })

        }else{
            
            db.Category.findAll()
            .then((categories)=>{
                return res.render('products/admin-create', {errors : errors, oldData : req.body, categories : categories});
            })
            .catch(err =>{
                console.log('Ha ocurrido un error: ' + err);
            })
        }
    },

    edit : (req, res)=>{
        db.Product.findByPk(req.params.id)
        .then(productRequested=>{
            db.Category.findAll()
            .then(categories =>{
                return res.render('products/admin-edit', {productRequested : productRequested, categories : categories});
            })
        })
        .catch(err =>{
            console.log('Ha ocurrido un error: ' + err);
        })
    },

    update : (req, res)=>{
        
        db.Product.findByPk(req.params.id)
        .then(productToEdit =>{
            let image = [];
            (req.files.image) ? image = (req.files.image.map(item => item.originalname)) : image.push(productToEdit.image_01, productToEdit.image_02, productToEdit.image_03, productToEdit.image_04);
    
            let thumb;
            (req.files.thumb)? thumb = (req.files.thumb[0].originalname) : thumb = productToEdit.thumb;

            db.Product.update({
                name : req.body.name,
                category : req.body.category,
                price : parseInt(req.body.price),
                stock : parseInt(req.body.stock),
                image_01: image[0],
                image_02: image[1],
                image_03: image[2],
                image_04: image[3],
                thumb : req.files.thumb,
                description : req.body.description,
                specs : req.body.specs
            },
            {
                where : {id : req.params.id}
            })
            .then(()=>{
                return res.redirect('/products/admin')
            })
        })
        .catch(err =>{
            console.log('Ha ocurrido un error: ' + err);
        })
    },

    destroy : (req, res)=>{
		
        db.Product.destroy({
            where : {id : req.params.id}
        })
        .then(()=>{
            return res.redirect('/products')
        })
        .catch(err =>{
            console.log('Ha ocurrido un error: ' + err);
        })
    },
}

module.exports = ProductsController;