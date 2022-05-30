const fs = require('fs');

function recordameMiddleware(req, res, next) { 
    if (req.cookies.recordame != undefined 
        && req.session.usuarioLogueado == undefined) {
              //lee todos los usuarios
        let usersJSON = fs.readFileSync('users.json', {encoding: 'utf-8'});
            let users;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
            let usuarioALoguearse
            //va usuario por usuario y chequea
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.cookies.recordame) {
                        usuarioAloguearse = users[i];
                        break;
                    }
            }
            req.session.usuarioLogueado = usuarioALoguearse;
    }
    
    next();

};

module.exports = recordameMiddleware;