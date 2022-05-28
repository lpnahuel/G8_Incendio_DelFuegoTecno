const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname + '/../public/img/products'));
    },
    
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
})

const upload = multer({storage : storage});

const multipleUpload = upload.fields([{name : 'image', maxCount: 4},{name : 'thumb', maxCount: 1}])

module.exports = multipleUpload;