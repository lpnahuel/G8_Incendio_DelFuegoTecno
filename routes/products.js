// ************ Require's ************/
const express = require("express");
const path = require('path');
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");
const productValidator = require('../middlewares/productValidator');
const multipleUpload = require('../middlewares/multerProducts');


/*** GET ALL PRODUCTS */ 
router.get('/', ProductsController.index); 

/*** SEARCH PRODUCT */ 
router.get('/search', ProductsController.search);

/*** GET ONE CATEGORY */ 
router.get('/category/:category', ProductsController.category); 

/*** GET ONE PRODUCT */ 
router.get('/detail/:id', ProductsController.detail); 

/*** ADMIN PANNEL */ 
router.get('/admin', ProductsController.admin); 

/*** CREATE ONE PRODUCT */ 
router.get('/admin/create', ProductsController.create); 
router.post('/admin', multipleUpload, productValidator, ProductsController.store); 

/*** EDIT ONE PRODUCT */ 
router.get('/admin/edit/:id', ProductsController.edit); 
router.put('/admin/edit/:id', multipleUpload, productValidator, ProductsController.update); 

/*** DELETE ONE PRODUCT */ 
router.delete('/admin/edit/:id', ProductsController.destroy); 


module.exports = router;