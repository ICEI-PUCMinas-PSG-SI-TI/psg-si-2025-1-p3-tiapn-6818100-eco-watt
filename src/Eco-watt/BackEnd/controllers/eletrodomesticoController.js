const db = require('../config/db');

exports.createEletrodomestico = async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    if (!nome || !categoria) return res.status(400).json({ error: 'Nome e categoria são obrigatórios' });
    const [result] = await db.query(
      'INSERT INTO Eletrodomestico (nome, categoria) VALUES (?, ?)',
      [nome, categoria]
    );
    res.status(201).json({ message: 'Eletrodoméstico criado com sucesso', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar eletrodoméstico' });
  }
};

exports.getAllEletrodomesticos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Eletrodomestico');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eletrodomésticos' });
  }
};

exports.getEletrodomesticoById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Eletrodomestico WHERE Id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Eletrodoméstico não encontrado' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eletrodoméstico' });
  }
};

exports.updateEletrodomestico = async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    const [result] = await db.query(
      'UPDATE Eletrodomestico SET nome = ?, categoria = ? WHERE Id = ?',
      [nome, categoria, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Eletrodoméstico não encontrado' });
    res.json({ message: 'Atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar eletrodoméstico' });
  }
};

exports.deleteEletrodomestico = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM Eletrodomestico WHERE Id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Não encontrado' });
    res.json({ message: 'Removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover' });
  }
};