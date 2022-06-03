const {check} = require('express-validator');
const path = require('path');

const userValidator = [
    check('firstName', '*Este campo es obligatorio').notEmpty(),
    check('lastName', '*Este campo es obligatorio').notEmpty(),
    check('birth', '*Este campo es obligatorio').notEmpty(),
    check('phone', '*Este campo es obligatorio').notEmpty(),
    check('cp', '*Este campo es obligatorio').notEmpty()
        .isInt().withMessage('El código postal debe ser un número entero').bail()
        .isLength({min : 4, max : 4}).withMessage('El código postal debe tener 4 dígitos'),
    check('city', '*Este campo es obligatorio').notEmpty(),
    check('email', '*Este campo es obligatorio').notEmpty().bail()
        .isEmail().withMessage('Debes escribir un e-mail válido').normalizeEmail(),
    check('password', '*Este campo es obligatorio').notEmpty().bail()
        .isLength({min : 8}).withMessage('La contraseña debe tener más de 8 caracteres'),
    // check('image').custom((value, {req}) => {
        // let file = req.file;
        // let acceptedExtensions = ['.png', '.jpg', '.webp'];
        // if(file){
        //     let fileExtension = path.extname(file.originalname);
        //     if(!acceptedExtensions.includes(fileExtension)){
        //         throw new Error (`El archivo ${file.originalname} no es una imagen válida,
        //         los archivos aceptados son ${acceptedExtensions.join(', ')}`);
        //     };
        // }else{
        //     file = 'user-default.png';
        // }

        // console.log(file);
        //por qué me dice invalid value? :'(

    // }),
];

module.exports = userValidator;