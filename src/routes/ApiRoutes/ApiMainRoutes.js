const express = require('express')
const router = express.Router()
const ApiProductsRoutes = require("./ApiProductsRoutes")
const ApiUsersRoutes = require("./ApiUsersRoutes")


//** ROUTES PRODUCTO **//
router.use("/products", ApiProductsRoutes)

//** ROUTES USUARIOS **//
router.use("/users", ApiUsersRoutes)

module.exports = router;