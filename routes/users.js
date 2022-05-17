// const express = require("express");
// const router = express.Router();
// // const UsersController = require("../controllers/UsersController");

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