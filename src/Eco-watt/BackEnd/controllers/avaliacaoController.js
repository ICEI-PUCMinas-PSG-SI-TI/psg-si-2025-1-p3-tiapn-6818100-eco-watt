const db = require('../config/db');

// Criar avaliação
exports.createAvaliacao = async (req, res) => {
  try {
    const { nota, comentario, post_id, usuario_email } = req.body;

    if (!nota || !post_id || !usuario_email) {
      return res.status(400).json({ error: 'Nota, post_id e usuario_email são obrigatórios' });
    }

    const [result] = await db.query(
      'INSERT INTO Avaliacao (nota, comentario, post_id, usuario_email) VALUES (?, ?, ?, ?)',
      [nota, comentario, post_id, usuario_email]
    );

    res.status(201).json({ message: 'Avaliação criada com sucesso', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar avaliação' });
  }
};

// Listar todas as avaliações
exports.getAllAvaliacoes = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Avaliacao');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar avaliações' });
  }
};

// Obter avaliação por ID
exports.getAvaliacaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM Avaliacao WHERE Id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Avaliação não encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar avaliação' });
  }
};

// Atualizar avaliação
exports.updateAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { nota, comentario } = req.body;

    if (!nota && !comentario) {
      return res.status(400).json({ error: 'Nada para atualizar' });
    }

    const campos = [];
    const valores = [];

    if (nota) {
      campos.push('nota = ?');
      valores.push(nota);
    }

    if (comentario) {
      campos.push('comentario = ?');
      valores.push(comentario);
    }

    valores.push(id);

    const [result] = await db.query(`UPDATE Avaliacao SET ${campos.join(', ')} WHERE Id = ?`, valores);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Avaliação não encontrada' });
    }

    res.json({ message: 'Avaliação atualizada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar avaliação' });
  }
};

// Deletar avaliação
exports.deleteAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM Avaliacao WHERE Id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Avaliação não encontrada' });
    }

    res.json({ message: 'Avaliação deletada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar avaliação' });
  }
};
