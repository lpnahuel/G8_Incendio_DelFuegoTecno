const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    };

    //acá debería leer la cookie pero todo es caos y confusión
    // let cookieEmail = req.cookies.userEmail;
    // console.log(cookieEmail)


    next();
};

module.exports = userLoggedMiddleware;