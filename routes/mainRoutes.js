const express = require("express");
const router = express.Router();
const mainController = require("../controllers/MainController");

router.get("/", mainController.index);
router.post("/", mainController.indexPost);

router.get("/carrito", mainController.productCart);
router.post("/carrito", mainController.productCartPost);

router.get("/producto", mainController.productDetail);
router.post("/producto", mainController.productDetailPost);

router.get("/login", mainController.login);
router.post("/login", mainController.loginPost);

router.get("/registro", mainController.register);
router.post("/registro", mainController.registerPost);

module.exports = router;

// app.post('/carrito', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/views/productCart.html'))
// });
// app.post('/login', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/views/login.html'))
// });

// app.post('/registro', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/views/register.html'))
// });
// app.post('/producto', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/views/productDetail.html'))
// });