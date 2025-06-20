INSERT INTO Dica (texto, imagem,Eletrodomestico_id) VALUES
('Descongele sua geladeira periodicamente.', NULL, 1),
('Use 24°C no ar-condicionado.', NULL, 2),
('Lave em dias alternados.', NULL, 3),
('Use panela com tampa.', NULL, 4),
('Evite usar micro-ondas para ferver água.', NULL, 5),
('Ventiladores são mais econômicos.', NULL, 6),
('Desligue a TV à noite.', NULL, 7),
('Use roupas quentes antes do aquecedor.', NULL, 8),
('Aproveite o sol para secar roupas.', NULL, 9),
('Lave louças em carga máxima.', NULL, 10);

-- Inserts para a tabela Avaliacao
INSERT INTO Avaliacao (nota, comentario, dica_id, usuario_email) VALUES
(5.0, 'Perfeito!', 1, 'bob@example.com'),
(4.8, 'Excelente explicação', 2, 'carla@example.com'),
(4.5, 'Muito útil', 3, 'daniel@example.com'),
(4.2, 'Gostei muito', 4, 'eva@example.com'),
(4.0, 'Prático e direto', 5, 'felipe@example.com'),
(3.8, 'Faltou imagem', 6, 'giovanna@example.com'),
(5.0, 'Nota 10!', 7, 'heitor@example.com'),
(4.7, 'Completo e claro', 8, 'isabela@example.com'),
(4.9, 'Bem escrito', 9, 'joao@example.com'),
(4.3, NULL, 10, 'alice@example.com');

-- Inserts para a tabela Dica

-- Geladeira Frost Free (post_id = 1)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite abrir a porta com frequência.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não coloque alimentos quentes na geladeira.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Verifique a borracha da porta.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Deixe espaço ao redor para ventilação.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe mensalmente com bicarbonato.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não encoste na parede.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Ajuste a temperatura conforme o clima.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não bloqueie saídas de ar internas.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Sempre feche bem a porta.', NULL, 1);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Aproveite o degelo automático mantendo a porta fechada.', NULL, 1);

-- Ar Condicionado 9000 BTUs (post_id = 2)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use o modo econômico.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Feche portas e janelas durante o uso.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe os filtros quinzenalmente.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Instale em local sombreado.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use com ventilador para espalhar o ar.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Programe o timer.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Faça manutenção anual.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite temperaturas muito baixas.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não ligue e desligue seguidamente.', NULL, 2);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Feche persianas contra o sol.', NULL, 2);

-- Máquina de Lavar 12kg (post_id = 3)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Lave com carga completa.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use sabão na medida.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Prefira ciclos curtos.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe o filtro de fiapos.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não sobrecarregue.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use água fria quando possível.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite poucas peças.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Retire roupas após a lavagem.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use pouco amaciante.', NULL, 3);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe com vinagre mensalmente.', NULL, 3);

-- Micro-ondas 30L (post_id = 4)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use recipientes próprios.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Cubra alimentos para evitar sujeira.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite aquecer líquidos por muito tempo.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe com pano úmido e limão.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Nunca coloque metal dentro.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use a função descongelar.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Ajuste bem os tempos.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não ligue vazio.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Feche bem a porta.', NULL, 4);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Cheque o prato giratório.', NULL, 4);

-- Fogão 4 bocas (post_id = 5)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Mantenha queimadores limpos.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use panelas adequadas ao tamanho da boca.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Tampe as panelas.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite fogo alto sem necessidade.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Verifique vazamentos.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use o forno corretamente.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Cozinhe porções maiores.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite abrir o forno em uso.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Mantenha boa ventilação.', NULL, 5);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Prefira acendedores elétricos.', NULL, 5);

-- Lava-louças compacta (post_id = 6)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Enxágue restos de comida antes.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use sabão específico.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Lave com carga cheia.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe o filtro semanalmente.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use ciclos econômicos.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não empilhe pratos.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite panelas grandes.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Retire utensílios após lavagem.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use vinagre para odores.', NULL, 6);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Faça manutenção semestral.', NULL, 6);

-- Aquecedor elétrico (post_id = 7)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use em locais isolados.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Nunca cubra o aquecedor.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não deixe sem supervisão.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use o modo eco.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Desligue ao sair.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não seque roupas sobre ele.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Mantenha longe de tecidos.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Prefira modelos com termostato.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use por curtos períodos.', NULL, 7);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Verifique a voltagem certa.', NULL, 7);

-- Ventilador de teto (post_id = 8)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use velocidade mínima à noite.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe as pás a cada 15 dias.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Desligue ao sair do ambiente.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use com janelas abertas.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Combine com ar-condicionado.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Ajuste a rotação correta.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Cheque a fixação no teto.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Lubrifique anualmente.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use timer à noite.', NULL, 8);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Desligue na tomada em tempestades.', NULL, 8);

-- TV LED 43" (post_id = 9)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Reduza o brilho.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Desligue da tomada se não usar.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use o modo eco.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Desative funções não utilizadas.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite deixar ligada à toa.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Programe desligamento automático.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite luz solar direta.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Atualize o sistema.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use filtro de linha.', NULL, 9);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Mantenha distância adequada.', NULL, 9);

-- Secadora 10kg (post_id = 10)
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Centrifugue bem antes de secar.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Limpe o filtro após cada uso.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Separe por tipo de tecido.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não sobrecarregue.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Use o modo eco.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Seque em lotes.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Evite metais ou plásticos.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Não use por longos períodos.', NULL, 10);
INSERT INTO Dica (texto, imagem, Eletrodomestico_id) VALUES ('Deixe a porta aberta após uso.', NULL, 10);
INSERT INTO Dica (texto, imagem, post_id) VALUES ('Faça manutenção regular.', NULL, 10);

