const db = require('../config/db');

// Criar avaliação
// POST /avaliacoes - cria avaliação para uma dica
exports.criarAvaliacao = async (req, res) => {
  try {
    const { nota, comentario, dica_id, usuario_email } = req.body;

    if (!nota || !dica_id || !usuario_email) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const [existe] = await db.query(
      'SELECT Id FROM Avaliacao WHERE usuario_email = ? AND dica_id = ?',
      [usuario_email, dica_id]
    );

    if (existe.length > 0) {
      return res.status(400).json({ error: 'Você já avaliou esta dica' });
    }

    await db.query(
      'INSERT INTO Avaliacao (nota, comentario, dica_id, usuario_email) VALUES (?, ?, ?, ?)',
      [nota, comentario || '', dica_id, usuario_email]
    );

    res.status(201).json({ message: 'Avaliação registrada com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao registrar avaliação' });
  }
};

// GET /avaliacoes/dica/:id - retorna média e nota do usuário para a dica
exports.getAvaliacaoPorDica = async (req, res) => {
  const dicaId = parseInt(req.params.id);
  const usuario_email = req.usuario?.email;

  if (!dicaId) {
    return res.status(400).json({ error: 'ID da dica inválido' });
  }

  try {
    const [mediaResult] = await db.query(
      'SELECT AVG(nota) AS media FROM Avaliacao WHERE dica_id = ?',
      [dicaId]
    );

    let notaDoUsuario = null;
    if (usuario_email) {
      const [userResult] = await db.query(
        'SELECT nota FROM Avaliacao WHERE usuario_email = ? AND dica_id = ? LIMIT 1',
        [usuario_email, dicaId]
      );
      if (userResult.length > 0) {
        notaDoUsuario = userResult[0].nota;
      }
    }

    res.json({
      media: mediaResult[0].media,
      notaDoUsuario
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar avaliações' });
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
