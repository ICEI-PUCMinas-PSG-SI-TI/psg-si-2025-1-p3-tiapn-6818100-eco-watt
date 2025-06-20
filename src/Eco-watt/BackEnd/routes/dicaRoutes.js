const express = require('express');
const router = express.Router();
const dicaController = require('../controllers/dicaController');

router.get('/', dicaController.getAllDicas);
router.get('/:id', dicaController.getDicaById);
router.get('/eletrodomestico/:id', dicaController.getDicasPorEletrodomestico);
router.put('/:id', dicaController.updateDica);
router.delete('/:id', dicaController.deleteDica);

module.exports = router;