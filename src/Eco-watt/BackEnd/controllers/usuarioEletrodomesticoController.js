const db = require('../config/db');

exports.createRelacionamento = async (req, res) => {
  try {
    const { usuario_email, eletrodomestico_id } = req.body;
    if (!usuario_email || !eletrodomestico_id) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }
    const [result] = await db.query(
      'INSERT INTO Usuario_Eletrodomestico (usuario_email, eletrodomestico_id) VALUES (?, ?)',
      [usuario_email, eletrodomestico_id]
    );
    res.status(201).json({ message: 'Relacionamento criado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar relacionamento' });
  }
};

exports.getRelacionamentos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Usuario_Eletrodomestico');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar relacionamentos' });
  }
};

 exports.removeRelacionamento  = async  (req, res) => {
  const { usuario_id, eletrodomestico_id } = req.body;

  try {
    const [result] = await db.query(
      'DELETE FROM usuario_eletrodomestico WHERE usuario_id = ? AND eletrodomestico_id = ?',
      [usuario_id, eletrodomestico_id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Relacionamento não encontrado' });
    }

    res.json({ message: 'Relacionamento removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}