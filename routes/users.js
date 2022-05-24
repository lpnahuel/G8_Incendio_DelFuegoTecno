 /************ Require's ************/
 const express = require("express");
 const router = express.Router();
 const UsersController = require("../controllers/UsersController");
 const multer = require('multer');
 const path = require('path');

 const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname + '/../public/img/users'));
    },
    
    filename: (req, file, cb)=>{
        cb(null, 'user-'+ file.fieldname +  Date.now() + path.extname(file.originalname)); 
        }
});

const upload = multer({ storage: storage });


 
 /**** GET vista login */
 router.get('/login', UsersController.login); 
 


 /*** GET REGISTER FORM*/
 router.get("/register", UsersController.register);
 /*** POST NEW USER*/
 router.post("/register", upload.single('image'), UsersController.create);
 
 /**** GET PROFILE ID */
 //router.get('profile/:id', UsersController.profile); 
 
/**** EDITAR usuario existente - GET y PUT */
//router.get('/edit/:id', UsersController.view); 
//router.put('/edit', UsersController.update); 
 
/**** ELIMINAR usuario existente - DELETE */
//router.delete('/edit/:id', UsersController.destroy); 

   
// POST usuario loggeado redirige al home?

// post redirige a la página del perfil de usuario
 //router.post("'profile/:id", UsersController.create);
 
  module.exports = router;