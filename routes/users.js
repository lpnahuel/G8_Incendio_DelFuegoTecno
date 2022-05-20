 /************ Require's ************/
 const express = require("express");
 const router = express.Router();
 const UsersController = require("../controllers/UsersController");
 const multer = require('multer');



 /*** Armar vista de perfil de usuario y editar usuario */

 /**** GET vista user (perfil de usuario) */
 router.get('profile/:id', UsersController.index); 
 
 /**** GET vista login */
 router.get('/login', UsersController.login); 

 // POST usuario loggeado redirige al home?
 // router.get('/login', UsersController.login);

 /*** CREAR usuario nuevo - GET y POST*/
 // el get nos lleva al formulario de registro
 router.get("/register", UsersController.register);

// post redirige a la página del perfil de usuario
 //router.post("'profile/:id", UsersController.create);


 /**** EDITAR usuario existente - GET y PUT */
 //router.get('/edit/:id', UsersController.view); 
 //router.put('/edit', UsersController.update); 

 /**** ELIMINAR usuario existente - DELETE */
 //router.delete('/edit/:id', UsersController.destroy); 


 module.exports = router;