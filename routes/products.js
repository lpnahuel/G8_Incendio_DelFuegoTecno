const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");
const multer = require('multer');

/*** GET ALL PRODUCTS ***/ 
router.get('/', ProductsController.index); 

/*** GET ONE CATEGORY ***/ 
router.get('/category/:category', ProductsController.category); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', ProductsController.detail); 



//***** esto sería desde el ADMIN PANEL *****//

/*** ADMIN PANNEL ***/ 
router.get('/admin', ProductsController.admin); 

/*** CREATE ONE PRODUCT ***/ 
/**** ruta POST para CREAR nuevo producto y que redirija a productList */

//acá nos lleva al formulario de carga de producto (vista: admin-create)
router.get('/admin/create', ProductsController.create); 

/**** acá redirige a la lista de todos los productos (/productList) */
router.post('/admin', /*upload.array('prod-img'),*/ ProductsController.store); 

/*** EDIT ONE PRODUCT ***/ 
/**** ruta PUT para modificar un producto (vista: admin-edit) */
router.get('/admin/edit/:id', ProductsController.edit); 
router.put('/admin/edit/:id', /*upload.array('prod-img'),*/ ProductsController.update); 


/*** DELETE ONE PRODUCT***/ 
/****  ruta DELETE para borrar un producto */
router.delete('/admin/edit/:id', ProductsController.destroy); 

module.exports = router;