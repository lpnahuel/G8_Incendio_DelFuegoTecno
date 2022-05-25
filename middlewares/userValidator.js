const {check} = require('express-validator');

const userValidator = [
    check('firstName', '*Este campo es obligatorio').notEmpty(),
    check('lastName', '*Este campo es obligatorio').notEmpty(),
    check('birth', '*Este campo es obligatorio').notEmpty(),
    check('phone', '*Este campo es obligatorio').notEmpty(),
    check('cp', '*Este campo es obligatorio').notEmpty(),
    check('city', '*Este campo es obligatorio').notEmpty(),
    check('email', '*Este campo es obligatorio').notEmpty().bail()
        .isEmail().withMessage('Debes escribir un e-mail válido').normalizeEmail(),
    check('password', '*Este campo es obligatorio').notEmpty().bail()
        .isLength({min : 6}).withMessage('La contraseña debe tener más de 6 caracteres'),
];

module.exports = userValidator;