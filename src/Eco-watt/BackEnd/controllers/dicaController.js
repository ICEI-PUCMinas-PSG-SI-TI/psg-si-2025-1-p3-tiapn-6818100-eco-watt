const db = require('../config/db');

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
exports.getDicasPorEletrodomestico = async (req, res) => {
  const eletroId = parseInt(req.params.id);

  if (!eletroId) {
    return res.status(400).json({ error: 'ID do eletrodoméstico inválido' });
  }

  try {
    const [dicas] = await db.query(
      'SELECT Id, texto, imagem FROM Dica WHERE eletrodomestico_id = ?',
      [eletroId]
    );

    dicas.forEach(dica => {
      if (dica.imagem) {
        dica.imagem = dica.imagem.toString('base64');
      }
    });

    res.json(dicas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dicas' });
  }
};