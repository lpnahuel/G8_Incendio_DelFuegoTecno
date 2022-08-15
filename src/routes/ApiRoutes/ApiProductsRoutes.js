const express = require('express');
const router = express.Router();
const ApiProductsController = require("../../controllers/apiControllers/ApiProductsController")

/* LISTA PRODUCTOS. */
router.get('/', ApiProductsController.list)

//PRODUCTO DETALLADO//
router.get("/detail/:id",ApiProductsController.detail)






module.exports = router;