// const express = require("express");
// const router = express.Router();
// const ProductsController = require("../controllers/ProductsController");

// // una ruta GET que vaya a productList (all products)
// router.get('/', ProductsController.index); 

// // ruta GET que vaya al detail
// router.get('/productDetail/:id', ProductsController.detail); 


// //***** esto sería desde el ADMIN PANEL *****//

// // ruta POST para CREAR nuevo producto y que redirija a productList

// //acá nos lleva al formulario de carga de producto (vista: admin-create)
// router.get('/create', ProductsController.create); 
// // acá redirige a la lista de todos los productos (/productList)
// router.post('/', upload.any('prod-img'), ProductsController.store); 


// // ruta PUT para modificar un producto (vista: admin-edit)
// router.get('/edit/:id', ProductsController.edit); 
// router.put('/edit', upload.any('prod-img'), ProductsController.update); 

// // ruta DELETE para borrar un producto
// router.delete('/:id', ProductsController.destroy); 

// module.exports = router;