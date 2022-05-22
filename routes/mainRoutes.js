// ************ Require's ************/
const express = require("express");
const router = express.Router();
const mainController = require("../controllers/MainController");
const productsRoutes = require("./products")
const usersRoutes = require("./users")


/*** Home */
router.get("/", mainController.index);

/*** Cart */
router.get("/cart", mainController.productCart);

/*** Contact */
router.get("/contacto", mainController.contact);

/*** Products Router */
router.use("/products", productsRoutes);

/*** Users Router */
router.use("/users", usersRoutes);

module.exports = router;