const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");
const multer = require('multer');

/*** GET ALL PRODUCTS ***/ 
router.get('/', ProductsController.index); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', ProductsController.detail); 


//***** esto sería desde el ADMIN PANEL *****//

/*** CREATE ONE PRODUCT ***/ 
/**** ruta POST para CREAR nuevo producto y que redirija a productList */

//acá nos lleva al formulario de carga de producto (vista: admin-create)
router.get('/admin/create', ProductsController.create); 

/**** acá redirige a la lista de todos los productos (/productList) */
router.post('/admin', /*upload.array('prod-img'),*/ ProductsController.store); 

/*** EDIT ONE PRODUCT ***/ 
/**** ruta PUT para modificar un producto (vista: admin-edit) */
router.get('/edit/:id', ProductsController.edit); 
router.put('/edit/:id', /*upload.array('prod-img'),*/ ProductsController.update); 


/*** DELETE ONE PRODUCT***/ 
/****  ruta DELETE para borrar un producto */
router.delete('/:id', ProductsController.destroy); 

module.exports = router;