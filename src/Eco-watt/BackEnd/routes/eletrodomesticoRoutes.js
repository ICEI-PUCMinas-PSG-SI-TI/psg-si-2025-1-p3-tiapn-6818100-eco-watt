const express = require('express');
const router = express.Router();
const eletrodomesticoController = require('../controllers/eletrodomesticoController');

router.get('/', eletrodomesticoController.getAllEletrodomesticos);
router.get('/:id', eletrodomesticoController.getEletrodomesticoById);
router.post('/', eletrodomesticoController.createEletrodomestico);
router.put('/:id', eletrodomesticoController.updateEletrodomestico);
router.delete('/:id', eletrodomesticoController.deleteEletrodomestico);

module.exports = router;
