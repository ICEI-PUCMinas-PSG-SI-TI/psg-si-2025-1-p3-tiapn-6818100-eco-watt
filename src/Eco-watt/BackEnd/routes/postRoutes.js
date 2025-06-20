const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', upload.single('imagem'), postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
