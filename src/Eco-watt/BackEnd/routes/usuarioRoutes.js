const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../services/auth');

// Rotas públicas
router.post('/register', usuarioController.createUsuario);
router.post('/login', usuarioController.login);

// Rotas protegidas
router.get('/', auth.authMiddleware, usuarioController.getAllUsuarios);
router.get('/:email', auth.authMiddleware, usuarioController.getUsuarioByEmail);
router.put('/:email', auth.authMiddleware, usuarioController.updateUsuario);
router.delete('/:email', auth.authMiddleware, usuarioController.deleteUsuario);

module.exports = router;