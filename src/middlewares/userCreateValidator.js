const { check } = require('express-validator');

const userCreateValidator = [
    check('password', '*Este campo es obligatorio').notEmpty().bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener más de 8 caracteres'),
    check('passwordRepeat').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas ingresadas no coinciden');
        }
        return true;
    })
];

module.exports = userCreateValidator;