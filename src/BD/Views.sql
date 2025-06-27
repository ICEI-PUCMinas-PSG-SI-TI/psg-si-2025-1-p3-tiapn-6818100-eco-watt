CREATE VIEW indicador_media_avaliacoes_por_dica AS
SELECT 
    ROUND(COUNT(*) / (SELECT COUNT(*) FROM Dica), 2) AS media_avaliacoes_por_dica
FROM Avaliacao;

CREATE VIEW indicador_top_avaliador AS
SELECT 
    U.nome AS usuario,
    COUNT(A.Id) AS total_avaliacoes
FROM Avaliacao A
INNER JOIN Usuario U ON A.usuario_email = U.email
GROUP BY U.nome
ORDER BY total_avaliacoes DESC
LIMIT 1;

CREATE VIEW indicador_top_dicas_por_eletro AS
SELECT 
    E.nome AS eletrodomestico,
    COUNT(D.Id) AS total_dicas
FROM Dica D
INNER JOIN Eletrodomestico E ON D.Eletrodomestico_id = E.Id
GROUP BY E.nome
ORDER BY total_dicas DESC
LIMIT 1;

CREATE VIEW indicador_nota_media_geral AS
SELECT ROUND(AVG(nota), 2) AS nota_media_geral FROM Avaliacao;

CREATE VIEW indicador_total_avaliacoes AS
SELECT COUNT(*) AS total_avaliacoes FROM Avaliacao;

CREATE VIEW indicador_total_dicas AS
SELECT COUNT(*) AS total_dicas FROM Dica;

CREATE VIEW indicador_total_eletrodomesticos AS
SELECT COUNT(*) AS total_eletrodomesticos FROM Eletrodomestico;
	
CREATE VIEW indicador_total_usuarios AS
SELECT COUNT(*) AS total_usuarios FROM Usuario;

SELECT * FROM indicador_media_avaliacoes_por_dica;
SELECT * FROM indicador_top_avaliador;
SELECT * FROM indicador_top_dicas_por_eletro;
SELECT * FROM indicador_total_eletrodomesticos;
SELECT * FROM indicador_total_dicas;
SELECT * FROM indicador_total_avaliacoes;
SELECT * FROM indicador_nota_media_geral;
SELECT * FROM indicador_total_usuarios;