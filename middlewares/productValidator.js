const {check} = require('express-validator');

const productValidator = [
    check('name', '*Este campo es obligatorio').notEmpty(),
    check('category', '*No se seleccionó una categoría').notEmpty(),
    check('price', '*Este campo es obligatorio').notEmpty(),
    check('stock', '*Este campo es obligatorio').notEmpty(),
    check('description', '*Este campo es obligatorio').notEmpty(),
    // check('image').custom((value, {req}) => {
    //     let files = req.files;
    //     if(!files){
    //         throw new Error ('Tienes que subir al menos una imagen')
    //     }
    // }),
    check('thumb').custom((value, {req}) => {
        let file = req.file;
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        }
    })
];
module.exports = productValidator;