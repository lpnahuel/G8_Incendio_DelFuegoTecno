const {check} = require('express-validator');

const productValidator = [
    check('name', '*Este campo es obligatorio').notEmpty(),
    check('category', '*No se seleccionó una categoría').notEmpty(),
    check('price', '*Este campo es obligatorio').notEmpty(),
    check('stock', '*Este campo es obligatorio').notEmpty(),
    check('description', '*Este campo es obligatorio').notEmpty()
         .isLength({max : 60}).withMessage('La descripción debe tener menos de 60 caracteres'),
    check('image').custom((value, {req}) => {
        let files = req.files.image;
        console.log('req.files.image');
        console.log('===============');
        console.log(req.files.image);
        if(!files){
            throw new Error ('Tienes que subir al menos una imagen')
        }
        return true
    }),
    check('thumb').custom((value, {req}) => {
        let file = req.files.thumb;
        console.log('req.files.thumb');
        console.log('===============');
        console.log(req.files.thumb);
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        }
        return true
    })
];
module.exports = productValidator;