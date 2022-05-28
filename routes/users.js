 /************ Require's ************/
 const express = require("express");
 const router = express.Router();
 const UsersController = require("../controllers/UsersController");
 const path = require('path');
 const userValidator = require('../middlewares/userValidator');
 const upload = require('../middlewares/multerUsers');
 
 /**** GET LOGIN */
 router.get('/login', UsersController.login); 
 
 /*** GET REGISTER FORM*/
 router.get("/register", UsersController.register);

 /*** POST NEW USER*/
 router.post("/register", upload.single('image'), userValidator, UsersController.create);
 
 /**** GET PROFILE ID */
 router.get('/profile/:id', UsersController.profile); 
 
/**** GET USER EDIT FORM */
router.get('/edit/:id', UsersController.view); 

/**** EDIT USER */
router.put('/edit/:id', upload.single('image'), UsersController.update);

/**** GET ALL USERS */
router.get('/list', UsersController.list); 

/**** DELETE ONE USER*/
router.delete('/edit/:id', UsersController.delete); 
 
module.exports = router;