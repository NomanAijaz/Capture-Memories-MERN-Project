const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const upload  =  require('../middleware/uploadImage');

router.post('/api/registration', upload.single("selectedImage"),controller.registration);
router.get('/api/getUsers', controller.getUsers);
//router.post('/api/uploadFile', upload.single("selectedImage"));
router.get('/api/post', controller.getPost);
router.post('/api/create_post', controller.createPost);

module.exports = router;