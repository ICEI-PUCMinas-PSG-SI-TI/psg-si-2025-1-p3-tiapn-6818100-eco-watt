const db = require('../config/db');

// Criar comentário
exports.createComentario = async (req, res) => {
  try {
    const { texto, imagem, data, hora, post_id, usuario_email } = req.body;

    if (!texto || !data || !hora || !post_id) {
      return res.status(400).json({ error: 'Texto, data, hora e post_id são obrigatórios' });
    }

    const [result] = await db.query(
      'INSERT INTO Comentario (texto, imagem, data, hora, post_id, usuario_email) VALUES (?, ?, ?, ?, ?, ?)',
      [texto, imagem || null, data, hora, post_id, usuario_email || null]
    );

    res.status(201).json({ message: 'Comentário criado com sucesso', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar comentário' });
  }
};


// Listar todos os comentários
exports.getAllComentarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Comentario');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
};

// Obter comentário por ID
exports.getComentarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM Comentario WHERE Id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Comentário não encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar comentário' });
  }
};

// Atualizar comentário
exports.updateComentario = async (req, res) => {
  try {
    const { id } = req.params;
    const { texto, imagem } = req.body;

    if (!texto && !imagem) {
      return res.status(400).json({ error: 'Nada para atualizar' });
    }

    const campos = [];
    const valores = [];

    if (texto) {
      campos.push('texto = ?');
      valores.push(texto);
    }

    if (imagem) {
      campos.push('imagem = ?');
      valores.push(imagem);
    }

    valores.push(id);

    const [result] = await db.query(`UPDATE Comentario SET ${campos.join(', ')} WHERE Id = ?`, valores);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Comentário não encontrado' });
    }

    res.json({ message: 'Comentário atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar comentário' });
  }
};

// Deletar comentário
exports.deleteComentario = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM Comentario WHERE Id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Comentário não encontrado' });
    }

    res.json({ message: 'Comentário deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar comentário' });
  }
};
exports.getComentariosByPostId = async (req, res) => {
  const { postId } = req.params;

  try {
    const [comentarios] = await db.query(`
      SELECT C.*, U.nome
      FROM Comentario C
      LEFT JOIN Usuario U ON C.usuario_email = U.email
      WHERE C.post_id = ?
      ORDER BY C.data DESC, C.hora DESC
    `, [postId]);

    res.json(comentarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
};

