CREATE VIEW vw_resumo_sistema AS
SELECT 
  (SELECT COUNT(*) FROM Usuario) AS total_usuarios,
  (SELECT COUNT(*) FROM Post) AS total_posts,
  (SELECT COUNT(*) FROM Comentario) AS total_comentarios,
  (SELECT COUNT(*) FROM Avaliacao) AS total_avaliacoes,
  (SELECT AVG(nota) FROM Avaliacao) AS media_avaliacoes
;


-- Calcula métricas de interação para cada publicação
CREATE VIEW vw_engajamento_por_post AS 
SELECT 
  p.Id,
  p.titulo,
  -- Contagem de comentários por post
  COUNT(DISTINCT c.Id) AS total_comentarios,
  -- Contagem de avaliações por post
  COUNT(DISTINCT a.Id) AS total_avaliacoes,
  -- Média de notas (0 se não tiver avaliações)
  COALESCE(AVG(a.nota), 0) AS media_notas
FROM Post p
LEFT JOIN Comentario c ON p.Id = c.post_id
LEFT JOIN Avaliacao a ON p.Id = a.post_id
GROUP BY p.Id, p.titulo
;


-- Identifica os aparelhos mais comuns entre usuários
CREATE VIEW vw_eletrodomesticos_populares AS
SELECT 
  e.nome AS eletrodomestico,
  -- Soma da quantidade possuída por todos usuários
  SUM(ue.quantidade) AS total_possuido
FROM UsuarioEletrodomestico ue
JOIN Eletrodomestico e ON ue.eletrodomestico_id = e.Id
GROUP BY e.nome
ORDER BY total_possuido DESC
;


-- Uma única consulta com todos os principais indicadores
SELECT 
  (SELECT total_usuarios FROM vw_resumo_sistema) AS usuarios,
  (select Comentario from vw_engajamento_por_post ) as engamento,
  (SELECT total_posts FROM vw_resumo_sistema) AS posts,
  (SELECT total_comentarios FROM vw_resumo_sistema) AS comentarios,
  (SELECT media_avaliacoes FROM vw_resumo_sistema) AS avaliacao_media,
  (SELECT eletrodomestico FROM vw_eletrodomesticos_populares LIMIT 1) AS eletro_top
;

-- Identifica usuários que mais contribuem
CREATE VIEW vw_usuarios_ativos AS
SELECT 
  u.email,
  u.nome,
  COUNT(p.Id) AS total_posts,
  COUNT(c.Id) AS total_comentarios
FROM Usuario u
LEFT JOIN Post p ON u.email = p.usuario_email
LEFT JOIN Comentario c ON u.email = c.usuario_email
GROUP BY u.email, u.nome
HAVING total_posts > 0 OR total_comentarios > 0
;


-- Calcula porcentagem de usuários que publicam conteúdo
SELECT 
  (SELECT COUNT(*) FROM vw_usuarios_ativos) AS usuarios_ativos,
  (SELECT COUNT(*) FROM Usuario) AS total_usuarios,
  ROUND(
    (SELECT COUNT(*) FROM vw_usuarios_ativos) / 
    (SELECT COUNT(*) FROM Usuario) * 100, 
  2
  ) AS taxa_ativacao
;