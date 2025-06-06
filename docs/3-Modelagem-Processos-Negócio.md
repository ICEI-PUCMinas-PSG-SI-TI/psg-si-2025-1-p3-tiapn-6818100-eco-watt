# 3. Modelagem dos Processos de Negócio

Introdução

Com o crescimento das preocupações com eficiência energética e sustentabilidade, o uso de soluções digitais para monitoramento do consumo tornou-se uma prioridade. O sistema EcoWatt foi desenvolvido para oferecer aos usuários uma plataforma intuitiva e acessível que permite acompanhar o uso de energia, identificar eletrodomésticos mais eficientes, interagir com uma comunidade de dicas e registrar suas próprias experiências.

A proposta combina automação, usabilidade e inteligência de dados para transformar a relação dos usuários com o consumo de energia elétrica. O sistema oferece funcionalidades como calculadora de consumo, pesquisa e sugestão de eletrodomésticos, avaliação de recomendações, fórum colaborativo, e monitoramento com geração de alertas e histórico de uso.



| Processo                        | Entradas                                      | Saídas                                          |
|---------------------------------|-----------------------------------------------|-------------------------------------------------|
| Coleta de Dados                 | Leituras dos medidores inteligentes           | Dados armazenados no banco de dados             |
| Análise de Consumo              | Dados coletados                               | Padrões detectados, alertas gerados             |
| Notificação ao Usuário          | Alertas gerados                               | Mensagens enviadas (SMS, e-mail, app)           |
| Geração de Relatórios           | Comentários dos usuários no fórum             | Relatórios de interações (histórico de posts)   |
| Pesquisa de Eletrodomésticos    | Nome do eletrodoméstico informado pelo usuário| Sugestão sustentável exibida                    |
| Postagem no Fórum               | Conteúdo inserido pelo usuário                | Post armazenado e exibido no fórum              |


**Localização dos Processos**

- **No Servidor na Nuvem:** O sistema processa as pesquisas feitas pelos usuários e gerencia os dados do site.
- **No App/Site do Usuário:** O usuário realiza pesquisas de eletrodomésticos, recebe sugestões sustentáveis e interage no fórum.
- **No Painel do Administrador:** Equipes de suporte monitoram as interações dos usuários e mantêm a plataforma.

**Participantes do Processo**

- **Medidores Inteligentes:** Coletam e transmitem dados de consumo energético.
- **Sistema de Monitoramento:** Processa os dados coletados e identifica comportamentos de uso.
- **Usuários:** Acessam alertas, interagem no fórum e recebem sugestões sustentáveis ao pesquisar eletrodomésticos.
- **Equipe Técnica:** Realiza a manutenção do sistema e infraestrutura.
- **Administradores:** Supervisionam a plataforma e o uso do sistema pelos usuários.

**Produtos de Informação**

- **Alertas de Consumo Elevado:** Notificações enviadas quando padrões de uso incomuns são detectados.
- **Relatórios de Interação no Fórum:** Histórico de postagens feitas pelos usuários.
- **Sugestões Sustentáveis:** Dicas exibidas ao pesquisar eletrodomésticos, com foco na redução de consumo.

**Conexão com a Arquitetura do Software**

- **Usuários e Permissões:** Perfis diferenciados para morador, administrador e técnico.
- **Banco de Dados:** Estrutura otimizada para suportar os recursos atuais:

  - **Tabela Fórum:** (id, usuário_id, postagem, data)
  - **Tabela Dicas:** (id, eletrodomestico_nome, conteúdo)
  - **Tabela Usuários:** (id, nome, e-mail, tipo)
  - **Tabela Medidores:** (id, residência, status)
  - **Tabela Registros de Consumo:** (medidor_id, timestamp, consumo)
  - **Tabela Alertas:** (usuário_id, tipo, data)


# 3.1. Modelagem da Situação Atual (Modelagem AS IS)

Atualmente, muitas pessoas enfrentam problemas com contas de luz elevadas, o que representa um grande impacto financeiro, principalmente em residências com uso descontrolado de energia. Isso ocorre por diversos fatores:

