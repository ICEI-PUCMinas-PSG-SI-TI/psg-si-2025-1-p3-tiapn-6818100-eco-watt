const bcrypt = require('bcrypt');
const db = require('../config/db');
const auth = require('../services/auth');

// Criar usuário
exports.createUsuario = async (req, res) => {
  try {
    const { email, senha, nome } = req.body;
    
    // Validação básica
    if (!email || !senha || !nome) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    
    const hashedPassword = await bcrypt.hash(senha, 10);
    
    const [result] = await db.query(
      'INSERT INTO Usuario (email, senha, nome) VALUES (?, ?, ?)',
      [email, hashedPassword, nome]
    );
    
    res.status(201).json({ 
      message: 'Usuário criado com sucesso',
      id: result.insertId 
    });
  } catch (error) {
    console.error(error);
    
    // Tratamento de erro para email duplicado
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email já está em uso' });
    }
    
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    
    // Validação básica
    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }
    
    const [users] = await db.query('SELECT * FROM Usuario WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    const user = users[0];
    const validPassword = await bcrypt.compare(senha, user.senha);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    const token = auth.generateToken({
      email: user.email,
      nome: user.nome
    });
    
res.json({ 
  token,
  user: {
    email: user.email,
    nome: user.nome
  }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no login' });
  }
};

// Listar todos usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const [users] = await db.query('SELECT email, nome FROM Usuario');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

// Obter usuário por email
exports.getUsuarioByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const [users] = await db.query('SELECT email, nome FROM Usuario WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    res.json(users[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

// Atualizar usuário
exports.updateUsuario = async (req, res) => {
  try {
    const { email } = req.params;
    const { nome, senha } = req.body;
    
    if (!nome && !senha) {
      return res.status(400).json({ error: 'Nenhum dado para atualizar' });
    }
    
    let updateFields = [];
    let params = [];
    
    if (nome) {
      updateFields.push('nome = ?');
      params.push(nome);
    }
    
    if (senha) {
      const hashedPassword = await bcrypt.hash(senha, 10);
      updateFields.push('senha = ?');
      params.push(hashedPassword);
    }
    
    params.push(email);
    
    const query = `UPDATE Usuario SET ${updateFields.join(', ')} WHERE email = ?`;
    const [result] = await db.query(query, params);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    res.json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

// Deletar usuário
exports.deleteUsuario = async (req, res) => {
  try {
    const { email } = req.params;
    const [result] = await db.query('DELETE FROM Usuario WHERE email = ?', [email]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};