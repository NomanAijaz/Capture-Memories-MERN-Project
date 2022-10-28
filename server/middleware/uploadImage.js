const multer = require('multer');
console.log("I came here 3");
const UploadImage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, 'public/images');
    },
    filename:(req, file, callback)=>{
       callback(null, `${Date.now()}-${file.originalname}`);        
    }
})

const upload = multer({
    storage: UploadImage,
})
module.exports = upload;
