// ************ Require's ************
// const fs = require('fs');
// const path = require('path');
// const multer = require('multer');

// ************ Path's ************
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const usersFilePath = path.join(__dirname, '../data/users.json');

// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// /*** Armar vista de perfil de usuario y editar usuario */

// /**** GET vista user (perfil de usuario) */
// router.get('/:id', UsersController.index); 

// /*** CREAR usuario nuevo - GET y POST*/
// // el get nos lleva al formulario de registro
// router.get("/registro", UsersController.register);

// //post redirige a la página del perfil de usuario
// router.post("/:id", UsersController.create);


// /**** EDITAR usuario existente - GET y PUT */
// router.get('/edit/:id', UsersController.view); 
// router.put('/edit', UsersController.update); 

// /**** ELIMINAR usuario existente - DELETE */
// router.delete('/edit/:id', UsersController.destroy); 