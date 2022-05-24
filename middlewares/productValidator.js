const {check} = require('express-validator');

const productValidator = [
    check('name', '*Este campo es obligatorio').notEmpty(),
    check('category', '*No se seleccionó una categoría').notEmpty(),
    check('price', '*Este campo es obligatorio').notEmpty(),
    check('stock', '*Este campo es obligatorio').notEmpty(),
    check('description', '*Este campo es obligatorio').notEmpty(),
];
module.exports = productValidator;