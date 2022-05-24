const {check} = require('express-validator');

const userValidator = [
    check('firstName', '*Este campo es obligatorio').notEmpty(),
    check('lastName', '*Este campo es obligatorio').notEmpty(),
    check('birth', '*Este campo es obligatorio').notEmpty(),
    check('phone', '*Este campo es obligatorio').notEmpty(),
    check('cp', '*Este campo es obligatorio').notEmpty(),
    check('city', '*Este campo es obligatorio').notEmpty(),
    check('email', '*Este campo es obligatorio').notEmpty().isEmail('Debes ingresar un mail válido'),
    check('password', '*Este campo es obligatorio').notEmpty(),
];
module.exports = userValidator;