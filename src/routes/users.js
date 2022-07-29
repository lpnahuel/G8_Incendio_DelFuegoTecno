 /************ Require's ************/
const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");
const path = require('path');
const userValidator = require('../middlewares/userValidator');
const upload = require('../middlewares/multerUsers');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware'); 
const adminMiddleware = require('../middlewares/adminMiddleware');
const userCreateValidator = require("../middlewares/userCreateValidator");
 
 /**** GET LOGIN */
router.get('/login', guestMiddleware, UsersController.login); 

 /**** PROCESS LOGIN */
router.post('/login', UsersController.processLogin); 

 /*** GET REGISTER FORM*/
router.get("/register", guestMiddleware, UsersController.register);

 /*** POST NEW USER*/
router.post("/register", upload.single('image'), userValidator, userCreateValidator, UsersController.processRegister);
 
 /**** GET PROFILE */
router.get('/profile', authMiddleware, UsersController.profile); 

 /**** GET LOGOUT  */
router.get('/logout', UsersController.logout); 
 
/**** GET USER EDIT FORM */
router.get('/edit/:id', authMiddleware, UsersController.edit); 

/**** GET USER EDIT FORM */
router.get('/edit/:id', authMiddleware, UsersController.edit); 

/**** EDIT USER */
router.put('/edit/:id', authMiddleware, upload.single('image'), userValidator, UsersController.update);

/**** GET USER PASSWORD EDIT FORM */
router.get('/edit/:id/password', authMiddleware, UsersController.password); 

/**** EDIT USER PASSWORD */
router.put('/edit/:id/password', authMiddleware, userCreateValidator, UsersController.passwordUpdate);

/**** GET ALL USERS */
router.get('/list', adminMiddleware, UsersController.list); 

/**** DELETE ONE USER*/
router.delete('/edit/:id', authMiddleware, UsersController.delete); 
 
module.exports = router;