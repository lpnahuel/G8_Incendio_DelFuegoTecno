 /************ Require's ************/
 const express = require("express");
 const router = express.Router();
 const UsersController = require("../controllers/UsersController");
 const path = require('path');
 const userValidator = require('../middlewares/userValidator');
 const upload = require('../middlewares/multerUsers');
 const guestMiddleware = require('../middlewares/guestMiddleware');
 const authMiddleware = require('../middlewares/authMiddleware'); 
 const adminMiddleware = require('../middlewares/adminMiddleware')
 
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
router.get('/edit/:id', UsersController.edit); 

/**** EDIT USER */
router.put('/edit/:id', upload.single('image'), userValidator, UsersController.update);

/**** GET ALL USERS */
router.get('/list', adminMiddleware, UsersController.list); 

/**** DELETE ONE USER*/
router.delete('/edit/:id', UsersController.delete); 
 
module.exports = router;