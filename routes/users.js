 /************ Require's ************/
 const express = require("express");
 const router = express.Router();
 const UsersController = require("../controllers/UsersController");
 const path = require('path');
 const userValidator = require('../middlewares/userValidator');
 const upload = require('../middlewares/multerUsers');
 const recordameMiddleware = require('../middlewares/recordameMiddleware');
 // Con este middleware podemos verificar si el usuario está logueado o no
 const guestMiddleware = require('../middlewares/guestMiddleware');
 const authMiddleware = require('../middlewares/authMiddleware');
 
 /**** GET LOGIN */
 router.get('/login', guestMiddleware, UsersController.login); 

 /**** PROCESS LOGIN */
 router.post('/login', UsersController.processLogin); 
 
 /*** GET REGISTER FORM*/
 router.get("/register", guestMiddleware, UsersController.register);

 /*** POST NEW USER*/
 router.post("/register", upload.single('image'), userValidator, UsersController.processRegister);
 
 /**** GET PROFILE */
 router.get('/profile', authMiddleware, UsersController.profile); 

 /**** GET LOGOUT  */
 router.get('/logout', UsersController.logout); 
 
/**** GET USER EDIT FORM */
//router.get('/edit/:id', UsersController.view); 

/**** EDIT USER */
router.put('/edit/:id', upload.single('image'), UsersController.update);

/**** GET ALL USERS */
router.get('/list', UsersController.list); 

/**** DELETE ONE USER*/
router.delete('/edit/:id', UsersController.delete); 
 
module.exports = router;