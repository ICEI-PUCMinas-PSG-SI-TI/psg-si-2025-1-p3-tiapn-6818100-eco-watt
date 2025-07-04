## 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da solução


A arquitetura da solução foi pensada para ser simples, escalável e fácil de manter, utilizando tecnologias web amplamente adotadas.
O sistema é composto por:

• Frontend (cliente): desenvolvido com HTML, CSS e JavaScript (com opção de usar frameworks como React ou Vue.js), responsável por exibir as páginas da calculadora, dicas, fórum e perfil do usuário.

• Backend (servidor): API desenvolvida em Node.js (ou Python com Flask), hospedada no Heroku ou Render, que processa os cálculos de consumo, armazena dados do usuário e gerencia o fórum.

• Banco de Dados: MongoDB ou Firebase, para armazenar os registros dos cálculos, usuários, dicas e postagens do fórum.

• Armazenamento Local: o navegador pode utilizar LocalStorage para manter preferências ou dados temporários.

• APIs externas (futuro opcional): integração com APIs de energia elétrica para tarifa automática ou APIs de previsão do tempo para consumo inteligente


 ![image](https://github.com/user-attachments/assets/4c78289b-d9b8-4adc-a8a5-b0a24a251ede)


### 4.2. Protótipos de telas


![Screenshot_1](https://github.com/user-attachments/assets/2479e3cd-d354-4fae-bf52-472b0d7d45cf)
![Screenshot_2](https://github.com/user-attachments/assets/c60b4821-a2ae-443d-a74e-03537e1d4d8f)






## Diagrama de Classes
#### 4.3.1 Modelo ER



![Exemplo de um ER](images/ER.png "Exemplo de Modelo Relacional.")

#### 4.3.2 Esquema Relacional


![Exemplo de um modelo relacional](images/Relação.png "Exemplo de Modelo Relacional.")
---


#### 4.3.3 Modelo Físico


```
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

```

### 4.4. Tecnologias

_Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas._

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | MySQL           |
| Front end      | HTML+CSS+JS     |
| Back end       | NodeJs Express |
| Deploy         | Github Pages    |

