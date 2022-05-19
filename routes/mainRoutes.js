const express = require("express");
const router = express.Router();
const mainController = require("../controllers/MainController");


router.get("/", mainController.index);

router.get("/cart", mainController.productCart);

router.get("/login", mainController.login);

router.get("/registro", mainController.register);



module.exports = router;