**Falta de Informação Clara**  
Os usuários muitas vezes não têm uma visão detalhada e compreensível do próprio consumo de energia. As informações fornecidas pelas distribuidoras costumam ser técnicas e de difícil interpretação, gerando desconhecimento sobre o consumo real.

**Dificuldade de Identificação de Padrões de Consumo**  
Práticas diárias como deixar luzes acesas, manter aparelhos em stand-by ou usar aquecedores excessivamente podem elevar o consumo, mas muitas vezes passam despercebidas pelos usuários.

**Processos Manuais e Fragmentados**  
Muitos consumidores tentam monitorar o consumo por conta própria, utilizando anotações ou ferramentas complicadas. Isso leva a retrabalho, erros de cálculo e confusão.

**Falta de Ações Corretivas**  
Sem uma ferramenta clara e acessível para visualizar excessos de consumo, os usuários têm dificuldade para tomar decisões corretivas a tempo. Isso gera contas mais altas e maior impacto ambiental.

**Problemas Identificados**  
- **Desconhecimento do Consumo Real:** Falta de clareza sobre quando e por que o consumo aumenta.  
- **Dificuldade de Ação:** A ausência de ferramentas simples impede decisões rápidas, como desligar aparelhos não utilizados.  
- **Impacto Econômico e Ambiental:** O consumo elevado afeta o orçamento e contribui para maiores emissões de CO₂.

---

# 3.2. Descrição Geral da Proposta (Modelagem TO BE)

A solução proposta visa otimizar o acompanhamento do consumo de energia por meio de um sistema digital acessível, que permite aos usuários monitorar dados, visualizar alertas e obter sugestões sustentáveis para melhorar seu uso de eletricidade.

**Alinhamento com a Estratégia e Objetivos do Negócio**

- **Eficiência Energética:** Apoiar os usuários na identificação de desperdícios e incentivar hábitos de consumo mais conscientes.
- **Acessibilidade e Usabilidade:** Interface amigável e de fácil navegação, adequada para diferentes perfis de usuários.
- **Automação de Processos:** Eliminação de controles manuais, com uso de sensores e registros automáticos no sistema.
- **Sustentabilidade:** Encorajamento ao consumo responsável, com sugestões sustentáveis associadas aos eletrodomésticos pesquisados.

**Principais Funcionalidades da Solução**

- **Interface Simples e Acessível:** Apresenta informações de forma clara, com linguagem acessível para todos os públicos, inclusive idosos.
- **Monitoramento de Consumo:** Utiliza medidores inteligentes para registrar o consumo e identificar padrões gerais de uso ao longo do tempo.
- **Sugestões Sustentáveis:** Ao pesquisar eletrodomésticos, o sistema exibe dicas ecológicas relacionadas ao tipo de aparelho buscado.
- **Histórico de Interações:** O sistema armazena registros de ações do usuário, como postagens no fórum e visualizações de sugestões, permitindo acompanhar seu comportamento ao longo do tempo.

**Limitações da Solução**

- **Dependência de Hardware:** É necessário utilizar medidores inteligentes compatíveis com o sistema.
- **Conectividade:** O funcionamento pleno depende de uma conexão de internet estável.
- **Adoção pelo Usuário:** Pode haver resistência inicial de usuários que não estão familiarizados com tecnologias digitais.



# 3.3. Modelagem dos processos

### Processo 1: Cadastrar usuário

Este processo automatiza o cadastro de novos usuários no sistema, desde o acesso ao formulário até a criação da conta e redirecionamento para a página de login. O usuário preenche seus dados, o sistema valida as informações, persiste o registro e fornece feedback imediato sobre sucesso ou erro.

