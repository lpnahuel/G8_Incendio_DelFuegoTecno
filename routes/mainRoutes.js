const express = require("express");
const router = express.Router();
const mainController = require("../controllers/MainController");

router.get("/", mainController.index);

router.get("/carrito", mainController.productCart);

router.get("/producto", mainController.productDetail);

router.get("/login", mainController.login);

router.get("/register", mainController.register);

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