// controllers/postController.js
const db = require('../config/db');

async function getAllPosts(req, res) {
  try {
    const [posts] = await db.query('SELECT * FROM post');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPostById(req, res) {
  const { id } = req.params;
  try {
    const [posts] = await db.query('SELECT * FROM post WHERE id = ?', [id]);
    if (posts.length === 0) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }
    res.json(posts[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createPost(req, res) {
  const { titulo, conteudo, usuario_id } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO post (titulo, conteudo, usuario_id) VALUES (?, ?, ?)',
      [titulo, conteudo, usuario_id]
    );
    res.status(201).json({ id: result.insertId, titulo, conteudo, usuario_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function createPost(req, res) {
  try {
    const { titulo, descricao, usuario_email } = req.body;
    const imagem = req.file ? req.file.buffer : null;

    if (!titulo || !descricao || !usuario_email) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const data = new Date();
    const dataFormatada = data.toISOString().slice(0, 10);
    const horaFormatada = data.toTimeString().slice(0, 8);

    await db.query(
      'INSERT INTO Post (titulo, descricao, data, hora, imagem, usuario_email) VALUES (?, ?, ?, ?, ?, ?)',
      [titulo, descricao, dataFormatada, horaFormatada, imagem, usuario_email]
    );

    res.status(201).json({ mensagem: 'Post criado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar post' });
  }
};

async function updatePost(req, res) {
  const { id } = req.params;
  const { titulo, conteudo } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE post SET titulo = ?, conteudo = ? WHERE id = ?',
      [titulo, conteudo, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }
    res.json({ message: 'Post atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePost(req, res) {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM post WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }
    res.json({ message: 'Post deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
