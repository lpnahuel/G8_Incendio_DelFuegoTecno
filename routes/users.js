 /************ Require's ************/
 const express = require("express");
 const router = express.Router();
 const UsersController = require("../controllers/UsersController");
 const multer = require('multer');
 const path = require('path');

 /*** Middlewares - MULTER */

 const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname + '/../public/img/users'));
    },
    
    filename: (req, file, cb)=>{
        cb(null, 'user-'+ file.fieldname +  Date.now() + path.extname(file.originalname)); 
        }
});

const upload = multer({ storage: storage });

 
 /**** GET LOGIN */
 router.get('/login', UsersController.login); 
 
 /*** GET REGISTER FORM*/
 router.get("/register", UsersController.register);

 /*** POST NEW USER*/
 router.post("/register", upload.single('image'), UsersController.create);
 
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