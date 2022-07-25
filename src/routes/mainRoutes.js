// ************ Require's ************/
const express = require("express");
const router = express.Router();
const mainController = require("../controllers/MainController");
const productsRoutes = require("./products")
const usersRoutes = require("./users")
const newsletterMiddleware = require('../middlewares/newsletterMiddleware');

/*** Home */
router.get("/", mainController.index);
router.post("/", newsletterMiddleware, mainController.index);

/*** Cart */
router.get("/cart", mainController.productCart);

/*** Contact */
router.get("/contacto", mainController.contact);
router.post("/contacto", mainController.saveContact);

/*** Products Router */
router.use("/products", productsRoutes);

/*** Users Router */
router.use("/users", usersRoutes);

module.exports = router;