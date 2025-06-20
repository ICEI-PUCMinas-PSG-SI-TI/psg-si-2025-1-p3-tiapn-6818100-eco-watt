const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

router.get('/', comentarioController.getAllComentarios);
router.get('/:id', comentarioController.getComentarioById);
router.post('/', comentarioController.createComentario);
router.put('/:id', comentarioController.updateComentario);
router.delete('/:id', comentarioController.deleteComentario);
router.get('/post/:postId', comentarioController.getComentariosByPostId);

module.exports = router;
