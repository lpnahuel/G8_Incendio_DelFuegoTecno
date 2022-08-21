const express = require('express');
const router = express.Router();
const ApiUsersController = require("../../controllers/apiControllers/ApiUsersController")


//LISTADO USUARIO //
router.get('/list',ApiUsersController.list)

//DETALLE USUARIO//
router.get('/profile/:id',ApiUsersController.detail)

module.exports = router