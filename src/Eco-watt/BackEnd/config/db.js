const mysql = require('mysql2');
require('dotenv').config();

// Configuração da pool de conexões
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306, // Porta do MySQL
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Teste de conexão ao ser carregado
pool.getConnection((err, conn) => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err.message);
    console.log('Verifique:');
    console.log('- Serviço MySQL está rodando?');
    console.log('- Credenciais no .env estão corretas?');
    console.log('- Usuário tem permissões?');
  } else {
    console.log('✅ Conectado ao MySQL na porta', process.env.DB_PORT || 3306);
    conn.release();
  }
});

// Exporta a interface de promises
module.exports = pool.promise();