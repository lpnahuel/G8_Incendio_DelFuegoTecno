const {check} = require('express-validator');

const productValidator = [
    check('name', '*Este campo es obligatorio').notEmpty()
    .isLength({min : 5, max : 100}).withMessage('El nombre debe tener entre 5 y 100 caracteres'),
    check('category', '*No se seleccionó una categoría').notEmpty(),
    check('price', '*Este campo es obligatorio').notEmpty()
        .isInt().withMessage('El precio debe ser un número').bail()
        .isLength({min : 1}).withMessage('El precio debe tener mínimo 1 dígito'),
    check('stock', '*Este campo es obligatorio').notEmpty().bail()
        .isInt().withMessage('El stock debe ser un número entero')
        .isLength({min : 1}).withMessage('El stock debe tener mínimo 1 dígito, así sea 0'),
    check('description', '*Este campo es obligatorio').notEmpty()
         .isLength({min: 20, max : 1000}).withMessage('La descripción puede tener hasta 1000 caracteres'),
    check('specs').isLength({max : 1000}).withMessage('Las especificaciones pueden tener hasta 1000 caracteres'),
];
module.exports = productValidator;