// ************ Require's ************/
const express = require("express");
const path = require('path');
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");
const multer = require('multer');

/*** Middlewares - MULTER */

const imgStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname + '/../public/img/products'));
    },
    
    filename: (req, file, cb)=>{
        cb(null, file.originalname ); /* + path.extname(file.originalname)*/
    }
})

const upload = multer({storage : imgStorage});

const multipleUpload = upload.fields([{name : 'image', maxCount: 4},{name : 'thumb'}])



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
router.post('/admin', multipleUpload, ProductsController.store); 

/*** EDIT ONE PRODUCT */ 
router.get('/admin/edit/:id', ProductsController.edit); 
router.put('/admin/edit/:id', upload.array('image'), ProductsController.update); 

/*** DELETE ONE PRODUCT */ 
router.delete('/admin/edit/:id', ProductsController.destroy); 


module.exports = router;