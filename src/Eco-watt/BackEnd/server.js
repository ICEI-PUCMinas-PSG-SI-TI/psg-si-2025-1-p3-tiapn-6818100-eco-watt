require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db');

// Middlewares corrigidos
app.use(cors());
app.use(express.json());  // Corrige parsing de JSON

// Teste de conexão com o banco
db.query('SELECT 1 + 1 AS solution')
  .then(([results]) => {
    console.log(`✅ Teste de banco bem-sucedido. Resultado: ${results[0].solution}`);
  })
  .catch(err => {
    console.error('❌ Erro no banco de dados:', err);
  });

// Middleware de log
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rotas
app.use('/usuarios', require('./routes/usuarioRoutes'));
app.use('/posts', require('./routes/postRoutes'));
app.use('/comentarios', require('./routes/comentarioRoutes'));
app.use('/avaliacoes', require('./routes/avaliacaoRoutes'));
app.use('/eletrodomesticos', require('./routes/eletrodomesticoRoutes'));
app.use('/usuario-eletrodomesticos', require('./routes/usuarioEletrodomesticoRoutes'));
app.use('/dicas', require('./routes/dicaRoutes'));

// Rota básica de teste CORRIGIDA
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('API EcoTroca está funcionando! 🚀');
});

// Rota de teste do banco
app.get('/test-db', async (req, res) => {
  try {
    const [results] = await db.query('SELECT CURRENT_TIMESTAMP AS time');
    res.json({
      status: 'success',
      database_time: results[0].time
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Erro interno do servidor',
    message: err.message
  });
});

// Configuração da porta
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando em http://localhost:${PORT}`);
  console.log(`⚡️ Conectando ao MySQL em ${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 3306}`);
});

// Tratamento de erros do servidor
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Porta ${PORT} já está em uso!`);
    console.log('Soluções:');
    console.log('1. Mude a porta no arquivo .env');
    console.log('2. Execute: kill -9 $(lsof -t -i:3000)');
  } else {
    console.error('Erro no servidor:', error);
  }
});