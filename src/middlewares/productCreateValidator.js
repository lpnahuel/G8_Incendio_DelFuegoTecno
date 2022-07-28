const {check} = require('express-validator');
const path = require('path');

const acceptedExtensions = ['.png', '.jpg', '.webp'];

const productCreateValidator = [
    check('image').custom((value, {req}) => {
        let files = req.files.image;
        if(!files){
            throw new Error ('Tienes que subir al menos una imagen')
        }else if(files.length > 4){
            throw new Error ('Puedes subir hasta 4 imágenes')
        }else if(files){
            files.forEach(image => {
                if(!acceptedExtensions.includes(path.extname(image.originalname))){
                    throw new Error (`El archivo ${image.originalname} no es una imagen válida,
                    los archivos aceptados son ${acceptedExtensions.join(', ')}`);                }
            })
        }
        return true
    }),
    check('thumb').custom((value, {req}) => {
        let file = req.files.thumb;
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        }else if(file.length > 1){
            throw new Error ('Puedes subir sólo 1 imagen')
        }else if(file){
            file.forEach(thumb => {
                if(!acceptedExtensions.includes(path.extname(thumb.originalname))){
                    throw new Error (`El archivo ${thumb.originalname} no es una imagen válida,
                    los archivos aceptados son ${acceptedExtensions.join(', ')}`);                }
            })
        }
        
        return true
    })
]

module.exports = productCreateValidator;