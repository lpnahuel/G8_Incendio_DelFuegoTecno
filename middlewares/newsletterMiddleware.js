const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');

const newsletterMiddleware = (req, res, next)=> {
    console.log(req.body.newsletter);
    fs.appendFileSync(path.join(__dirname, '../logs/userNewsletter.txt'), req.body.newsletter + '\n');
    next();
}

module.exports = newsletterMiddleware;