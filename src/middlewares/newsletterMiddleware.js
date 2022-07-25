const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');
const {check} = require('express-validator');


const newsletterMiddleware = (req, res, next)=> {

    fs.appendFileSync(path.join(__dirname, '../logs/userNewsletter.txt'), req.body.newsletter + '\n');

    check('newsletter').notEmpty().bail()
    .isEmail().normalizeEmail();

    next();

}

module.exports = newsletterMiddleware;