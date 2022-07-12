const db = require('../database/models/index.js');

const userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;

    let cookieEmail = req.cookies.userEmail;

    let userLogged = req.session.userLogged;

    if(cookieEmail){
        db.User.findOne({
            where :{
                email : cookieEmail
            }
        })
        .then(userProfile=>{
            return userLogged = userProfile;
        })
        .catch(err =>{
            console.log('OCURRIÓ UN ERROR EN USER LOGGED: '+err )
        })
    };

    if(userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = userLogged;
    };
    
    next();

};

module.exports = userLoggedMiddleware;