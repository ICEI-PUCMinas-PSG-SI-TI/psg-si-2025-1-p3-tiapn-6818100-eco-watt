const db = require('../config/db');

exports.createDica = async (req, res) => {
  try {
    const { texto, eletrodomestico_id } = req.body;

    if (!texto || !eletrodomestico_id) {
      return res.status(400).json({ error: 'Texto e eletrodomestico_id são obrigatórios' });
    }

    const [result] = await db.query(
      'INSERT INTO Dica (texto, eletrodomestico_id) VALUES (?, ?)',
      [texto, eletrodomestico_id]
    );

    res.status(201).json({ message: 'Dica criada com sucesso', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar dica' });
  }
};

exports.getAllDicas = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Dica');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dicas' });
  }
};

exports.getDicaById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Dica WHERE Id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Dica não encontrada' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dica' });
  }
};

exports.updateDica = async (req, res) => {
  try {
    const { texto } = req.body;
    const [result] = await db.query('UPDATE Dica SET texto = ? WHERE Id = ?', [texto, req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Dica não encontrada' });
    res.json({ message: 'Dica atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar dica' });
  }
};

exports.deleteDica = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM Dica WHERE Id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Dica não encontrada' });
    res.json({ message: 'Dica deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar dica' });
  }
};