![image](https://github.com/user-attachments/assets/3713b8de-3bb5-4254-9a20-43d7d9ddaa6e)

| **Processo**                | **Entradas**                                       | **Saídas**                                             |
|----------------------------|----------------------------------------------------|--------------------------------------------------------|
| Acessar página de cadastro | URL da aplicação                                   | Formulário de cadastro exibido                        |
| Preencher formulário       | Nome completo, E-mail, Senha, Confirmação de senha | Dados do formulário prontos para envio               |
| Enviar dados para o sistema| Dados do formulário                                | Requisição de cadastro enviada                        |
| Validar dados              | Dados do formulário                                | **Se válidos:** objeto DTO de usuário<br>**Se inválidos:** lista de erros de validação |
| Decisão: dados válidos?    | Resultado da validação                             | Fluxo "válido" ou "inválido"                          |
| Criar conta no banco de dados | DTO de usuário válido                           | Registro de usuário criado no BD                     |
| Reportar erro de validação | Lista de erros de validação                        | Mensagem de erro formatada para o usuário            |
| Redirecionar para página de login | Usuário criado com sucesso                  | Página de login exibida e toast "Cadastro realizado" |
| Armazenar log de auditoria | Evento de cadastro (sucesso/erro)                  | Entrada de log no sistema (audit trail)              |



### Processo 2: Fazer login
Participantes: Usuário e Sistema.

O sistema permite que usuários façam login ou criem uma conta. Ele valida as credenciais informadas e, caso estejam corretas, concede acesso ao sistema. Se os dados forem inválidos, exibe mensagens de erro apropriadas. No caso de cadastro, o sistema valida os dados inseridos e cria a conta, permitindo o acesso logo em seguida.

Fluxo do Processo: 
![image](https://github.com/user-attachments/assets/36e22971-94a6-4068-872c-875910389d5c)


| **Processo**              | **Entradas**                       | **Saídas**                       |
| ------------------------- | ---------------------------------- | -------------------------------- |
| Inserir login e senha     | Dados do usuário                   | Credenciais inseridas            |
| Já tem conta?             | Credenciais inseridas              | Escolha entre login ou cadastro  |
| Validar Credenciais       | Dados do login                     | Login válido ou inválido         |
| Exibir erro de login      | Credenciais inválidas              | Mensagem de erro exibida         |
| Acessar sistema           | Login ou cadastro bem-sucedido     | Usuário dentro do sistema        |
| Preencher cadastro        | Dados pessoais do usuário          | Formulário preenchido            |
| Validar dados de cadastro | Formulário preenchido              | Dados válidos ou inválidos       |
| Exibir erro de cadastro   | Dados inválidos                    | Mensagem de erro                 |
| Criar conta               | Dados válidos                      | Conta criada                     |
| Credenciais válidas?      | Resultado da validação de login    | Direciona para acesso ou erro    |
| Dados válidos?            | Resultado da validação de cadastro | Conta criada ou exibição de erro |

### Processo 3: Cadastrar post
Participantes: Sistema e usuário.

Este processo tem como objetivo permitir o usuario a relizar cadastro de post. O sistema valida informações do post inserida pelo usuario e salva os dados do post no banco de dados. 

![diagrama3](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-eco-watt/blob/f90e36bf0c661e706570ada5819d2113eff18318/docs/images/processo3.jpg)

### Processo 4: Deletar post
Participantes: Sistema e usuário.

Este processo tem como objetivo permitir o usuario a realizar remoção de post. O sistema valida o post escolhido para deletar e remove o registro no banco de dados. 
Fluxo do Processo:

![diagrama3](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-eco-watt/blob/457c7a03bd5bf30a245c7b0e14e70172dab0afac/docs/images/processso4.jpg)

### Processo 5: Gerar histórico de comentários  
participantes: Sistema e usuário.

Este processo tem como objetivo monitorar automaticamente os dados de consumo dos usuários, identificar padrões de consumo excessivo ou incomum, e notificar os usuários com alertas e sugestões de economia. Além disso, o sistema mantém um histórico das interações e decisões do usuário, permitindo o acompanhamento de melhorias e ajustes no consumo ao longo do tempo.
Fluxo do Processo:
![diagrama3](https://github.com/user-attachments/assets/6b69d933-aa4d-4037-9af9-caf9b32e8615)

| **Processo**                             | **Entradas**                                 | **Saídas**                                           |
|-----------------------------------------|----------------------------------------------|------------------------------------------------------|
| Receber dados de consumo                | Dados coletados dos dispositivos do usuário  | Dados disponíveis para validação                    |
| Validar dados recebidos                 | Dados brutos de consumo                      | Dados prontos para análise                          |
| Analisar padrão de consumo              | Dados validados                              | Padrão identificado / Detecção de anomalias         |
| Verificar consumo excessivo             | Padrão de consumo analisado                  | (Sim) → prosseguir com alerta / (Não) → registrar como normal |
| Registrar consumo normal                | Consumo dentro do padrão esperado            | Dados registrados no histórico                      |
| Gerar alerta                            | Consumo excessivo detectado                  | Alerta de consumo gerado                            |
| Gerar sugestão de economia              | Alerta gerado                                | Sugestão personalizada criada                       |
| Enviar notificação ao usuário           | Alerta e sugestão disponíveis                | Notificação entregue ao usuário                     |
| Receber notificação                     | Notificação enviada pelo sistema             | Ação do usuário iniciada (acesso à plataforma)      |
| Acessar plataforma                      | Notificação recebida                         | Tela de login aberta                                |
| Fazer login                             | E-mail e senha do usuário                    | Acesso concedido à conta                            |
| Visualizar alerta e sugestão           | Acesso à plataforma                          | Informações de alerta/sugestão exibidas             |
| Interagir com a sugestão               | Alerta e sugestão exibidos                   | (Sim) → aplicar sugestão / (Não) → apenas visualizar |
| Registrar sugestão aplicada             | Ação do usuário (aplicar sugestão)           | Sugestão registrada no histórico                    |
| Registrar visualização do alerta       | Ação do usuário (visualização sem ação)      | Visualização registrada no histórico                |

### Processo 6: Pesquisar Eletrodoméstico
Participantes: Sistema e Usuário

O sistema permite que o usuário utilize uma calculadora de consumo energético e pesquise eletrodomésticos com base em critérios inseridos manualmente. Após a busca, o sistema consulta o banco de dados e retorna os resultados encontrados, que são então exibidos para o usuário de forma simples e acessível:

Fluxo do Processo:
![image](https://github.com/user-attachments/assets/2e0e3e8d-d030-4c25-8b18-a4de05598574)

| **Processo**                     | **Entradas**               | **Saídas**                           |
| -------------------------------- | -------------------------- | ------------------------------------ |
| Abrir calculadora de consumo     | Acesso do usuário          | Tela da calculadora aberta           |
| Usar a calculadora               | Dados de consumo inseridos | Resultado do cálculo                 |
| Digitar nome do eletrodoméstico  | Nome digitado pelo usuário | Termo de busca                       |
| Receber solicitação de pesquisa  | Termo de busca             | Solicitação recebida                 |
| Buscar eletrodomésticos no banco | Solicitação recebida       | Lista de eletrodomésticos            |
| Retornar resultados da busca     | Lista de eletrodomésticos  | Resultados da busca                  |
| Visualizar resultados            | Resultados da busca        | Eletrodomésticos exibidos ao usuário |


### Oportunidades de Melhoria
- Personalização dos alertas com base no perfil do usuário.
- Automação de resposta, permitindo desligamento remoto de dispositivos.

 ### Processo 7: Avaliar sugestões de eletrodomésticos

 O sistema permite que o usuário avalie as sugestões de eletrodomésticos exibidas após a pesquisa, utilizando um sistema de pontuação com estrelas. Essa interface de avaliação é apresentada logo após a exibição dos resultados, oferecendo uma forma simples e direta de expressar a satisfação com a sugestão feita. Após a avaliação, a pontuação é armazenada automaticamente no banco de dados, permitindo que o sistema aprenda com as preferências dos usuários e melhore a qualidade das próximas sugestões.

![Screenshot_1](https://github.com/user-attachments/assets/06faaf9f-289b-4b79-8f76-653cd522979a)

| Processo                             | Entradas                      | Saídas                                     |
|--------------------------------------|-------------------------------|--------------------------------------------|
| Exibir estrelas para votação         | Resultados da busca           | Interface de avaliação exibida             |
| Avaliar sugestão dada pelo sistema   | Interface de avaliação        | Avaliação preenchida                       |
| Armazenar avaliação no banco de dados| Avaliação preenchida          | Avaliação armazenada no banco de dados     |


