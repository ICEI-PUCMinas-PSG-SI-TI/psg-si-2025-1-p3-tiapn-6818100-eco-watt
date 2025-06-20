const express = require('express');
const router = express.Router();
const usuarioEletrodomesticoController = require('../controllers/usuarioEletrodomesticoController');

router.get('/', usuarioEletrodomesticoController.getRelacionamentos);
router.post('/', usuarioEletrodomesticoController.createRelacionamento);
router.delete('/:id', usuarioEletrodomesticoController.removeRelacionamento);

module.exports = router;
