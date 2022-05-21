 /************ Require's ************/
 const express = require("express");
 const router = express.Router();
 const UsersController = require("../controllers/UsersController");
 const multer = require('multer');


 
 /**** GET vista login */
 router.get('/login', UsersController.login); 
 
 
// POST usuario loggeado redirige al home?

// post redirige a la página del perfil de usuario
 //router.post("'profile/:id", UsersController.create);

 /*** CREAR usuario nuevo - GET y POST*/
 router.get("/register", UsersController.register);
 
 /**** GET PROFILE ID */
 router.get('profile/:id', UsersController.index); 
 
  /**** EDITAR usuario existente - GET y PUT */
  //router.get('/edit/:id', UsersController.view); 
  //router.put('/edit', UsersController.update); 
 
  /**** ELIMINAR usuario existente - DELETE */
  //router.delete('/edit/:id', UsersController.destroy); 
 
  module.exports = router;