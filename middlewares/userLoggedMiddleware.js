const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;

    let cookieEmail = req.cookies.userEmail;
    
    let userProfile = usersDB.find(user => user.email === cookieEmail);
    
    if(userProfile){
        req.session.userLogged = userProfile;
    };


    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    };


    next();
};

module.exports = userLoggedMiddleware;