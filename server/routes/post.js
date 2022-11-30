const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config')

//Routage
router.post('/', auth, multer, postCtrl.createPost)
router.put('/:id', auth, multer, postCtrl.updatePost)
router.delete('/:id', auth, postCtrl.deletePost)
router.get('/', auth, postCtrl.getPost)
router.post('/:id/like', auth, postCtrl.likePost)

module.exports = router; 