const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
   destination: (req, file, cb)=>{
       cb(null, path.join(__dirname + '/../../public/img/users'));
   },
   
   filename: (req, file, cb)=>{
       cb(null, 'user-'+ file.fieldname +  Date.now() + path.extname(file.originalname)); 
       }
});

const upload = multer({ storage: storage });

module.exports = upload;