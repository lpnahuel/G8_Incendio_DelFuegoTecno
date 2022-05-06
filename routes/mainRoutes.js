const express = require("express");
const router = express.Router();
const mainController = require("../controllers/MainController");

router.get("/", mainController.index);

router.get("/carrito", mainController.productCart);

router.get("/producto/:id", mainController.productDetail);

router.get("/categorias", mainController.productList);

router.get("/login", mainController.login);

router.get("/registro", mainController.register);

router.get("/admin", mainController.admin);

module.exports = router;
