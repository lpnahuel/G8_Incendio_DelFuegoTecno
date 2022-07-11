const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require('../database/models/index.js');

const userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;

    console.log("????????????????????");
    console.log("req.session.userLogged");
    console.log(req.session.userLoggedEmail);
    // let cookieEmail = req.cookies.userEmail;
    
    // let userProfile = usersDB.find(user => user.email === cookieEmail);

    db.User.findOne({
        where : {
            email : req.session.userLoggedEmail
        }
    })
    .then(userProfile =>{
        if(userProfile.email === req.cookies.userEmail){
            req.session.userLogged = userProfile;
        };
        
        if(req.session.userLogged){
            res.locals.isLogged = true;
        };
        res.locals.userLogged = req.session.userLogged;
    })
    .catch(err=>{
        console.log("Ocurrio un error: " + err);
    })

    next();
};

module.exports = userLoggedMiddleware;