Create database EcoWatch;
use EcoWatch;
-- Tabela Usuário
CREATE TABLE Usuario(
    email VARCHAR(255) PRIMARY KEY,
    senha VARCHAR(255) NOT NULL,       
    nome varchar(80) not null,
    foto_perfil BLOB                   
);

-- Tabela Post
CREATE TABLE Post (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,                   
    data DATE NOT NULL,
    hora TIME NOT NULL,
    imagem BLOB,                       
    usuario_email VARCHAR(255),
    FOREIGN KEY (usuario_email) REFERENCES Usuario(email)
);
CREATE TABLE Eletrodomestico (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    imagem BLOB,
    gasto_medio DOUBLE               
);

-- Tabela Comentário
CREATE TABLE Comentario (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    texto TEXT NOT NULL,
    imagem BLOB,
    usuario_email VARCHAR(255) null ,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES Post(Id),
    FOREIGN KEY (usuario_email) REFERENCES Usuario(email)
);
CREATE TABLE Dica (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    texto TEXT NOT NULL,
    imagem BLOB,
    Eletrodomestico_id INT NOT NULL,
    FOREIGN KEY (Eletrodomestico_id) REFERENCES Eletrodomestico(Id)
);
-- Tabela Avaliação (corrigida estrutura)
CREATE TABLE Avaliacao (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    nota DOUBLE NOT NULL,
    comentario TEXT,
    dica_id INT NOT NULL,
    usuario_email VARCHAR(255) NOT NULL,
    FOREIGN KEY (dica_id) REFERENCES Dica(Id),
    FOREIGN KEY (usuario_email) REFERENCES Usuario(email)
);


-- Tabela Eletrodoméstico (implícita na relação Temfletrodomestico)


-- Tabela de Relação Usuário-Eletrodoméstico (TemEletrodomestico)
CREATE TABLE UsuarioEletrodomestico (
    usuario_email VARCHAR(255) NOT NULL,
    eletrodomestico_id INT NOT NULL,
    quantidade INT NOT NULL,
    PRIMARY KEY (usuario_email, eletrodomestico_id),
    FOREIGN KEY (usuario_email) REFERENCES Usuario(email),
    FOREIGN KEY (eletrodomestico_id) REFERENCES Eletrodomestico(Id)
);

-- Tabela Dica




ALTER USER 'root'@'localhost' IDENTIFIED BY '0000';
GRANT ALL PRIVILEGES ON EcoWatch.* TO 'app_user'@'localhost';


select U.*
from Usuario U;

select D.*
from Dica D;

select E.*
from Eletrodomestico E;

select A.*
from Avaliacao A;

select P.*
from Post P;

select C.*
from Comentario C;


-- drop database EcoWatch;