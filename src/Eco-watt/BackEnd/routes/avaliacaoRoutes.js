const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.get('/', avaliacaoController.getAllAvaliacoes);
router.get('/:id', avaliacaoController.getAvaliacaoById);
router.post('/', avaliacaoController.createAvaliacao);
router.put('/:id', avaliacaoController.updateAvaliacao);
router.delete('/:id', avaliacaoController.deleteAvaliacao);

module.exports = router;
