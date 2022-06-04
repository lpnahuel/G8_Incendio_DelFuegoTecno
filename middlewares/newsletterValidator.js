const {check} = require('express-validator');

const newsletterValidator = (req, res, next) => [
    check('newsletter').notEmpty().bail()
        .isEmail().normalizeEmail(),
];

module.exports = newsletterValidator;