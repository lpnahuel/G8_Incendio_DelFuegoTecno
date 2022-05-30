// ************ Require's ************
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

// ************ Path's ************
const usersFilePath = path.join(__dirname, '../data/users.json');

const UsersController = {
    
    login:(req,res)=>{
        res.render('users/login');
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        //1. buscar al usuario por mail
        //2. chequear que la contraseña coincida con la que está guardada
        //3. primero leemos la base de datos
        //4. buscamos el mail que coincida con el ingresado en el body
        //5. una vez que encontramos el usuario, comparamos que la contraseña esté OK
    
        if (errors.isEmpty()){
            //lee todos los usuarios
            let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

            //acá encuentra el perfil que coincida con el mail ingresado por body
            let usuarioALoguearse = usersDB.find(user => user.email === req.body.email);

            // si encuentra un usuario, verifica la contraseña
            if (usuarioALoguearse){
                // acá compara la contraseña ingresada con la contraseña de la DB
                let check = bcrypt.compareSync(req.body.password, usuarioALoguearse.password);

                //si check es true, se loguea
                if(check){
                    res.redirect('/users/profile/' + usuarioALoguearse.id)
                }else{
                //si no encuentra al usuario tira un error, o no coinciden
                    res.render('users/login', { errors: [{msg: 'Credenciales Invalidas'}]});
                };

            } else {
                res.render('users/login', {errors : errors.errors});
            };

            //acá no estamos muy seguras qué pasa (preguntarle a dani)
            //req.session.usuarioLogueado = usuarioALoguearse;

            //acá le decimos que si está tildado "recordame" se hace una cookie ?
            //cómo hacemos para que se quede logueado??
            if (req.body.recordame != undefined) {
                res.cookie('recordame', usuarioALoguearse.email, { maxAge: 60000  })
            }
        
        } else {
            res.render('users/login', {errors : errors.errors});
        };
    },

    register:(req,res)=>{
        res.render('users/register');
    },

    processRegister:(req,res)=>{

        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let validationResults = validationResult(req);
        let errors = validationResults.mapped();

        if(validationResults.errors.length === 0){
            let lastUser = usersDB.length -1;
            let NewUserId = usersDB[lastUser].id +1;
            
            let image;
            (req.file) ? image = (req.file.filename) : image = '';

            let password = bcrypt.hashSync(req.body.password, 10);
            
            let newUser = {
                id: NewUserId,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                birth : req.body.birth,
                image : image,
                phone :  req.body.phone,
                address :  req.body.address,
                cp :  req.body.cp,
                city :  req.body.city,
                email :  req.body.email,
                password : password,
            }

            let newUserList;

            usersDB == '' ? newUserList = [] : newUserList = usersDB;

            newUserList.push(newUser);

            fs.writeFileSync(usersFilePath, JSON.stringify(newUserList, null, '\t'));

            res.redirect('/users/profile/' + newUser.id);

        }else{

            res.render('users/register', {errors : errors, oldData : req.body})
        }

    },

    profile : (req, res) =>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userProfile = usersDB.find(user => user.id === parseInt(req.params.id));

        res.render('users/profile', {userProfile : userProfile})

    },

    view : (req, res) =>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userProfile = usersDB.find(user => user.id === parseInt(req.params.id));

        res.render('users/user-edit', {userProfile : userProfile})

    },

    update:(req,res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        let userToEdit = usersDB.find(user => user.id === parseInt(req.params.id))

        console.log('req.body',req.body)
        console.log('req.file',req.file)
        let image;
        req.file == undefined ? image = userToEdit.image : image = req.file.filename;

        let editedUser = {
            id: parseInt(req.params.id),
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            birth : req.body.birth,
            image : image,
            phone :  req.body.phone,
            address :  req.body.address,
            cp :  req.body.cp,
            city :  req.body.city,
            email :  req.body.email,
            password :  req.body.password,
        }

        let userIndex = usersDB.indexOf(userToEdit);

        usersDB[userIndex] = editedUser;

        fs.writeFileSync(usersFilePath, JSON.stringify(usersDB, null, '\t'));

        res.redirect('/users/profile/' + userToEdit.id);
    },

    list : (req, res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        res.render('users/users-list', {usersDB : usersDB});

    },

    delete : (req, res)=>{
        let usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
         
        let newUserDataBase = usersDB.filter(item => item.id !== parseInt(req.params.id));

        fs.writeFileSync(usersFilePath, JSON.stringify(newUserDataBase,null,"\t"));

        res.redirect('/users/list');

    }


}






module.exports = UsersController;