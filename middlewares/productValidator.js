const {check} = require('express-validator');

const productValidator = [
    check('name', 'Debes completar este campo')
        .notEmpty(),
        
];

module.exports = productValidator;